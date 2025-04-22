    import '../css/app.css';

    import { createInertiaApp } from '@inertiajs/react';
    import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
    import { createRoot } from 'react-dom/client';
    import { initializeTheme } from './hooks/use-appearance';
    import Echo from 'laravel-echo';
    import Pusher from 'pusher-js';

    const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: "pusher",
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? "ap1",
        wsHost: import.meta.env.VITE_PUSHER_HOST
            ? import.meta.env.VITE_PUSHER_HOST
            : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
        wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
        wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
        forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? "https") === "https",
        enabledTransports: ["ws", "wss"],
    });
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup({ el, App, props }) {
            const root = createRoot(el);

            root.render(<App {...props} />);
        },
        progress: {
            color: '#4B5563',
        },
    });

    initializeTheme();
