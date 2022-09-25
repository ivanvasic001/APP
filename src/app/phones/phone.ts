export interface IPhone {
    name: string,
    phoneNumber: string
}

export class Phone implements IPhone {
    constructor(
        public name: string,
        public phoneNumber: string) {
    }
}