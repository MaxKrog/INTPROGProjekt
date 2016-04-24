var React = require("react");

//STORE:
var TracklistStore = require("../../stores/TracklistStore.js");
//VIEWS:
var SimpleListView = require("../list/SimpleListView.jsx");
var LoadingView = require("../misc/LoadingView.jsx");

module.exports = React.createClass({

	getInitialState: function(){
		return {
			collection: false,
			filterString: ""
		}
	},

	componentWillMount: function(){
		var _this = this;
		TracklistStore.getAll( function(err, data){
			_this.setState({ collection: data });
		})
	},

	handleFilterChange: function(e){
		this.setState({
			filterString: e.target.value
		});


	},

	render: function(){ 

		var regExp = new RegExp(this.state.filterString, "i");

		return(
            <div className="panel panel-default">
            	<div style={{borderBottom: "1px solid"}}>
                	<h4> Latest Tracklists </h4>
					<h5><input 
						onChange={this.handleFilterChange} 
						value={this.state.filterString} 
						type="text" 
						className="form-control" 
						placeholder="Search for title" /></h5>
                </div>
                <br/>
                {this.state.collection ? 
                	<SimpleListView collection={this.state.collection} type="unordered" 
                		filterString={this.state.filterString}/>
                	: <LoadingView/>}
            </div>
		)
	}
});