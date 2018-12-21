import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SearchForm extends Component {
    state = {
        topic: '',
        beginDate: '',
        endDate:''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const searchParams = {
            topic: this.state.topic,
            beginDate: this.state.beginDate.replace(/-/g, ""),
            endDate: this.state.endDate.replace(/-/g, "")
        }

        this.props.search(searchParams);

        e.currentTarget.reset();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label  for="search">Search Term</Label>
                    <Input required type="text" name="topic" placeholder="enter search term" onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="beginDate">Begin Date</Label>
                    <Input required type="date" name="beginDate" placeholder="date placeholder" onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="endDate">End Date</Label>
                    <Input required type="date" name="endDate" placeholder="date placeholder" onChange={this.onChange}/>
                </FormGroup>
                <Button color="dark" block style={{marginTop: '2rem'}} >Search</Button>
            </Form>
        );
    }

}

export default SearchForm;