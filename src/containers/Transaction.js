import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {withdrawFunds} from '../actions/index';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Transaction extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal}>

            <ModalHeader>Make a withdrawal:</ModalHeader>

            <ModalBody>
              <p>Your balance is: <strong>${this.props.account.balance}</strong>. Please choose from the following to withdraw:</p>
            </ModalBody>

            <ModalFooter>
              <button className="btn btn-primary">$5</button>
              <button className="btn btn-success">$10</button>
              <button className="btn btn-warning">$20</button>
              <button onClick={this.props.toggle}className="btn btn-danger">Cancel</button>

            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('Transaction', state.selectedAccount)
  return {
    account: state.selectedAccount,
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
