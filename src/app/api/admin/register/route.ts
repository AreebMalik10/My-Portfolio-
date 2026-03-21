import { NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password, role = "admin" } = body;
    if(!username || !password) {
        return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    const passwordHash = await hashPassword(password);
    const now = new Date().toISOString();

    try {
        const docRef = await addDoc(collection(db, "admins"), {
            username,
            passwordHash,
            role,
            createdAt: now,
        });
        return NextResponse.json({ data: { id: docRef.id }, message: "Admin Created Successfully" }, { status: 200 })
    } catch (err: any) {
        return NextResponse.json({  error: err.message }, { status: 500 });

    }
}