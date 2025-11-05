import type {Role} from "@/types/Role";

export interface Admin {
    id: number;
    userId: number;
    name: string;
    phoneNumber: string;
    role: Role;
}