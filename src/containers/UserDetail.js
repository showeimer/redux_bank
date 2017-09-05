import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';



class UserDetail extends Component {

  render() {
    if(!this.props.user) {
      return (
        <div>Please select a user...</div>
      )
    }
    //get user id from params of URL
    const { id } = this.props.match.params;
    //map over the accounts for the user to create links to them.
    let accounts = this.props.user.accounts.map(account => {

      //creating a Link with the account type for
      //each account.
      return (
        // <div key={account.id}>
          <Link
            key={account.id}
            onClick={() => this.props.selectAccount(account)}
            className="btn btn-success accountButton"
            to={`/users/${id}/${account.id}`}>{account.accountType}</Link>
        // </div>

      )
    })
    return (
      <div className="jumbotron">
          <div className= "card-block">
            <h3 className= "text-muted">{this.props.user.name}</h3>
            <h4 className= "">Account Information:</h4>
            <hr className="my-4" />
            <div className= "card-text">
              <div className="lead">{this.props.user.email}</div>
              <div className="lead">{this.props.user.phone}</div>
              <div className="lead">{this.props.user.address}</div>

            </div>
            {accounts}
          </div>
          <Link className="btn btn-primary" to="/users" >Back to List of Users</Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users[state.users.findIndex(user => user._id === state.selectedUser)],
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectAccount: selectAccount
    }, dispatch)
}



export default connect(mapStateToProps,  mapDispatchToProps)(UserDetail);
