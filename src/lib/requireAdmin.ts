import { NextResponse } from 'next/server';
import { verifyToken } from './auth';

export async function requireAdmin(req: Request) {
    const auth = req.headers.get('Authorization');

    if (!auth || !auth.startsWith('Bearer ')) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = auth.split(' ')[1];
    try {
        const payload = verifyToken(token);
        const role = (payload as any).role;

        if (typeof payload !== "object" || payload === null) {
            return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
        }
        
        if (role !== 'admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }
        return payload;

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 401 });
    }
}