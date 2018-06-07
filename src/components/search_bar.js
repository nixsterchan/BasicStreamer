// Basically, the search bar

import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    // // Handles the change event of input
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

                            ////////// CONTROLLED COMPONENT /////////
                            
    // onChange will trigger when something is typed, and then set term to what is typed out.
    // value will on be updated when render function is called 
    render() {
        return(
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={ (event) => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

