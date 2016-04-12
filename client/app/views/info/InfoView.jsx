var React = require("react");

//VIEWS:
var InfoCellView = require("./InfoCellView.jsx");
var EditInfoCellView = require("./EditInfoCellView.jsx");
var ButtonGroupView = require("../components/ButtonGroupView.jsx");
var InfoSocialView = require("./InfoSocialView.jsx");

var InfoView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		editing: React.PropTypes.bool.isRequired
	},

	getInitialState: function() {
		return {};
	},

	render: function(){ 

		if(this.props.editing){
			return(
				<div className="panel-body">
					<div className="col-md-6">
						<EditInfoCellView model={this.props.model} keyName={"title"} />
						<EditInfoCellView model={this.props.model} keyName={"artist"} />
						<EditInfoCellView model={this.props.model} keyName={"genre"} />
						<EditInfoCellView model={this.props.model} keyName={"length"} />
					</div>
					<div className="col-md-6">
						<EditInfoCellView model={this.props.model} keyName={"youtube"} />
						<EditInfoCellView model={this.props.model} keyName={"soundcloud"} />
						<EditInfoCellView model={this.props.model} keyName={"spotify"} />
					</div>
				</div>
				)
		} else {
			return (		
				<div className="panel-body">	
					<InfoCellView model={this.props.model} key={"title"} keyName={"title"} />
					<InfoCellView model={this.props.model} key={"artist"} keyName={"artist"} />
					<InfoCellView model={this.props.model} key={"genre"} keyName={"genre"} />
					<InfoCellView model={this.props.model} key={"length"} keyName={"length"} />
					<InfoSocialView model={this.props.model} />
				</div>
				);
		}
	}
});

module.exports = InfoView;