import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withdrawFunds} from '../actions/index';

class Transaction extends Component {
  render() {
    return (
      <div>
        <h3>Make a withdrawal:</h3>
        <p>Your balance is: {this.props.balance}. Please choose from the following to withdraw:</p>
        <button className="btn btn-primary">$5</button>
        <button className="btn btn-success">$10</button>
        <button className="btn btn-warning">$20</button>
        <button className="btn btn-danger">Cancel</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}

export default connect(null,  mapDispatchToProps)(Transaction);
