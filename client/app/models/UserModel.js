var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");

var UserModel = Backbone.Model.extend({

	idAttribute: "_id",

	url: "api/user",

	initialize: function(){
		console.log("Inited a UserModel!");
		this.fetchStatus();
	},

	isAuthorized: function(){
		if(this.has("_id")){
			return true;
		} else {
			return false
		}
	},

	fetchStatus: function() {
		var _this = this;

		Backbone.sync("GET", this, {
			success: function(data){
				_this.set(data);

			}
		} )
	},

	logout: function() {
		Backbone.sync("delete", this)
		this.clear();
	}
})

module.exports = new UserModel();