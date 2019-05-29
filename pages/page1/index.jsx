// @flow

// #region imports
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Button from 'reactstrap/lib/Button';
import Router from 'next/router';
import Container from 'reactstrap/lib/Container';
import * as userAuthActions from '../../redux/modules/userAuth';
// #endregion

// #region flow types
type Props = {
  // userAuth:
  isAuthenticated: boolean,
  disconnectUser: () => any,
  ...any,
};

type State = any;
// #endregion

class Page1 extends PureComponent<Props, State> {
  // #region component lifecycle methods
  render() {
    return (
      <Fragment>
        <Container>
          <h2>Page1 here</h2>
          <Button color="primary" onClick={this.goBackHome}>
            go back home
          </Button>
        </Container>
      </Fragment>
    );
  }
  // #endregion

  // html elements events
  goBackHome = (event: SyntheticEvent<>): void => {
    if (event) {
      event.preventDefault();
    }

    Router.push('/');
  };
  // #endregion
}

// #region redux state and dispatch map to props
const mapStateToProps = (state: any) => ({
  // userAuth:
  isAuthenticated: state.userAuth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: (...any) => any) => {
  return {
    ...bindActionCreators(
      {
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
)(Page1);
