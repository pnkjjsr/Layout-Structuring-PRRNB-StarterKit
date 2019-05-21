// @flow

// #region imports
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import * as userAuthActions from '../../redux/modules/userAuth';

import './header.scss'
// #endregion

// #region flow types
type Props = {
  // userAuth:
  isAuthenticated: boolean,
  disconnectUser: (...any) => any,
  ...any,
};
// #endregion

function Header({ isAuthenticated, disconnectUser }: Props) {
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
      <div className="header">
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link href="/">
                <a className="nav-link">
                  <i className="fa fa-chevron-left"></i>
                </a>
              </Link>
            </Col>
            <Col>
              <div className="logo">
                <Link href="/">
                  <a>Logo</a>
                </Link>
              </div>
            </Col>
            <Col>

              <div className="nav justify-content-end">
                <div className="menu">
                  <i className="fa fa-ellipsis-h"></i>
                </div>
                <div className="links">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#" onClick={navigateTo('/page1')}>
                        Page1
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#" onClick={navigateTo('/private1')}>
                        Private1
                      </NavLink>
                    </NavItem>

                    {isAuthenticated ? (
                      <NavItem>
                        <NavLink href="#" onClick={handlesDisconnectUser}>
                          <i className="fa fa-sign-out" aria-hidden="true" />
                        </NavLink>
                      </NavItem>
                    ) : (
                        <NavItem>
                          <NavLink href="#" onClick={navigateTo('/login')}>
                            <i className="fa fa-sign-in" aria-hidden="true" />
                          </NavLink>
                        </NavItem>
                      )}
                  </Nav>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>

      <style jsx={true}>
        {`
          
        `}
      </style>
    </Fragment>
  );
}

Header.defaultProps = {
  isAuthenticated: false,
  disconnectUser: () => { },
};

Header.displayName = 'Header';

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
)(Header);
