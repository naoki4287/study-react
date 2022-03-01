import Head from 'next/head';
import 'src/styles/globals.css'
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps}  foo={123} />
    </>
  );
}

// 明日やること  _app.jsxの変更が反映されない

export default MyApp;
  