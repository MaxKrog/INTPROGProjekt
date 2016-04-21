var React = require("react");


//STORE:
var TracklistStore = require("../../stores/TracklistStore.js");
//VIEWS:
var ListView = require("../list/ListView.jsx");

var TracklistCollection = require("../../collections/TracklistCollection.js");
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
                <div className="panel-heading">
                    <h4> Latest Tracklists </h4>
                </div>
                {this.state.collection ? 
                	<ListView collection={this.state.collection} title="Latest Tracklists" editing={false} type="unordered"/>
                	: <div> loading </div>}
            </div>
		)
	}
});