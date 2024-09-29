import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
    <div className="">
      <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Remix.
          </h1>
    </div>
    </main>
  );
}

