import React, {Component} from 'react';
import Transaction from './Transaction';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {selectAccount} from '../actions/index';

import {Button, Modal} from 'reactstrap';

class AccountDetail extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h2>Account Information</h2>
        <h2>{this.props.account.accountType} for {this.props.user.name}</h2>
        <h2>Balance: {this.props.account.balance}</h2>

        <button onClick={this.toggle}>Withdraw Funds</button>
        <Link to={`/users/${this.props.user._id}`}>Back to User Details</Link>

        <Transaction modal={this.state.modal} toggle={this.toggle} />
      </div>
    )
  }
}

function mapStateToProps(state) {

  const userIdx = state.users.findIndex(user => user._id === state.selectedUser);

  return {
    account: state.selectedAccount,
    user: state.users[userIdx]
  };
}

export default connect(mapStateToProps,  null)(AccountDetail);
