import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {selectAccount} from '../actions/index';

class AccountDetail extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  }
}

export default connect(mapStateToProps,  null)(AccountDetail);
