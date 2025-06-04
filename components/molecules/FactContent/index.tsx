import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { FC } from "react";
import TextBlock from "@/components/atomic/TextBlock";
import BlockTitle from "@/components/atomic/BlockTitle";

interface FactContentProps {
  title?: string;
  paragraphs: Array<{ id: string; text: string }>;
  className?: string;
}

const FactContent: FC<FactContentProps> = ({
  title,
  paragraphs = [],
  className,
}) => {
  return (
    <section className={className}>
      <Stack space="var(--size-spacing-xs)">
        <IconComposer icon="Info" size="3em" />
        {title && <BlockTitle as="h2">{title}</BlockTitle>}
        {paragraphs.map(({ id, text }) => {
          return <TextBlock key={id} text={text} />;
        })}
      </Stack>
    </section>
  );
};

FactContent.displayName = "Molecule.FactContent";

export default FactContent;
