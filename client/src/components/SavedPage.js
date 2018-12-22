import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';
import moment from 'moment';
import NoteModal from './NoteModal';

class SavedPage extends Component {
    state={
        articles: [],
        modal: false,
        activeID: "",
        notes: []
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

    toggleModal = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }

    setActive = (id) => {
        this.setState({
            activeID: id
        }, ()=>{
            axios
                .get(`/api/notes/article/${this.state.activeID}`)
                .then(data=>this.setState({
                    notes: data.data
                },()=>{
                    this.toggleModal()
                }));
            
        });
    }

    handleAddNote = (note) => {
        axios
            .post(`/api/notes/article/${note.article}`, note)
            .then(res=>this.setState({
                ...this.state,
                notes: [...this.state.notes, res.data ]
            }));
    }

    handleDeleteNote = (id) => {
        axios
            .delete(`/api/notes/${id}`)
            .then(data=>this.setState({
                ...this.state,
                notes: this.state.notes.filter(note=>note._id!==id)
            }));
    }

    render() {
        return (
            <Container>
                <NoteModal deleteNote={this.handleDeleteNote} addNote={this.handleAddNote} active={this.state.activeID} currentNotes={this.state.notes} open={this.state.modal} toggle={this.toggleModal} />
                <ListGroup className="resultsBox">
                    {this.state.articles.map((result,i)=>
                        <ListGroupItem className="text-center">
                            <h2 onClick={()=>this.setActive(result._id)}>{result.title}</h2>
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