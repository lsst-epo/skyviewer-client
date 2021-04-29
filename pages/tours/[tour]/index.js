import { useRouter } from "next/router";
import { withLayout } from "@moxy/next-layout";
import Link from "next/link";
import PrimaryLayout from "@/layouts/Primary";

const Tour = () => {
  const {
    query,
    query: { tour, details, fact },
  } = useRouter();

  function getBackUrl(query) {
    const { tour, details, fact } = query;
    if (details) {
      return `/tours/${tour}`;
    }

    if (fact) {
      return `/tours/${tour}/?details=1`;
    }

    return `/tours/`;
  }

  function getNextUrl(query) {
    const { tour, details, fact } = query;
    if (details) {
      return `/tours/${tour}/?fact=1`;
    }

    if (fact) {
      return `/tours/${tour}/tour`;
    }

    return `/tours/${tour}/?details=1`;
  }

  if (details || fact) {
    return (
      <div>
        <h1>I am Tour #{tour}</h1>
        {details && <p>Bio #{details}</p>}
        {fact && <p>Fact #{fact}</p>}
        <ul>
          <li>
            <Link href={getBackUrl(query)}>
              <a>Back</a>
            </Link>
          </li>
          <li>
            <Link href={getNextUrl(query)}>
              <a>Next</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>I am Tour #{tour}</h1>
      <ul>
        <li>
          <Link href={getBackUrl(query)}>
            <a>Back</a>
          </Link>
        </li>
        <li>
          <Link href={getNextUrl(query)}>
            <a>Let&apos;s Start</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withLayout(<PrimaryLayout closeUrl="/tours" />)(Tour);
