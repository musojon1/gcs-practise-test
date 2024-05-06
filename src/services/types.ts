export interface IBookshelf {
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface IBook {
  id: number;
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
}
