import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { languages } from "@/lib/i18n/settings";
import tagStore from "@/services/api/tags";
import { env } from "@/env";
import { getPathname } from "@/lib/i18n/navigation";
import { isDefaultLocale } from "@/lib/i18n";

const REVALIDATE_SECRET_TOKEN = env.CRAFT_REVALIDATE_SECRET_TOKEN;
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

      const path = getPathname({
        href: `/${parts.join("/")}`,
        locale,
        forcePrefix: !isDefaultLocale(locale),
      });
      const dataTag = tagStore[parts[0]];

      if (dataTag) {
        revalidateTag(dataTag);
      }

      revalidateTag(tagStore.globals);
      revalidatePath(path);
    });

    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: "Error revalidating",
  });
}
