import Head from "next/head";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netlify Forms to Notion</title>
      </Head>
      <main>
        <h1>Netlify Forms to Notion</h1>
        <Contact />
      </main>
    </>
  );
}
