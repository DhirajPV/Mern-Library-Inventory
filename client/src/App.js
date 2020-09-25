import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BookCard from './components/BookCard';


function App() {
  return (
    <div>
      <AppNavbar />
      <Router>
        <Route exact path='/' component={BookList} />
        <Route path='/bookCard/:id' component={BookCard}/>
        <Route path='/updateCard/:id' component={UpdateBook} />
        <Route path='/addBook' component={AddBook} />
      </Router>
    </div>
  );
}

export default App;
