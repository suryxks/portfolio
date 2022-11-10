import axios from "axios";
import { SpinnerInfinity } from "spinners-react";
export async function getStaticProps() {
    const uri = process.env.GITHUB_REPO_FETCH_URI;
    const response = await axios.get("https://gh-pinned-repos.egoist.dev/?username=suryxks");


  console.log(response.data);
  return {
    props: {
      repos: [...response.data],
    },
  };
}
export default function Projects({ repos }) {
  return (
    <div>
      {!repos ? (
        <SpinnerInfinity
          size={50}
          thickness={100}
          speed={100}
          color="rgba(0, 0, 0, 1)"
          secondaryColor="rgba(20, 110, 180, 1)"
        />
      ) : (
        <div>
          {repos.map((repo) => (
            <div key={repo.repo}>{repo.repo}</div>
          ))}
        </div>
      )}
    </div>
  );
}
