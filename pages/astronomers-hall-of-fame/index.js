import Link from "next/link";

export default function HallOfFame() {
  return (
    <div>
      <h1>I am the Astronomers Hall of Fame</h1>
      <ul>
        <li>
          <Link href="/guided-experiences">
            <a>Back to Guided Experiences</a>
          </Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame/1">
            <a>Astronomer 1</a>
          </Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame/2">
            <a>Astronomer 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
