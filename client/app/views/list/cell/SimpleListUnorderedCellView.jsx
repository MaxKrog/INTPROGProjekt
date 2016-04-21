var React = require("react");
var Link = require("react-router").Link;

var UnorderedListCellView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	render: function(){
		var imgURL = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";
		var href = "/" + this.props.model.get("type") + "/" + this.props.model.id;
		return(
			<Link className="list-group-item" to={href} >
				<div className="media">
					<div className="media-left">
						<img className="media-object" src={imgURL} style={{maxWidth:"44px"}}/>
					</div>
					<div className="media-body">
						<h4 className="media-heading">{this.props.model.get("title")}</h4>
						{this.props.model.get("artist")}
					</div>
				</div>
			</Link>
		)
	}
});

module.exports = UnorderedListCellView;