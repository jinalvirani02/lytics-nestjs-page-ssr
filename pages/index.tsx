import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: {
      message: "Welcome to the Home Page!"
    }
  };
}

export default function Home({ message }) {

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>{message}</h1>
        <p>This is the home page. Click the link to track a custom event.</p>
        <Link href="/about">
          <a>Go to About</a>
        </Link>
      </main>
    </>
  );
}
