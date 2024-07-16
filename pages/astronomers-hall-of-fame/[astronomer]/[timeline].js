import { useRouter } from "next/router";
import Link from "next/link";

export default function Astronomer() {
  const {
    query: { astronomer, timeline },
  } = useRouter();

  return (
    <div>
      <h1>I am Astronomer #{astronomer} timeline</h1>
      <ul>
        <li>
          <Link href="/astronomers-hall-of-fame">
            Back to Astronomers Hall of Fame
          </Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame">Back</Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame">Next</Link>
        </li>
      </ul>
    </div>
  );
}
