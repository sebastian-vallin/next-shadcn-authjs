import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="prose dark:prose-invert mx-auto px-2 pt-8 md:px-0 md:pt-24">
      <h1>
        Welcome to&nbsp;
        <Link href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          NEXT.JS!
        </Link>
      </h1>
      <h2>Features</h2>
      <ul>
        <li>NEXT.JS App Router</li>
        <li>Typescript</li>
        <li>
          <Link href="https://tailwindcss.com/docs/installation" target="_blank" rel="noreferrer">
            Tailwindcss
          </Link>
        </li>
        <ul>
          <li>
            <code>
              <Link href="https://github.com/tailwindlabs/tailwindcss-typography" target="_blank" rel="noreferrer">
                @tailwindcss/typography
              </Link>
            </code>
          </li>
          <li>
            <code>
              <Link href="https://github.com/jamiebuilds/tailwindcss-animate" target="_blank" rel="noreferrer">
                tailwindcss-animate
              </Link>
            </code>
          </li>
        </ul>
        <li>
          <Button variant="secondary" asChild className="not-prose">
            <Link href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
              shadcn/ui
            </Link>
          </Button>
        </li>
      </ul>
      <p className="flex items-center justify-center rounded-xl border border-b border-gray-200 bg-gray-100 bg-gradient-to-b from-zinc-100 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        Get started by editing&nbsp;
        <code>src/app/page.tsx</code>
      </p>
    </main>
  );
}
