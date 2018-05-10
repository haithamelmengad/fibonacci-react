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
        if(nth === 0){
            return 0;
        }
        if(nth === 1){
            return 1;
        }
        return this.computefibonacci(nth-1) + this.computefibonacci(nth-2)
    }

    handleChangeNth(event) {
        this.setState({nth: event.target.value})
    }

    handleOnClick() {
        var nth_fibo = this.computefibonacci(this.state.nth)
        this.setState({n_fibonacci : nth_fibo}, console.log(this.state.n_fibonacci))
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
