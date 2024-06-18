import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'



createInertiaApp({
    resolve: name => {
        const Laramix = import.meta.glob('./Laramix.tsx', { eager: true })
        const pages = import.meta.glob('./Pages/**/*.tsx', {eager: true});
        Object.assign(pages, Laramix);
        const page = pages[`./${name}.tsx`];

        return page;
    },

  setup({ el, App, props }) {
    createRoot(el).render(
            <App {...props} />
    )
  },
})
