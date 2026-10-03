import { NextRequest, NextResponse } from "next/server";
import { env } from "@/env";
import revalidate from "@/services/revalidation";

const REVALIDATE_SECRET_TOKEN = env.CRAFT_REVALIDATE_SECRET_TOKEN;

export async function GET(request: NextRequest): Promise<NextResponse> {
  const uri = request.nextUrl.searchParams.get("uri");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!uri) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      message: "Missing path to revalidate",
    });
  }

  if (secret !== REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      message: "Invalid token",
    });
  }

  if (uri) {
    revalidate(uri);

    /** If a tour is being revalidated under the /tours path,
     * revalidate the /guided-experiences page as well to update
     * the tour counts there.
    */
    if (uri.split("/")[0] === "tours") {
      revalidate("guided-experiences");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Error revalidating",
  });
}
