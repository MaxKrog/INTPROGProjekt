var React = require("react");
var Backbone = require("backbone");

module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	componentWillMount: function(){

	},

	available: function(value) {
		if(value === null) {
			console.log("false");
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
		return (
			<div>
				<h4><strong>Social links</strong></h4>
				<table>
					<tbody>
						<tr>
							<td><a href={spt}><img src="../../img/icons/spt.png" width="32" height="32" className={this.available(spt) ? null : 'notavailable'}/></a></td>
							<td><a href={yt}><img src="../../img/icons/yt.png" width="32" height="32" className={this.available(yt) ? null : 'notavailable'}/></a></td>
							<td><a href={sc}><img src="../../img/icons/sc.png" width="32" height="32" className={this.available(sc) ? null : 'notavailable'}/></a></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}

});
