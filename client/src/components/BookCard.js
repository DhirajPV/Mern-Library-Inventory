import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';

export class BookCard extends Component {
    handleDelete (id) {
        
    }

    render() {
        const book = this.props;
        return (
            <Card>
            <CardImg top width="25%" src={ book.img } alt="image not found"/>
            <CardTitle>{ book.title }</CardTitle>
            <CardSubtitle> { book.author }</CardSubtitle>
            <CardBody> { book.updated_date } </CardBody>
            <Link to={`/UpdateBook/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
            </Link>
            <Button onClick={this.handleDelete.bind(this, book._id)}>Delete</Button>
            </Card> 
        )
    }
}

export default BookCard
