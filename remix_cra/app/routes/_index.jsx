import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Regular Remix App" },
    { name: "description", content: "Welcome to Boat" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Boat</h1>
      <Link to="/demo">Demo page</Link>
    </div>
  );
}
