import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap';


class NoteModal extends Component {

    state = {
        newNote: ''
    }

    deleteNote = (id) => {
        console.log(id);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        
        const noteObj = {
            body: this.state.newNote,
            article: this.props.active
        }

        this.props.addNote(noteObj);

        e.currentTarget.reset();
     
    }
    
    render() {
        return (
        <div>
            <Modal isOpen={this.props.open} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>Notes</ModalHeader>
            <ModalBody>
                <ListGroup className="resultsBox">
                    {this.props.currentNotes.map((note,i)=>
                        <ListGroupItem className="text-center">
                            <h2>{note.body}</h2>
                            <Button
                                color="dark" 
                                onClick={()=>this.deleteNote(note._id)}
                            > 
                            Delete Note</Button>
                        </ListGroupItem>
                    )}

                </ListGroup>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="newNote">Note</Label>
                        <Input
                            type="text"
                            name="newNote"
                            id="note"
                            placeholder="Add new note"
                            onChange={this.onChange}
                        />
                        <Button
                            style ={{marginTop: '2rem'}}
                            color="dark"
                            block
                        >Add Note</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default NoteModal;