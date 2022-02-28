import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  //分割代入
  const [foo, setFoo] = useState(1)

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((foo) => foo + 1);
    }
  }, [foo]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
    document.body.style.backgroundColor = ""
    }
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
