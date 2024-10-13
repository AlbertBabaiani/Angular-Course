import { Book } from "../Models/Book.model";
import { User } from "../Models/User.model";


export interface IAdmin {
  addBook(new_book: Book): void;
  get showBooks(): Book[] | string;
  addUser(new_user: User): void;
  get showUsers(): User[] | string;

  borrowBook(userId: number, bookId: number): void;
  returnBook(userId: number, bookId: number): void;
}
