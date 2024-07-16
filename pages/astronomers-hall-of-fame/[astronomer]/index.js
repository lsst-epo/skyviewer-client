import { useRouter } from "next/router";
import { withLayout } from "@moxy/next-layout";
import Link from "next/link";
import PrimaryLayout from "@/layouts/Primary";

const Astronomer = () => {
  const {
    query,
    query: { astronomer, timeline, quote, concept },
  } = useRouter();

  function getBackUrl(query) {
    const { astronomer, timeline, quote, concept } = query;
    if (timeline) {
      return `/astronomers-hall-of-fame/${astronomer}`;
    }

    if (quote) {
      return `/astronomers-hall-of-fame/${astronomer}/?timeline=1`;
    }

    if (concept) {
      return `/astronomers-hall-of-fame/${astronomer}/?quote=1`;
    }

    return `/astronomers-hall-of-fame/`;
  }

  function getNextUrl(query) {
    const { astronomer, timeline, quote, concept } = query;
    if (timeline) {
      return `/astronomers-hall-of-fame/${astronomer}/?quote=1`;
    }

    if (quote) {
      return `/astronomers-hall-of-fame/${astronomer}/?concept=1`;
    }

    if (concept) {
      return "/astronomers-hall-of-fame";
    }

    return `/astronomers-hall-of-fame/${astronomer}/?timeline=1`;
  }

  if (timeline || quote || concept) {
    return (
      <div>
        <h1>I am Astronomer #{astronomer}</h1>
        {timeline && <p>Timeline Event #{timeline}</p>}
        {quote && <p>Quotation #{quote}</p>}
        {concept && <p>Take away concept #{concept}</p>}
        <ul>
          <li>
            <Link href={getBackUrl(query)}>Back</Link>
          </li>
          <li>
            <Link href={getNextUrl(query)}>Next</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>I am Astronomer #{astronomer}</h1>
      <ul>
        <li>
          <Link href={getBackUrl(query)}>Back</Link>
        </li>
        <li>
          <Link href={getNextUrl(query)}>Let&apos;s Start</Link>
        </li>
      </ul>
    </div>
  );
};

export default withLayout(
  <PrimaryLayout closeUrl="/astronomers-hall-of-fame" />
)(Astronomer);
