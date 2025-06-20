"use server";

import { redirect, RedirectType } from "next/navigation";
import { env } from "@/env";
import revalidateUri from "@/services/revalidation";

export default async function revalidate({
  uri,
  token,
}: {
  uri: string;
  token: string;
}) {
  if (uri && token === env.CRAFT_REVALIDATE_SECRET_TOKEN) {
    const revalidation = revalidateUri(uri);

    const params = new URLSearchParams({
      now: new Date().getTime().toString(),
    });

    Object.entries(revalidation).forEach(([key, revalidated]) => {
      revalidated.forEach((value) => {
        params.append(key, value);
      });
    });

    redirect(`?${params.toString()}`, RedirectType.replace);
  }
}
