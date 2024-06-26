declare namespace _root {
export type Props = {
loggedIn: boolean;
test: string;
};
export type actions = { login: (input: {email: string, number: number|undefined|null, password: string, props: {
loggedIn: boolean;
test: string;
}}) => any;
logout: () => void;
 };
}
declare namespace about.$item {
export type Item = {
itemId: string;
};
export type Props = {
id: string;
};
export type actions = { goToHome: () => void;
 };
}
declare namespace about.$item.ok.$blah {
export type Item = {
id: string;
name: string;
};
export type Props = {
id: string;
};
export type actions = { goToHome: (payload: {item: any;}) => void;
 };
}
