import { getLocale } from "next-intl/server";
import { z } from "zod/v4";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";

export const CategorySchema = z.object({
  title: z.string(),                                                                                                                           
});

export const getCategoryBySlug = async (categorySlug: string) => {
  const site = siteFromLocale(await getLocale());

  const query = graphql(`
    query CategoryTitle($site: [String], $categorySlug: [String]) {
      category(site: $site, slug: $categorySlug) {
        title
      }
    }
  `);

  const {data} = await queryAPI({
    query: query,
    variables: {
      site: [site],
      categorySlug: [categorySlug]
    },
  });

  if (!data?.category) return;

  const { title } = data.category;

  if (!title ) {
    return;
  }  
  return title;
};