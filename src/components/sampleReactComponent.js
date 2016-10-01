import React from 'react'
//import for react-ampersand model observables

//import ReactMixin from 'ampersand-react-mixin'

//simple xhr request module

//import xhr from 'xhr'


export default React.createClass({
	//mixins: [ReactMixin],
	getInitialState : function() {
    return {
     	initialData: 'I am a React-ampersand starter kit'
    }
  },
	render() {
		return (
			<div>
			 <h1>{this.state.initialData}</h1>			
			</div>
			)
	}
})