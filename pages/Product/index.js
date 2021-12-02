import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import SideBar from '../../component/SideBar'

export default function Product() {
    return (
        <>
            <Head>
                <title>Produtos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideBar name="Nicolas Estanislau"/>
            <main className={styles.main}>
                <p>produto</p>
            </main>
        </>
    )
}