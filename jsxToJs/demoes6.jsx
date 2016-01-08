var Input = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    buttonClick: (event)=> {
        event.target.getAttribute('data-val')
    },
    handleChange: (event)=> {
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <input type="button" value="click" data-val={value} onClick={this.buttonClick} />
                <p>{value}</p>
            </div>
        );
    }
});

ReactDOM.render(<Input/>, document.body);