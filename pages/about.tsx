import Head from 'next/head';

export async function getServerSideProps() {
  return {
    props: {
      message: "You're on the About Page!"
    }
  };
}

export default function About({ message }) {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main>
        <h1>{message}</h1>
        <p>This page is also rendered with SSR.</p>
      </main>
    </>
  );
}
