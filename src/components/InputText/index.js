import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './input-text.scss';

const InputText = () => <div />;

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(InputText);
