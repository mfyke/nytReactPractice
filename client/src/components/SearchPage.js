import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { Container } from 'reactstrap';
import axios from 'axios';

const key = "daa03b61d31342fe81e712de72412b28";

class SearchPage extends Component {
    state = {
        results: []
    };

    handleSearch = (searchData) => {
        let apiParams = {
            'api-key': key,
            'q': searchData.topic,
            'begin_date': searchData.beginDate,
            'end_date': searchData.endDate,
            'sort': "newest",
            'fl': "web_url,headline,pub_date",
            'page': 0
        }
        axios
            .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params: apiParams})
            .then(response=>{
                console.log(response.data.response.docs);
                this.setState({
                    results: response.data.response.docs
                });
            })
            .catch(err=>console.log(err));

        
    }

    render() {
        return (
            <Container>
                <SearchForm search={this.handleSearch} />
                <SearchResults />
            </Container>


        );
    }

}

export default SearchPage;