"server-only";
import { revalidateTag } from "next/cache";
import tags from "@/services/api/tags";

type Revalidator = (props: {
  parts: Array<string>;
  tagCollection: Set<string>;
}) => void;

const revalidateGalleries: Revalidator = ({ parts, tagCollection }) => {
  const slug = parts.pop();

  if (slug) {
    tagCollection.add(slug);
    revalidateTag(slug);
  }
};

const revalidators: Record<string, Revalidator> = {
  gallery: revalidateGalleries,
};

const additionalRevalidations: Revalidator = ({ parts, tagCollection }) => {
  const section = parts.find((part) => part.length > 0);

  if (section) {
    const revalidator = revalidators[section];
    const tag = tags[section];

    if (tag) {
      tagCollection.add(tag);
      revalidateTag(tag);
    }

    revalidator && revalidator({ parts, tagCollection });

    tagCollection.add(tags.globals);
    revalidateTag(tags.globals);
  }
};

export default additionalRevalidations;
