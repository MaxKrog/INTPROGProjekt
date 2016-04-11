var React = require('react');


var LoginForm = require('../components/LoginForm.jsx');


var LoginView = React.createClass({
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

module.exports = LoginView;
