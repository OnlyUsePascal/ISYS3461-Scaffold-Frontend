import { Link } from "react-router";
import { Button } from "../ui/button";

type ErrorProps = {
  title: string;
  message: string;
};

export default function ErrorPage(pr: ErrorProps) {
  return (
    <div>
      <h1>{pr.title}</h1>
      <p>{pr.message}</p>
      <Button asChild>
        <Link to="/">Go home</Link>
      </Button>
    </div>
  );
}
