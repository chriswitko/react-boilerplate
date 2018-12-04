import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta name='robots' content='noindex' />
        </Head>
        <body id='page' style={{ display: 'flex', flex: 1 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}