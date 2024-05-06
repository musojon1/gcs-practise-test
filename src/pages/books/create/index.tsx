import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import { StyledTextField } from "../../../styles";
import {
  useDeleteBookMutation,
  useCreateBookMutation,
  useEditBookMutation,
} from "../../../services/bookshelf";

export interface IBook {
  id?: number;
  isbn?: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
}

function CreateBook() {
  const { id } = useParams();
  const location = useLocation();
  const bookData = location.state;
  const [createBook] = useCreateBookMutation();
  const [editBook] = useEditBookMutation();
  const [deleteBook] = useDeleteBookMutation();
  const [formData, setFormData] = useState<IBook>({
    title: "",
    cover: "",
    author: "",
    published: 0,
    pages: 0,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = (await id) ? editBook(formData) : createBook(formData);
  };
  useEffect(() => {
    setFormData(bookData);
  }, [bookData]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} width="70%" padding="20px">
        <Grid item xs={6}>
          <StyledTextField
            value={formData.title}
            onChange={handleInputChange}
            required
            name="title"
            label="Title"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            value={formData.cover}
            onChange={handleInputChange}
            required
            name="cover"
            label="Cover"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            value={formData.author}
            onChange={handleInputChange}
            required
            name="author"
            label="Author"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            value={formData.published}
            onChange={handleInputChange}
            required
            type="number"
            name="published"
            label="Published"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            value={formData.pages}
            onChange={handleInputChange}
            required
            type="number"
            name="pages"
            label="Pages"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} />
        <Grid item xs="auto">
          <Button variant="contained" type="submit" color="primary">
            {id ? "Update" : "Create"}
          </Button>
        </Grid>
        {id ? (
          <Grid item xs="auto">
            <Button
              onClick={() => deleteBook(id)}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
}

export default CreateBook;
