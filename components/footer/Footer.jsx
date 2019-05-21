// @flow

// #region imports
import React, { useState, Fragment } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAuthActions from '../../redux/modules/userAuth';
// #endregion

// #region flow types
type Props = {
  // userAuth:
  isAuthenticated: boolean,
  disconnectUser: (...any) => any,
  ...any,
};
// #endregion

function Footer({ isAuthenticated, disconnectUser }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigateTo = (to: string = '/') => () => Router.push(to);
  const handlesDisconnectUser = (event?: SyntheticEvent<>) => {
    event && event.preventDefault();
    disconnectUser();
    Router.replace('/login');
  };

  return (
    <Fragment>
      <div className="p-3">
        Copyright (c) 2019 Erwan DATIN
      </div>
      <style jsx>
        {`
        div {
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #000;
          color: #607D8B;
          text-align: center;
        }
      `}
      </style>
    </Fragment>
  );
}



Footer.defaultProps = {
  isAuthenticated: false,
  disconnectUser: () => { },
};

Footer.displayName = 'Footer';

// #region redux state and dispatch map to props
const mapStateToProps = (state: any) => ({
  // userAuth:
  isAuthenticated: state.userAuth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: (...any) => any) => {
  return {
    ...bindActionCreators(
      {
        ...userAuthActions,
      },
      dispatch,
    ),
  };
};
// #endregion

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
