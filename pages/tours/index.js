import Link from "next/link";

export default function Tours() {
  return (
    <div>
      <h1>I am the Astronomical Tours</h1>
      <ul>
        <li>
          <Link href="/guided-experiences">
            <a>Back to Guided Experiences</a>
          </Link>
        </li>
        <li>
          <Link href="/tours/1">
            <a>Tour 1</a>
          </Link>
        </li>
        <li>
          <Link href="/tours/2">
            <a>Tour 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
