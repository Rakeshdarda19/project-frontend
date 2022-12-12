import React, { Component } from "react";
import { graphql } from'@apollo/client/react/hoc';
import { flowRight as compose} from 'lodash';
import { CREATE_USER } from "../GraphQL/Mutations";
class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        username: '',
        password: ''
    };
}
  submitForm(e){
    e.preventDefault()
    this.props.CREATE_USER({
        variables: {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        },
    });
}
  render() {
    return (
      <form  onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>UserName</label>
          <input
            type="text"
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="field">
          <label>password</label>
          <input
          type="text"
           onChange={(e) => this.setState({ password: e.target.value })}
           />
          
        </div>
        <button>Add User</button>
      </form>
    );
  }
}

export default compose(
  graphql(CREATE_USER, { name: 'CREATE_USER' })
) (AddUser);







