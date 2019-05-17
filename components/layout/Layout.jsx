// @flow
/* eslint-disable quotes */

// #region imports
import React, { useEffect, Fragment } from 'react';
import Head from 'next/head';
import theme from '../../config/theme';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './layout.scss'
// #endregion

// #region flow types
type Props = {
  children: any,
};
// #endregion

// #region constants
const flexibilityJsForIE = `
<!--[if !IE]-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flexibility/2.0.1/flexibility.js"></script>
<!--[endif]-->
`;

const { accent } = theme;

// #region PWA prompt user install app (add to screen)
const registerBeforeinstallprompt = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeinstallprompt', async e => {
      // beforeinstallprompt Event fired
      try {
        // e.userChoice will return a Promise.
        const choiceResult = await e.userChoice;
        if (choiceResult.outcome === 'dismissed') {
          /* eslint-disable no-console */
          console.log('User cancelled home screen install');
          /* eslint-enable no-console */
        } else {
          /* eslint-disable no-console */
          console.log('User added to home screen');
          /* eslint-enable no-console */
        }
      } catch (error) {
        /* eslint-disable no-console */
        console.error(
          'user choice prompt promise failed to resolve, error: ',
          error,
        );
        /* eslint-enable no-console */
      }
    });
  }
};
// #endregion
// #endregion

function Layout({ children }: Props) {
  useEffect(() => registerBeforeinstallprompt());

  return (
    <Fragment>
      <Head>
        <title>Next PRRNB Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.2.1/cosmo/bootstrap.min.css"
        />

        <meta
          name="application-name"
          content="react-redux-nextjs-bootstrap-pwa-starter"
        />

        <link rel="manifest" href="static/manifest.json" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon-16x16.png"
        />

        <meta name="theme-color" content={accent} />

        <link
          rel="mask-icon"
          href="static/safari-pinned-tab.svg"
          color={accent}
        />
        <meta name="apple-mobile-web-app-title" content="Next PWA Starter" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="static/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-startup-image"
          href="static/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="react-redux-nextjs-bootstrap-pwa-starter"
        />
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>

      <noscript>
        <div className="alert  alert-warning">
          <h4>Warning!</h4>
          <h5>Javascript is disabled for this website.</h5>
          <p>Javascript is required to use this website.</p>
          <p>
            {`You won't be able to navigate in this website until you activate javascript.`}
          </p>
        </div>
      </noscript>

      <Header />
      {children}
      <div dangerouslySetInnerHTML={{ __html: flexibilityJsForIE }} />
      <Footer />
    </Fragment>
  );
}

Layout.displayName = 'Layout';

export default Layout;
