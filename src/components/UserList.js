import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { GET_ALL_USERS } from '../GraphQL/Query';

class UserList extends Component {
  displayUsers(){
    let data= this.props.data;
    if(data.loading){
      return( <h1>LOADING!!!!</h1>)
    }else{
        
      return (

        (data.getAllUsers.map((user)=>{
        
        return(

            <table>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                </tr>
            </table>
       
        )
      }))
      
      )
    }
  }
  render() {
    return (
      <div>
          <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    
                </tr>
            </table>    
        
          {this.displayUsers()}
        
      </div>
    )
  }
}

export default graphql(GET_ALL_USERS) (UserList);
