import { Fragment } from 'react'
import Head from 'next/head'

import './asserts/styles.less'

export default ({ children }) =>
  <Fragment>
    <Head>
      <title>Map Your World</title>
    </Head>
    <style jsx global>{`
      body {
        display: flex;
      }
    `}</style>
    {children}
  </Fragment>