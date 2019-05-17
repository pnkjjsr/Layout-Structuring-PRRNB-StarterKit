// @flow

// #region imports
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Container from 'reactstrap/lib/Container';
import * as fakeFetchActions from '../redux/modules/fakeModuleWithFetch';
import * as userAuthActions from '../redux/modules/userAuth';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Button from 'reactstrap/lib/Button';
import Router from 'next/router';
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
        <Container fluid>
          <Jumbotron>
            <h1>PWA: Next JS + Redux + Bootstrap STARTER</h1>
            <Button color="primary" onClick={this.goLogin}>
              login
            </Button>
          </Jumbotron>
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
