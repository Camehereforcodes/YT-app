import React, {Component} from "react";

class SearchBar extends Component{

    state= {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit= (e, props) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
        this.setState({term: ''})
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="/"> Search video </label>
                        <input type="text" value ={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar