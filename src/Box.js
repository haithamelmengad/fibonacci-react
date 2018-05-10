import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            n_fibonacci : 1,
            nth : 0
        }
        

    }

    computefibonacci(nth){
        var j = parseFloat(nth)
        var i = parseInt(nth)
        if( i-j === 0 && i >=0){
            if(i === 0){
                return 0;
            } 

            if(i === 1){
                return 1;
            } 
            return this.computefibonacci(i-1) + this.computefibonacci(i-2);
        }
        return "That's not a positive integer Gerry"

    }

    handleChangeNth(event) {
        this.setState({nth: event.target.value});
    }

    handleOnClick() {
        var nth_fibo = this.computefibonacci(this.state.nth);
        this.setState({n_fibonacci : nth_fibo}, console.log(this.state.n_fibonacci));
        return true
    }


    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChangeNth.bind(this)}></input>
                    <input type="button" value="Compute" onClick={this.handleOnClick.bind(this)}></input>
                </form>
                {this.state.n_fibonacci}
            </div>
        );
    }
}

export default Box;
