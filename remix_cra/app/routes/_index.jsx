import { Link, json, useLoaderData, useSearchParams } from "@remix-run/react";
import { useState, useEffect } from "react";

export async function loader() {
  console.log("In the loader");
  return json(await Promise.resolve("Hello from loader"))
}

export const meta = () => {
  return [
    { title: "Regular Remix App" },
    { name: "description", content: "Trying Remix" },
  ];
};

export default function Index() {
  const greeting = useLoaderData();

  const [searchParams] = useSearchParams();

  return (
    <div>
      <h1>Welcome to Boat</h1>
      <Link to="/demo">Demo page</Link>
      <br />
      {greeting}
      <SomeForm searchParams={searchParams} />
    </div>
  );
}

function SomeForm({ searchParams }) {
  return (
    <form>
      <label>
        query:
        <input
          name="query"
          defaultValue={searchParams.get("query")}
        />
      </label>
    </form>
  );
}