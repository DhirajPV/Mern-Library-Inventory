import React, { Component } from 'react';
import { Form, Input,  FormGroup, Label, Button } from 'reactstrap';
import axios from 'axios';
import '../App.css';

export class AddBook extends Component {
    state = {
        title: '',
        author: '',
        isbn: '',
        img: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            author: this.state.author,
            isbn: this.state.isbn,
            img: this.state.img
        };

        axios.post('http://localhost:8082/api/books', newItem)
             .then(res => {
                this.setState({
                    title: '',
                    isbn:'',
                    author:'',
                    description:''
                })
             }).catch(err => {
                console.log("Error in Adding Book");
             });
    }
    
    render() {
        return (
            <div style={{ textAlign: "center"}}>
                <Form style={{ display: "inline-block", width: "25%" }} onSubmit={this.onSubmit} >
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input type="text" name="author" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="isbn">ISBN</Label>
                        <Input type="text" name="isbn" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="img">Image Link</Label>
                        <Input type="text" name="img" onChange={this.onChange} />
                        </FormGroup>
                    <Button color="dark" style={{marginTop: '2rem', align: "centre", textAlign: "center"}} block>Add Book</Button>
                </Form>
            </div>
        )
    }
}

export default AddBook
