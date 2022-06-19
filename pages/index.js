import Head from "next/head";
import Contact from "./contact";

export default function Home({ books }) {
  return (
    <>
      <Head>
        <title>Netlify Forms to Notion</title>
      </Head>
      <main>
        <h1>Netlify Forms to Notion</h1>
        <Contact />

        <div className={styles.grid}>
          {books.map((book) => (
            <a
              key={book.id}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h2>{book.properties.Name.title[0].plain_text} &rarr;</h2>
              <p>{book.properties.Email.email}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    props: {
      books: response.results,
    },
    revalidate: 1,
  };
}
