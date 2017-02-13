import {connect} from 'react-redux';

import {Station} from '../components/Station';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);