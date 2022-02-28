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
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (foo < 10) {
      setFoo((prevfoo) => prevfoo + 1);
    }
  }, [foo]);

  const handleDisplay = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);
  
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return;
    }
    setText(e.target.value.trim());
  }, []); 
  
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
      {isShow ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange}/>
      <Main page="index" />
      <Footer />
    </div>
  );
}
