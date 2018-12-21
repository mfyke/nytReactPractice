import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';
import moment from 'moment';

class SavedPage extends Component {
    state={
        articles: []
    }

    componentWillMount() {
        axios
            .get("/api/saved")
            .then(data=>this.setState({
                articles: data.data
            }));
    }

    deleteArticle = (id) =>{
        axios
            .delete(`/api/saved/${id}`)
            .then(data=>this.setState({
                ...this.state,
                articles: this.state.articles.filter(article=>article._id!==id)
            }));
    }

    render() {
        return (
            <Container>
                <ListGroup className="resultsBox">
                    {this.state.articles.map((result,i)=>
                        <ListGroupItem id={result._id} className="text-center">
                            <h2>{result.title}</h2>
                            <p>{new moment(result.date).format("MMMM Do YYYY")}</p>
                            <a href={result.url}>Link to Article</a><br />
                            <Button
                                color="dark" 
                                onClick={()=>this.deleteArticle(result._id)}
                            > 
                            Delete Article</Button>
                        </ListGroupItem>
                    )}

                </ListGroup>
            </Container>
        );
    }

}

export default SavedPage;