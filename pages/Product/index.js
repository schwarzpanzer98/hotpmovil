import React from "react";
import Head from "next/head";
import styles from "../../styles/Product.module.css";
import SideBar from "../../component/SideBar";
import CardProduct from "../../component/CardProduct";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar name="Nicolas Estanislau" />
      <main className={styles.container}>
        <div>
          <h1 className={styles.title}>O que você vai vender?</h1>
          <div className={styles.cardContainer}>
            <Link href="/InfoCourse">
              <div>
                <CardProduct
                  onClick={() => {
                    {
                      console.log("cheguei aqui");
                    }
                  }}
                  image="https://vulcano.hotmart.com/app-product/52a76191d485c8033a2b.svg"
                  altContent="Curso Online"
                  title="Curso Online"
                  text="Aulas em um ambiente seguro"
                />
              </div>
            </Link>
            
          </div>
        </div>
      </main>
    </>
  );
}
