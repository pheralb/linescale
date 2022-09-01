import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>
          Create <span>T3</span> App
        </h1>
        <div>
          <h3>This stack uses:</h3>
          <ul>
            <li>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://typescriptlang.org"
                target="_blank"
                rel="noreferrer"
              >
                TypeScript
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
