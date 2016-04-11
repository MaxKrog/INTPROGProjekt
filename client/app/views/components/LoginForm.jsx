var React = require('react');

var LoginForm = React.createClass({

    // CALLBACKS
    handleChange: function() {
        this.props.onUserInput(
            this.refs.usernameInput.value,
            this.refs.passwordInput.value
        );
    },

    handleSubmit: function() {
        this.props.submit(
            this.refs.usernameInput.value,
            this.refs.passwordInput.value
            )
    },

    render: function() {
        return (
            <div>
                <h4>Please login:</h4>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.props.username}
                        ref="usernameInput"
                        onChange={this.handleChange}
                    /><br/>
                    <input
                        type="password"
                        value={this.props.password}
                        placeholder="Password"
                        ref="passwordInput"
                        onChange={this.handleChange}
                    /><br/>
                    <input type="button" value="Submit" onClick={this.handleSubmit}></input>
                </form>
            </div>
        );
    }
});

module.exports = LoginForm;