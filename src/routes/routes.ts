import Books from "../pages/books";
import CreateBook from "../pages/books/create";

export const routes = [
  {
    path: "/books",
    component: Books,
  },
  {
    path: "/books/create",
    component: CreateBook,
  },
  {
    path: "/books/create/:id",
    component: CreateBook,
  },
];
