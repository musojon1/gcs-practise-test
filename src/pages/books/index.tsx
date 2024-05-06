import { Button, Grid, Typography } from "@mui/material";
import { useBooksQuery } from "../../services/bookshelf";
import { BookItem, BooksContainer } from "./style";
import { useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 2,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 3,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 4,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 5,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 6,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 7,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 1,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 2,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 3,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 4,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 5,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 6,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 7,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 1,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 2,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 3,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 4,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 5,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 6,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
  {
    id: 7,
    isbn: "9781118464465",
    title: "Raspberry Pi User Guide",
    cover:
      "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    author: "Eben Upton",
    published: 2012,
    pages: 221,
  },
];

function Books() {
  const { data } = useBooksQuery("");
  const navigate = useNavigate();

  return (
    <BooksContainer boxSizing="border-box">
      <Button
        onClick={() => navigate(`create`)}
        variant="contained"
        style={{ margin: "10px 0" }}
      >
        +Create
      </Button>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid
            onClick={() => navigate(`create/${book.id}`, { state: book })}
            key={book.id}
            item
            xs={3}
          >
            <BookItem boxSizing="border-box" textAlign="center">
              <img src={book.cover} alt={book.title} />
              <Typography>Title: {book.title}</Typography>
              <Typography>Author: {book.author}</Typography>
            </BookItem>
          </Grid>
        ))}
      </Grid>
    </BooksContainer>
  );
}

export default Books;
