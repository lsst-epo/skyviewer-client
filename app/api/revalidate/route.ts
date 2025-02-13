import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { languages } from "@/lib/i18n/settings";
import { addLocaleUriSegment } from "@/lib/i18n";
import tagStore from "@/lib/api/tags";

const REVALIDATE_SECRET_TOKEN = process.env.CRAFT_REVALIDATE_SECRET_TOKEN;
const CRAFT_HOMEPAGE_URI = "__home__";

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
    languages.forEach((locale) => {
      const parts: Array<string> =
        uri === CRAFT_HOMEPAGE_URI ? [] : uri.split("/");

      const path = addLocaleUriSegment(locale, parts.join("/"));
      const dataTag = tagStore[parts[0]];

      if (dataTag) {
        revalidateTag(dataTag);
      }

      revalidatePath(path, "layout");
    });

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Error revalidating",
  });
}
