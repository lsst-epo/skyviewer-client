import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>I am the homepage</h1>
      <ul>
        <li>
          <Link href="/explorer">
            <a>I want to explore</a>
          </Link>
        </li>
        <li>
          <Link href="/guided-experiences">
            <a>Please guide me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
