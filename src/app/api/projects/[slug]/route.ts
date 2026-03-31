import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    query,
    collection,
    where,
    getDocs
} from "firebase/firestore";
import { requireAdmin } from "@/lib/requireAdmin";

async function findProjectRefBySlugOrId(slugOrId: string) {
    // try as document id first
    const byIdRef = doc(db, "projects", slugOrId);
    const byIdSnap = await getDoc(byIdRef);
    if (byIdSnap.exists()) return byIdRef;

    // fallback: query by `slug` field
    const q = query(collection(db, "projects"), where("slug", "==", slugOrId));
    const snap = await getDocs(q);
    if (!snap.empty) return doc(db, "projects", snap.docs[0].id);

    return null;
}

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
    try {
        const ref = await findProjectRefBySlugOrId(params.slug);
        if (!ref) return NextResponse.json({ error: "Project not found" }, { status: 404 });

        const snap = await getDoc(ref);
        return NextResponse.json({ data: { id: snap.id, ...snap.data() } }, { status: 200 });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
    const authCheck = await requireAdmin(req);
    if ((authCheck as any)?.status) return authCheck as NextResponse;

    let body: any;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    try {
        const ref = await findProjectRefBySlugOrId(params.slug);
        if (!ref) return NextResponse.json({ error: "Project not found" }, { status: 404 });

        await updateDoc(ref, { ...body, updatedAt: serverTimestamp() });
        const updatedSnap = await getDoc(ref);
        return NextResponse.json({ data: { id: updatedSnap.id, ...updatedSnap.data() }, message: "Project updated" }, { status: 200 });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
    const authCheck = await requireAdmin(req);
    if ((authCheck as any)?.status) return authCheck as NextResponse;

    try {
        const ref = await findProjectRefBySlugOrId(params.slug);
        if (!ref) return NextResponse.json({ error: "Project not found" }, { status: 404 });

        await deleteDoc(ref);
        return NextResponse.json({ data: { id: ref.id }, message: "Project deleted" }, { status: 200 });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
}