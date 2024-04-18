import { Link, json, useLoaderData } from "@remix-run/react";
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

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Effect: ", search);
  }, [search]);

  return (
    <div>
      <h1>Welcome to Boat</h1>
      <Link to="/demo">Demo page</Link>
      <br />
      {greeting}
      <SomeForm setSearch={setSearch} />
    </div>
  );
}

function SomeForm({ setSearch }) {
  return (
    <form onSubmit={
      e => {
        e.preventDefault();
        setSearch(e.target.query.value);
      }
    } >
      <label>
        query:
        <input
          name="query"
          defaultValue={""}
        />
      </label>
    </form>
  );
}