import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'

import Laramix from '../../vendor/laramix/laramix/resources/js/react/laramix';
import { createRoot } from 'react-dom/client'
import routeManifest  from './laramix-routes.manifest.json';

createInertiaApp({
    resolve: name => {

        const routes =  import.meta.glob('./routes/*.tsx');

        if (name === 'Laramix') {
            Laramix.routes = routes;
            Laramix.manifest = routeManifest;
            return Laramix;
        }
        const pages = import.meta.glob('./Pages/**/*.tsx', {eager: true});
        const page = pages[`./${name}.tsx`];
        return page;
    },

  setup({ el, App, props }) {
    createRoot(el).render(
            <App {...props} />
    )
  },
})
