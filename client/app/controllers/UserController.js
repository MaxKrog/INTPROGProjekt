var React = require("react");
var ReactDOM = require("react-dom");

//MODEL

//COLLECTION

//VIEWS
var LoginForm = require("../views/components/LoginForm.jsx");

var LoginClass = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },

  handleUserInput: function(username, password) {
    this.setState({
      username: username,
      password: password
    });
  },

    submit: function(username, password) {
        console.log("clicked submit");
    },

  render: function() {
    return (
      <div>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          onUserInput={this.handleUserInput}
          submit={this.submit}
        />
      </div>
    );
  }
});


module.exports = function(options) {
    
    // Where to render
    var app = options.app;
    var element = options.element;

    return {
        login: function() {

                ReactDOM.render(
                    <LoginClass />, element);
            }

        
    };
};