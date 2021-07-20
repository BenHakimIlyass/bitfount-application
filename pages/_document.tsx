import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssString } from 'stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap'
            rel='stylesheet'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
