import { useState, useRef } from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [shortURL, setShortURL] = useState('')
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = inputRef.current.value

    fetch('/api/shortUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(data => setShortURL(data.shortUrl))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="Acorta tus URLs y compartelos más facil y rapidamente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          URL Shortener
        </h1>

        <p className={styles.description}>
          Acorta tus URLs aquí
        </p>

        <div className={styles.grid}>
          <form className={styles.card} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder='URL'
              style={{ padding: '3px' }}
            />
            <button
              className={styles.button}
              style={{ padding: '3px' }}
            >
              Acortar
            </button>
            <span className={styles.input}>{shortURL}</span>
          </form>
        </div>
      </main>
    </div>
  )
}
