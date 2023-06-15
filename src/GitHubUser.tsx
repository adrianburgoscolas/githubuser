import { Suspense } from "react";

import GitHubUserCard from "./GitHubUser/GitHubUserCard";
import Spinner from "./GitHubUser/Spinner";

export default function GitHubUser() {
  return (
    <Suspense fallback={<Spinner />}>
      <GitHubUserCard />
    </Suspense>
  );
}
