export interface AdminUser {
    id?: string;
    username: string;
    passwordHash: string;
    role: 'admin' | 'user';
    createdAt: string;
    updatedAt?: string;
}