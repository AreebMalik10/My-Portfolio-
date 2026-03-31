import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET() {
  try {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const docs = snap.docs?.map((d) =>  ({ id: d.id, ...d.data() }));
    return NextResponse.json({ data : docs }, { status: 200 });
  } catch(err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const authCheck = await requireAdmin(req);
  if ((authCheck as any)?.status) return authCheck as NextResponse;

  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { title, description = "", techStack = [], status = "Draft", featured = false, githubUrl, liveUrl, images = [] } = body;
  if (!title || !Array.isArray(techStack) || techStack.length === 0) {
    return NextResponse.json({ error: "title and techStack are required" }, { status: 400 });
  }

  try {
    const docRef = await addDoc(collection(db, "projects"), {
      title, description, techStack, status, featured, githubUrl, liveUrl, images,
      createdAt: serverTimestamp(), updatedAt: serverTimestamp()
    });
    return NextResponse.json({ data: { id: docRef.id }, message: "Project created" }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}