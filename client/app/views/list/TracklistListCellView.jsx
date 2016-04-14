var React = require("react");
//VIEWS:
var InfoSocialView = require("../info/InfoSocialView.jsx");

var TracklistListCellView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		delete: React.PropTypes.func
	},

	render: function(){

		var style = {
			display: "relative",
			margin: "0px 0px"
		}
		if(this.props.editing){
			return(
				<div className="list-group-item" >
					<div className="row">
						<div className="col-md-1 col-xs-1">
							<h4> X</h4>
						</div>
						<div className="col-md-7 col-xs-7">
							<h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
						</div>
						<div className="col-md-4 col-xs-4">
							<img onClick={this.delete} className="pull-right" src="./img/icons/delete_x.png" width="32" height="32"/>
						</div>
					</div>
				</div>
			)
		} else {
			return(
				<button onClick={this.navigate} className="list-group-item">
					<div className="row">
						<div className="col-md-1 col-xs-1">
							<h4> #{this.props.model.indexInCollection()} </h4>
						</div>
						<div className="col-md-7 col-xs-7">
							<h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
						</div>
						<div className="col-md-4 col-xs-4">
							<InfoSocialView model={this.props.model} marginRight={"2px"} />
						</div>
					</div>
				</button>
			);
		}
	},

	navigate: function(){
		window.location.hash = "#/" + this.props.model.get("type") + "/" + this.props.model.id;
	},

	delete: function() {
		this.props.delete(this.props.model);
	},

	onClick: function(){
		this.props.onDeleteClick(this.props.model);
	}
});

module.exports = TracklistListCellView;