import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
function myPlugin() {
    let isDevelopment = false;
     return {
       name: 'blade-tsx',
       enforce: 'pre',
       config(config, {mode}) {

           isDevelopment = mode === 'development';
           return {
             ...config,
             esbuild: {
               ...config.esbuild,
               include: /\.(js|ts|jsx|tsx|php)$/, // .myext
               loader: 'tsx',
             },
           };
         },

       async transform(src, id) {

         if (id.endsWith('.tsx')) {
                   //Strip everything inside php tags
                  return src.replace(/<\?php([\s\S]*?)\?>/g, '');

         }
       },
     }
   };
export default defineConfig({
    plugins: [
        react({
            include: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
            },
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        myPlugin(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',

            ],
            refresh: true,
        }),
    ],
});
