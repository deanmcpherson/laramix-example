declare namespace Laramix {
    export type Action = {
        _api: _api.Props["actions"];
        _index: _index.Props["actions"];
        _root: _root.Props["actions"];
        "about.$item.ok.$blah": about.$item.ok.$blah.Props["actions"];
        "about.$item": about.$item.Props["actions"];
        "about._index": about._index.Props["actions"];
        about: about.Props["actions"];
    };
}
declare namespace _api {
    export type Props = {
        props: any;
        actions: {
            props: (input?: any) => Promise<{ data: any }>;
            loadThings: (input?: any) => Promise<{ data: { test: number } }>;
        };
        eager: true | undefined;
    };
}
declare namespace _index {
    export type Props = {
        props: {
            test: string;
            test2: {
                name: string;
                age: number;
            }[];
        };
        actions: {
            props: (input?: any) => Promise<{
                data: {
                    test: string;
                    test2: {
                        name: string;
                        age: number;
                    }[];
                };
            }>;
            test: (
                payload: { exampleInput: string },
                options?: Laramix.VisitOptions,
            ) => Promise<any>;
        };
        eager: true | undefined;
    };
}
declare namespace _root {
    export type Props = {
        props: { loggedIn: boolean };
        actions: {
            props: (input?: any) => Promise<{ data: { loggedIn: boolean } }>;
            login: (input: {
                name: string | undefined | null;
                email: string;
                password: string;
            }) => Promise<{ data: any }>;
            logout: (input?: any) => Promise<{ data: any }>;
        };
        eager: true | undefined;
    };
}
declare namespace about {
    export type Props = {
        props: any;
        actions: {};
        eager: true | undefined;
    };
}
declare namespace about._index {
    export type Props = {
        props: any;
        actions: {};
        eager: true | undefined;
    };
}
declare namespace about.$item {
    export type Item = {
        itemId: string;
    };
    export type Props = {
        props: about.$item.Item;
        actions: { goToHome: (options?: Laramix.VisitOptions) => Promise<any> };
        eager: true | undefined;
    };
}
declare namespace about.$item.ok.$blah {
    export type Props = {
        props: { item: number; blah: any };
        actions: {
            props: (
                input?: any,
            ) => Promise<{ data: { item: number; blah: any } }>;
            goToHome: (options?: Laramix.VisitOptions) => Promise<any>;
        };
        eager: true | undefined;
    };
}
declare namespace Laramix {
    export interface VisitOptions {
        preserveScroll?: boolean;
        preserveState?: boolean;
        only?: string[];
        replace?: boolean;
        preserveQuery?: boolean;
        preserveHash?: boolean;
        headers?: Record<string, string>;
        onError?: (error: Error) => void;
        onSuccess?: (page: any) => void;
        onCancel?: () => void;
    }
}
