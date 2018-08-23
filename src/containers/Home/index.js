/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ReactDOM from 'react-dom';
import { scrollTo } from '../../utils/scrollTo';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import Avatar from '../../components/Avatar';
import IntroCopy from '../../components/IntroCopy';
import TogglePanelButton from '../../components/TogglePanelButton';
import SlideOutPanel from '../../components/SlideOutPanel';
import { StyledWrapper } from './styledComponents/styledWrapper';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPanelOpen: false,
      mainPanelHeight: 0,
    }
    this.mainPanel = React.createRef();
    this.slideOutPanel = React.createRef();
  }

  componentDidMount() {
    const mainPanelHeight = this.mainPanel.current.offsetHeight;
    this.setState({ mainPanelHeight });
  }
  togglePanel() {
    const slideOutPanel = ReactDOM.findDOMNode(this.slideOutPanel.current);
    this.setState({ isPanelOpen: !this.state.isPanelOpen }, () => {
      scrollTo(
        slideOutPanel,
        1100,
        'easeInOutQuart',
        () => {
        },
        0
      );
    });
  }
  render() {
    const { isPanelOpen, mainPanelHeight } = this.state;
    return (
      <div >
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <div ref={this.mainPanel}>
          <StyledWrapper >
            <Avatar />
            <IntroCopy />
            <TogglePanelButton handleClick={() => this.togglePanel()} />
          </StyledWrapper>
        </div>
        <div ref={this.slideOutPanel}>
          <SlideOutPanel isPanelOpen={isPanelOpen} mainPanelHeight={mainPanelHeight} />
        </div>
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
  return {};
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
