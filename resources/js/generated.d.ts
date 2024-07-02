declare namespace _index {
export type Props = {
                props: {test: string, test2: {
name: string;
age: number;
}[]};
                actions: { props: (input?: any) => {test: string, test2: {
name: string;
age: number;
}[]};
test: (payload: {testman: string;}) => void;
 };
                eager: true|undefined;
             };
}
declare namespace _root {
export type Props = {
                props: {loggedIn: boolean};
                actions: { props: (input?: any) => {loggedIn: boolean};
login: (input: {name: string|undefined|null, email: string, password: string}) => any;
logout: (input?: any) => any;
 };
                eager: true|undefined;
             };
}
declare namespace about {
export type Props = {
                props: any;
                actions: {  };
                eager: true|undefined;
             };
}
declare namespace about._index {
export type Props = {
                props: any;
                actions: {  };
                eager: true|undefined;
             };
}
declare namespace about.$item {
export type Item = {
itemId: string;
};
export type Props = {
                props: about.$item.Item;
                actions: { goToHome: () => void;
 };
                eager: true|undefined;
             };
}
declare namespace about.$item.ok.$blah {
export type Props = {
                props: {item: number, blah: any};
                actions: { props: (input?: any) => {item: number, blah: any};
goToHome: () => void;
 };
                eager: true|undefined;
             };
}
