import React, { Component,useEffect, useState } from "react";
import axios from'axios';
  import './App.css';


const api = axios.create({
  baseURL : `https://jsonplaceholder.typicode.com/users`
})



class UserList extends Component{
state ={
  listOfUSer : [],
  
}

constructor(){
super();
api.get('/').then(res =>{
   this.setState({listOfUSer: res.data})
 
}
)
 
 
}


renderTableHeader = () => {
  return Object.keys(this.state.listOfUSer[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
 
}
 
renderTableRows = () => {
  return this.state.listOfUSer.map(user => {
    return (
      <tr key={user.id}>
        <td class="table-danger"> {user.id}</td>
        <td class="table-warning">{user.name}</td>
        <td class="table-info">{user.username}</td>
        <td class="table-light">{user.email}</td>
        <td class="table-primary"> {`Street: ${user.address.street}, 
              Suit :  ${user.address.suite},
              City :  ${user.address.city},
              Zipcode :  ${user.address.city},
              Geo :  ${user.address.geo.lat}, ${user.address.geo.lng}`}</td>
        <td class="table-info">{user.phone}</td>
        <td class="table-dark">{user.website}</td>
        <td  class="table-secondary">{`Name: ${user.company.name}, 
              CatchPhrase :  ${user.company.catchPhrase},
              Bs :  ${user.company.bs},
          `}</td>
      </tr>
    )
  })
}
 
render(){
  
  const { listOfUSer, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return listOfUSer.length > 0
      ? (
        <table class="table">
        <thead >
            <tr  >
             {this.renderTableHeader()} 
            </tr>
          </thead>
       <tbody >
        {this.renderTableRows()}  
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }
}

export default UserList