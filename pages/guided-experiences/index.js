import Link from "next/link";

export default function GuidedExperiences() {
  return (
    <div>
      <h1>I am the Guided Experiences landing page</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/tours">
            <a>Astronomical Tours</a>
          </Link>
        </li>
        <li>
          <Link href="/astronomers-hall-of-fame">
            <a>Astronomers Hall of Fame</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
