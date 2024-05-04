import Link from "next/link";

export function _404() {
  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center h-[100dvh] gap-6"
    >
      <FrownIcon className="h-24 w-24 text-gray-500 dark:text-gray-400" />
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Uh oh, looks like you're lost!
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Don't worry, we'll help you find your way back. Where would you like
          to go?
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}

function FrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
