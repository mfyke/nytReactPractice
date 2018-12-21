import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
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

    handleSave = (i) =>{
        let result=this.state.results[i];
        console.log(result);
        let saveObj = {
            title: result.headline.main,
            date: result.pub_date,
            url: result.web_url
        }
        console.log(saveObj);
        axios
            .post("/api/saved", saveObj)
            .then(res=>console.log(res));
    }

    render() {
        return (
            <Container>
                <SearchForm search={this.handleSearch} />
                <SearchResult results={this.state.results} saveArticle={this.handleSave} />
            </Container>


        );
    }

}

export default SearchPage;