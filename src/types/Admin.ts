import type {Authorization} from "./Authorization";

export interface Admin {
    id: number;
    userId: number;
    name: string;
    contact: string;
    password: string;
    userRole:string;
    Authorization: Authorization;
    status:'ACTIVE'|'INACTIVE';
}