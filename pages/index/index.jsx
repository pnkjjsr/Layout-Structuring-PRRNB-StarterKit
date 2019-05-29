// @flow

// #region imports
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import * as fakeFetchActions from '../../redux/modules/fakeModuleWithFetch';
import * as userAuthActions from '../../redux/modules/userAuth';

import Link from 'next/link';
import Router from 'next/router';

import { Container } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';

import './style.scss';

// #endregion

// #region flow types
type Props = {
  // fakeModuleWithFetch:
  isFetching: boolean,
  fakeData: any,
  fakeFetchIfNeeded: () => Promise<any>,
  // userAuth:
  isAuthenticated: boolean,
  disconnectUser: () => any,
  ...any,
};

type State = any;

type InitialProps = {
  req: any,
  res: any,
  pathname: string,
  query: any,
  asPath: string,
  isServer: boolean,
  store?: any,
  ...any,
};
// #endregion

class Index extends PureComponent<Props, State> {
  // #region props initialization
  static async getInitialProps({ isServer, store }: InitialProps) {
    const SIDE = isServer ? 'SERVER SIDE' : 'FRONT SIDE';

    try {
      const response = await store.dispatch(
        fakeFetchActions.fakeFetchIfNeeded(),
      );
      const {
        payload: { data },
      } = response;
      // NOTE: you will see this log in your server console (where you `npm run dev`):
      /* eslint-disable no-console */
      console.log(`getInitialProps - ${SIDE} - fake fetch result: `, data);
    } catch (error) {
      console.error(`getInitialProps - ${SIDE} - fake fetch failed: `, error);
      /* eslint-enable no-console */
    }
  }
  // #endregion

  // #region component lifecycle methods
  render() {
    return (
      <Fragment>

        <Container className="mt-5">
          <h1>
            PRRNB
          </h1>

          <p>
            P : Progressive Web App | PWA
            <br />
            R : React
            <br />
            R : Redux
            <br />
            N : NextJs
            <br />
            B : ReactStrap | Bootstrap | Scss
          </p>

          <hr />

          <Nav>
            <NavItem>
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/page1">
                <a className="nav-link">Page 1</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/private1">
                <a className="nav-link">Private 2</a>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Fragment>
    );
  }
  // #endregion

  // # region go login click
  goLogin = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
      Router.push('/login');
    }
  };
  // #endregion
}

// #region redux state and dispatch map to props
const mapStateToProps = (state: any) => ({
  // fakeModuleWithFetch:
  isFetching: state.fakeModuleWithFetch.isFetching,
  fakeData: state.fakeModuleWithFetch.data,
  // userAuth:
  isAuthenticated: state.userAuth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: (...any) => any) => {
  return {
    ...bindActionCreators(
      {
        // fakeModuleWithFetch:
        ...fakeFetchActions,
        // userAuth:
        ...userAuthActions,
      },
      dispatch,
    ),
  };
};
// #endregion

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Index);
