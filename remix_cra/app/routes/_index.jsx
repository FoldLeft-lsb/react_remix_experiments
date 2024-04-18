import { Link, json, useLoaderData } from "@remix-run/react";

export async function loader() {
  console.log("In the loader");
  return json(await Promise.resolve("Hello from loader"))
}

export const meta = () => {
  return [
    { title: "Regular Remix App" },
    { name: "description", content: "Welcome to Boat" },
  ];
};

export default function Index() {
  const greeting = useLoaderData();
  console.log(greeting);
  return (
    <div>
      <h1>Welcome to Boat</h1>
      <Link to="/demo">Demo page</Link>
      <br />
      {greeting}
    </div>
  );
}
