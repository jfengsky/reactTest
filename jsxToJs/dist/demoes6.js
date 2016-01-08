var Input = React.createClass({ displayName: "Input",
    getInitialState: function () {
        return { value: 'Hello!' };
    },
    buttonClick: event => {
        event.target.getAttribute('data-val');
    },
    handleChange: event => {
        this.setState({ value: event.target.value });
    },
    render: function () {
        var value = this.state.value;
        return React.createElement("div", null, React.createElement("input", { type: "text", value: value, onChange: this.handleChange }), React.createElement("input", { type: "button", value: "click", "data-val": value, onClick: this.buttonClick }), React.createElement("p", null, value));
    }
});

ReactDOM.render(React.createElement(Input, null), document.body);