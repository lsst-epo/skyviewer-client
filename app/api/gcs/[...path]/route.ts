import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";
import { getAuthHeaders } from "@/lib/gcs/auth";

export async function GET(
  _req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  if (env.CLOUD_ENV !== "DEV") {
    return new NextResponse(null, { status: 404 });
  }

  const gcsUrl = `https://storage.googleapis.com/${params.path.join("/")}`;
  const headers = await getAuthHeaders(gcsUrl);
  const upstream = await fetch(gcsUrl, { headers });

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type":
        upstream.headers.get("Content-Type") ?? "application/octet-stream",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
