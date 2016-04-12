var React = require("react");
var Backbone = require("backbone");

module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	componentWillMount: function(){

	},

	available: function(value) {
		if(value === "") {
			return false;
		} else {
			return true;
		}
	},

	render: function() {

		var spt = this.props.model.get("spotify");
		var yt = this.props.model.get("youtube");
		var sc = this.props.model.get("soundcloud");

		// TODO: grey out icons if no url
		var style = {
			width: "50px",
			height: "50px",
			marginRight: "10px"
		}
		return (
			<div className="center-block">
				<a href={spt} target="_new" >
					<img src="./img/icons/spt.png" style={style} className={"img-thumbnail " + (this.available(spt) ? "" : 'notavailable')}/>
				</a>
				<a href={yt} target="_new">
					<img src="./img/icons/yt.png" style={style} className={"img-thumbnail " + (this.available(yt) ? "" : 'notavailable')}/>
				</a>
				<a href={sc} target="_new">
					<img src="./img/icons/sc.png" style={style} className={"img-thumbnail " + (this.available(sc) ? "" : 'notavailable')}/>
				</a>
			</div>

		)
	}

});