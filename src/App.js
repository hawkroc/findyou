
import React, { Component } from 'react';
import Search from './SearchControlled';
import RepoList from './RepoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

 state = {
    searchText: '',
    promise:{},
  };
 constructor(props, context) {
    super(props, context);

 this.changeItem = this.changeItem.bind(this);
  };


 changeItem = (item)=> {

		this.setState({
			promise: item
		});	
	};

 render() {
   return (
   <MuiThemeProvider>
   	<div>
     <Search changeItem={this.changeItem}/>
      <RepoList promise={this.state.promise}/>
      </div>
         </MuiThemeProvider>
    );
  }
}