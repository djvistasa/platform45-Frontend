/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getTest } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchTest: PropTypes.func,
  homePageState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePageState: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTest: () => new Promise(
      (resolve, reject) => dispatch(getTest({ resolve, reject }))
    ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Home);
