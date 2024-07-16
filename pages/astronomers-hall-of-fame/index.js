import Link from "next/link";

export default function HallOfFame() {
  return (
    <div>
      <h1>I am the Astronomers Hall of Fame</h1>
      <ul>
        <li>
          <Link href="/guided-experiences">Back to Guided Experiences</Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame/1">Astronomer 1</Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame/2">Astronomer 2</Link>
        </li>
      </ul>
    </div>
  );
}
