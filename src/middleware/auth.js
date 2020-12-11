import React from 'react';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { validateToken } from '../services/api/account';

const cookies = new Cookies();

export default function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            let token = cookies.get('TOKEN');

            this.state = {
                token
            }
        }

        componentWillMount() {
            let { token } = this.state;
            this.props.validateToken(token);
        }

        render() {
            let { account, location: { pathname } } = this.props;

            if (_.isEmpty(account) || account.isValidating) {
                return (
                    <div>
                        Loading...
                    </div>
                )
            }

            if (!account.isValidated) {
                if (pathname == '/') {
                    return (
                        <Redirect push to='/about' />
                    );
                } else {
                    return (
                        <Redirect push to='/login' />
                    );
                }
            } else {
                return (
                    <React.Fragment>
                        <Component {...this.props} />
                    </React.Fragment>
                );
            }
        }
    }

    const mapStateToProps = (state) => {
        return {
            account: state.account
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            validateToken: (token) => {
                dispatch(validateToken(token))
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
