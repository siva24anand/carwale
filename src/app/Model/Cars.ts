export interface ICars {
    Name: string;
    Type?: string;
    Price?:string;
    Brand?:string;
}

export class Cars implements ICars{
    Name: string;    Type?: string;
    Price?: string;
    Brand?: string;
}