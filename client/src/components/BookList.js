import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button, CardDeck, Container } from 'reactstrap'
import { text } from 'body-parser';

export class BookList extends Component {
constructor(props) {
    super(props);
    this.state = {
        books: []
    };
}

componentDidMount() {
    axios.get('http://localhost:8082/api/books')
        .then(res => {
            this.setState({
                books: res.data
            })
        }).catch(err => {
            console.log('Failed to retrieve list of books');
        })
}

render() {
    const books = this.state.books;
    let list;

    if (!books) {
        list = (<h6>There are no books currently in the database</h6>)
    } else {
        list = books.map((book, k) =>
            <Card className="card">
            <CardImg top style ={{ height: 350 }} src={ book.img } alt="image not found"/>
            <CardTitle> &nbsp; { book.title }</CardTitle>
            <CardSubtitle> &nbsp; { book.author }</CardSubtitle>
            <CardBody> &nbsp; { book.updated_date } </CardBody>
            <Button onClick={this.handleClick}>View More</Button>
            </Card> 
        );
    }

        return (
            <div>
                <h2> List of Books Available </h2>
                <Link to="/addBook" className="btn btn-outline-dark">
                + Add New Book
                </Link>
                <br></br>
                <Container className="list">
                    { list }
                </Container>
            </div>
        )
    }
}

export default BookList