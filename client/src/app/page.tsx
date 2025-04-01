

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300
            bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl
            dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static
            lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-primary"
        >
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t
            from-white via-white dark:from-black dark:via-black lg:static lg:size-auto
            lg:bg-none gap-x-1"
        >
        </div>
      </div>


      <h3 className="text-3xl text-primary dark:invert">Next js</h3>

      <div
        className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4
          lg:text-left gap-x-2"
      >
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border bg-card px-5 py-4 transition-colors
            hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700
            hover:dark:bg-neutral-800/30 dark:border-white dark:border-opacity-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-primary">
            Docs{" "}
            <span
              className="inline-block transition-transform group-hover:translate-x-1
                motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border bg-card px-5 py-4 transition-colors
            hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700
            hover:dark:bg-neutral-800/30 dark:border-white dark:border-opacity-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-primary">
            Learn{" "}
            <span
              className="inline-block transition-transform group-hover:translate-x-1
                motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border bg-card px-5 py-4 transition-colors
            hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700
            hover:dark:bg-neutral-800/30 dark:border-white dark:border-opacity-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-primary">
            Templates{" "}
            <span
              className="inline-block transition-transform group-hover:translate-x-1
                motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border bg-card px-5 py-4 transition-colors
            hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700
            hover:dark:bg-neutral-800/30 dark:border-white dark:border-opacity-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-primary">
            Deploy{" "}
            <span
              className="inline-block transition-transform group-hover:translate-x-1
                motion-reduce:transform-none"
            >
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}