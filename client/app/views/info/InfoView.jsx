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
		var _this = this;

		if(this.props.editing){
			return(
				<div className="panel-body">
					<div className="col-md-6">
						<EditInfoCellView model={_this.props.model} keyName={"title"} />
						<EditInfoCellView model={_this.props.model} keyName={"artist"} />
						<EditInfoCellView model={_this.props.model} keyName={"genre"} />
						<EditInfoCellView model={_this.props.model} keyName={"length"} />
					</div>
					<div className="col-md-6">
						<EditInfoCellView model={_this.props.model} keyName={"youtube"} />
						<EditInfoCellView model={_this.props.model} keyName={"soundcloud"} />
						<EditInfoCellView model={_this.props.model} keyName={"spotify"} />
					</div>
				</div>
				)
		} else {
			return (		
				<div className="panel-body">
					<InfoCellView model={_this.props.model} key={"title"} keyName={"title"} />
					<InfoCellView model={_this.props.model} key={"artist"} keyName={"artist"} />
					<InfoCellView model={_this.props.model} key={"genre"} keyName={"genre"} />
					<InfoCellView model={_this.props.model} key={"length"} keyName={"length"} />
					<InfoSocialView model={_this.props.model} />
				</div>
				);
		}
	}
});

module.exports = InfoView;