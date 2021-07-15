import React, { Component } from "react";

export default class Data extends Component{
    state = {
        users: {""},//
        order: "descend",
        filteredUsers: {}//empty
    }

    componentDidMount() {
        API.getUsers().then(results => {
          this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }

      render(){
          return (
              <div></div>
          )
      }
}