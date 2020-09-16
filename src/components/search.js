import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class Search extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    state = {
        searchQuery: ""
    }
    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value })
    }
    componentDidMount() {
        console.log('asdfgh', this.props)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.history.push('/search/'+this.state.searchQuery);
    }
    render() {
        return (
            <div style={{ margin: "15px" }}>
                <form className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2" onSubmit={this.handleSubmit}>
                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" value={this.state.searchQuery} name="searchQuary" onChange={this.handleChange} />
                    <input type="submit" value="search" className="btn btn-outline-secondary" />
                </form>
                {/* <div>
                    {this.props.search ? <Searchvideo searchitem={this.props.search.items} />
                        : <h1>loading....</h1>}

                </div> */}

            </div>
        )
    }
}

export default withRouter(Search);