import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'

import Laramix from '../../vendor/laramix/laramix/resources/js/react/laramix';
import { createRoot } from 'react-dom/client'
import routeManifest  from './laramix-routes.manifest.json';
const routes =  import.meta.glob('./routes/*.tsx');

const LaramixComponent = Laramix({
    routes: routes,
    manifest: routeManifest
});
createInertiaApp({
    resolve: name => {

        if (name === 'Laramix') {
            return LaramixComponent;
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
