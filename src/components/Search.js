import React from 'react';
import axios from 'axios';



class Search extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
            results: {},
            loading: false,
            message: '',
		};
        this.cancel = '';
	}
    
    fetchSearchResults = ( updatedPageNumber, query ) => {
        const pageNumber = updatedPageNumber ? `&page=${updatedPageNumber}` : '';
        const searchUrl = `http:localhost:8000/api/${query}${pageNumber}`;

        if( this.cancel ){
            this.cancel.cancel();
        }
        this.cancel= axios.CancelToken.source();
        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        })
        .then (res => {
            // const resultNotFoundMessage = 
            console.warn(res)
        })
        .catch (err => {
            if (axios.isCancel(err) || err) {
                this.setState( {
                    loading: false,
                    message: 'Failed to fetch data. check network'
                })
            }
        })
    }

    handleOnInputChange = (e) => {
        const query = e.target.value;
        this.setState({query: query, loading: true, message: '' }, () => {
            this.fetchSearchResults( 1, query )
        });
        
    }

	render() {
        const {query} = this.state;
        console.log(this.state)
		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Search: All Projects</h2>
				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
                        name="query"
						value={this.state.query}
						id="search-input"
						placeholder="Search..."
                        onChange={this.handleOnInputChange}
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			)
	}
}
export default Search;