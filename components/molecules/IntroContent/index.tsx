import { FC } from "react";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import BlockTitle from "@/components/primitives/BlockTitle";
import TextBlock from "@/components/primitives/TextBlock";
import styles from "./styles.module.css";

interface IntroContentProps {
  title: string;
  subtitle: string;
  paragraphs: Array<{ id: string; text: string }>;
  className?: string;
}

const IntroContent: FC<IntroContentProps> = ({
  title,
  subtitle,
  paragraphs = [],
  className,
}) => {
  return (
    <section className={className}>
      <Stack space="var(--size-spacing-xs)">
        <BlockTitle>{title}</BlockTitle>
        <span className={styles.subtitle}>{subtitle}</span>
        {paragraphs.map(({ id, text }) => {
          return <TextBlock key={id} text={text} />;
        })}
      </Stack>
    </section>
  );
};

IntroContent.displayName = "Molecule.IntroContent";

export default IntroContent;
