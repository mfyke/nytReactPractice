import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

class SearchResult extends Component {
    render() {
        
        return (
            <Container>
                <ListGroup className="resultsBox">
                    {this.props.results.map((result,i)=>
                        <ListGroupItem className="text-center">
                            <h2>{result.headline.main}</h2>
                            <p>{result.pub_date}</p>
                            <a href={result.web_url}>Link to Article</a><br />
                            <Button
                                color="dark" 
                                onClick={()=>this.props.saveArticle(i)}
                            > 
                            Save Article</Button>
                        </ListGroupItem>
                    )}

                </ListGroup>
            </Container>
        );
    }

}

export default SearchResult;