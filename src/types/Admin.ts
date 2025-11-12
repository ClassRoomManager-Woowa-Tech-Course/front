import type {Authorization} from "./Authorization";

export interface Admin {
    adminId: number;
    name: string;
    contact: string;
    password: string;
    role:string;
    authorization: Authorization;
    active: string;
}