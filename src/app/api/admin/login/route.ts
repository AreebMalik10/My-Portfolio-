import { NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { comparePassword, signToken } from "@/lib/auth";

export async function POST(req: Request) {
    const body = await req.json();
    console.log("Received login request with body:", body);
    
    const { username, password } = body;
    if(!username || !password) {
        return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }
    try {
        const q = query(collection(db, 'admins'), where('username', '==', username));
        const snap = await getDocs(q);
        if(snap.empty) return NextResponse.json({ error: "User not found" }, { status: 404 });

        const doc = snap.docs[0].data() as any;
        const match = await comparePassword(password, doc.passwordHash);
        if(!match) return NextResponse.json({ error: 'Invalid Password' }, { status: 401 });

        const token = signToken({ sub: snap.docs[0].id, role: doc.role });
        return NextResponse.json({ data: { token }, message: "Login Successful" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}