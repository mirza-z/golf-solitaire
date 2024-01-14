
export type Karta = {
    value: number,
    shape: string,
};

export type Level = {
    value: number,
    shape: string,
    id: number,
    className: string,
    disabled: boolean,
    hidden: boolean,
    zakljucana?: boolean,
}