import React, { Component } from 'react';

class Searcher extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ""
        }
    }
    handleInputChange(e){
       const {value} = e.target
       this.setState({
           inputValue: value
       })

    }
    handleOnKeyPress(e){
        if (e.which === 13) {
            const {inputValue} = this.state
            this.props.searchByName(inputValue)
        }
    }

    render(){
        const {inputValue} = this.state
        return (
            <div className="searcher">
                <input onKeyPress={e => this.handleOnKeyPress(e)} onChange={e => this.handleInputChange(e)} value={this.state.inputValue} type="text" placeholder="Never stop looking"/>
                <button onClick={() => this.props.searchByName(inputValue)}> <i className="fas fa-search"></i> </button>
            </div>
        )}
}

export default Searcher