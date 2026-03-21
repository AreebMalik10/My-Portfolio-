import bcypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (pw: string) => bcypt.hash(pw, 10);
export const comparePassword = async (pw: string, hash: string) => bcypt.compare(pw, hash);

export const signToken = (payload: object) => 
    jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

export const verifyToken = (token: string) => 
    jwt.verify(token, process.env.JWT_SECRET!);