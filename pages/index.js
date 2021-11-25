import React, { Fragment, useEffect } from 'react';
import grapesjs from 'grapesjs'
import pt from 'grapesjs/locale/pt'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-preset-webpage'
import 'grapesjs-preset-newsletter'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DefaultHtml, DefaultCss } from '../component/LayoutGrapesjs/Page/Default'

export default function Home() {
  // layout
  useEffect(() => {
    grapesjs.init({
      container : '#gjs',
      i18n: {
        messages: { pt }
      },
      components: DefaultHtml,
      style: DefaultCss,
      fromElement: true,
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          // options
        }
      },
      storageManager: {
        id: 'gjs-',             // Prefix identifier that will be used on parameters
        type: 'local',          // Type of the storage
        autosave: true,         // Store data automatically
        autoload: true,         // Autoload stored data on init
        stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
    })
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
            <div className={styles.logoSuperior}>GrapesJS</div>
            <nav>
              <div>CONSTRUTOR</div>
              <div>MODELO</div>
              <div>WEB</div>
            </nav>
        </header>
        <div id="gjs">
          {DefaultHtml}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
