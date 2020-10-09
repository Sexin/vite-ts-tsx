export interface State {
    title: string;
}

export const state: State = {
    title: 'Vue(v3) 与 tsx 的结合~',
};

export const mutationSate = (type: State, payload: string): void => {
    type.title = payload;
}