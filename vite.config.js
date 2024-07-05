import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import laramixVitePlugin from './vendor/laramix/laramix/resources/js/laramix-vite-plugin';
import { watchAndRun } from 'vite-plugin-watch-and-run'
import {sync} from 'glob';
export default defineConfig({
    plugins: [
        react({
            include: [".js", ".jsx", ".ts", ".tsx"],

            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laramixVitePlugin(),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/app/app.jsx",
                 ...sync("resources/app/routes/*.tsx")
            ],
            refresh: true,
        }),
        watchAndRun([
            {
                name: 'php types',
                watchKind: ['add', 'change', 'unlink'],
                watch:[path.resolve("resources/app/routes/**.tsx"), path.resolve('app/**/*.php')],
                run: "php artisan laramix:typescript-transform && php artisan laramix:publish-routes-manifest"
            },

        ]),

   ],
   resolve: {
    alias: {
        "@": path.resolve(__dirname, "resources/app"),
        "@laramix": path.resolve(__dirname, "./vendor/laramix/laramix/resources/js/react"),
    },
}
});
