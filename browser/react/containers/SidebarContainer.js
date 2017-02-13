import {connect} from 'react-redux';

import Sidebar from '../components/Sidebar';

function mapStateToProps (state) {
  return {
    playlists: state.playlists.list
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;
