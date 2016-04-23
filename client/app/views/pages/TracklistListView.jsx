var React = require("react");

//STORE:
var TracklistStore = require("../../stores/TracklistStore.js");
//VIEWS:
var SimpleListView = require("../list/SimpleListView.jsx");
var LoadingView = require("../misc/LoadingView.jsx");

module.exports = React.createClass({

	getInitialState: function(){
		return {
			collection: false
		}
	},

	componentWillMount: function(){
		var _this = this;
		TracklistStore.getAll( function(err, data){
			_this.setState({ collection: data });
		})
	},

	render: function(){ 

		return(
            <div className="panel panel-default">
            	<div style={{borderBottom: "1px solid"}}>
                	<h4> Latest Tracklists </h4>
                </div>
                <br/>
                {this.state.collection ? 
                	<SimpleListView collection={this.state.collection} type="unordered"/>
                	: <LoadingView/>}
            </div>
		)
	}
});