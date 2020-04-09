import React from "react";
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { configureStore } from '@reduxjs/toolkit'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/rootReducer'

/**
* @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
* @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
* @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
* @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
* @param {boolean} options.debug User-defined debug flag
* @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
*/

const theme = {
  fontSize: {
    base: '16px'
  }
}

const makeStore = (initialState, options) => {
  return configureStore({
    reducer: rootReducer,
    ...{preloadedState: initialState}
  });
};

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(MyApp);