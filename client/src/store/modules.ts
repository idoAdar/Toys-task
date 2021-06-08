export interface ToyModel {
    id: number,
    name: string,
    price: number,
    key?: number,
    isChecked?: boolean
}

export interface StateType {
    toys: ToyModel[],
    repository: ToyModel[],
    filter: boolean,
    msg: string
}