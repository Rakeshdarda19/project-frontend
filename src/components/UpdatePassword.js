import React, { Component } from "react";
import { graphql } from'@apollo/client/react/hoc';
import { flowRight as compose} from 'lodash';
import { UPDATE_PASSWORD } from "../GraphQL/Mutations";

class UpdatePassword extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        oldPassword: '',
        newPassword: ''
    };
}
  submitForm(e){
    e.preventDefault()
    this.props.UPDATE_PASSWORD({
        variables: {
            username: this.state.username,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
        },
    });
}
  render() {
    return (
      <form  onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>User Name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Old Password</label>
          <input
            type="text"
            onChange={(e) => this.setState({ oldPassword: e.target.value })}
          />
        </div>
        <div className="field">
          <label>New Password</label>
          <input
          type="text"
           onChange={(e) => this.setState({ newPassword: e.target.value })}
           />
            
          
        </div>
        <button>Add User</button>
      </form>
    );
  }
}

export default compose(
  graphql(UPDATE_PASSWORD, { name: 'UPDATE_PASSWORD' })
) (UpdatePassword);







