const express = require('express');
const app = express();

const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "To Kill A Mockingbird" },
  { id: 3, title: "1984" },
];

app.get('/books/long' , (req,res) => {
    res.send("List of long books");
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  
  if (!book) {
    return res.status(404).send("It's Not Here Homey");
  }

  res.send(`Book Title: ${book.title}`);
});

app.get('/fixed-example/:id', (req, res) => { 
    const bookId = parseInt(req.params.id); 
    const book = books.find((b) => b.id === bookId); 
    
    if (!book) { 
        return res.status(404).send("Book not found"); 
    } else {
        res.send(`Book Title: ${book.title}`); 
    }
});

app.get('/greet/:firstname/:lastname', (req, res) => {
    const firstName = req.params.firstname;
    const lastName = req.params.lastname;
    res.send(`Hello ${firstName} ${lastName}`);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});