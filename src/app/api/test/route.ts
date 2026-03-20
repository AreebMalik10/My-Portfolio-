import { NextResponse } from "next/server";

/**
 * GET /api/test
 * Health-check / smoke-test route.
 * Returns server status, timestamp, and environment.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      message: "Portfolio API is running",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    },
    { status: 200 }
  );
}
