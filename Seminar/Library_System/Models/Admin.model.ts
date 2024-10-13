// 3. Admin

import { IAdmin } from "../Interfaces/IAdmin.interface";
import { User } from "./User.model";
import { Book } from "./Book.model";

// Add book
// Get Books

// Add User
// Get Users

// Borrow Book
// Return Book

export class Admin implements IAdmin {
  private users: User[];
  private books: Book[];

  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(new_book: Book): void {
    const index = this.books.findIndex((book) => book.id === new_book.id);

    if (index === -1) {
      this.books.push(new_book);
    } else {
      this.books[index].quantity += new_book.quantity;
    }
  }

  get showBooks(): Book[] | string {
    return this.books.length ? this.books : 'Empty list';
  }

  addUser(new_user: User): void {
    const index = this.users.findIndex((user) => user.id === new_user.id);

    if (index === -1) {
      this.users.push(new_user);
      console.log(`New user - ${new_user.name} added`);
    } else {
      throw new Error('User already exists');
    }
  }

  get showUsers(): User[] | string {
    return this.users.length ? this.users : 'Empty list';
  }

  private userAndBookCheck(
    userId: number,
    bookId: number
  ): boolean | [number, number] {
    const user_index = this.users.findIndex((user) => user.id === userId);

    if (user_index === -1) {
      console.log('No user');
      return false;
    }

    const book_index = this.books.findIndex((book) => book.id === bookId);

    if (book_index === -1) {
      console.log('No book');
      return false;
    }

    return [user_index, book_index];
  }

  borrowBook(userId: number, bookId: number): void {
    const response = this.userAndBookCheck(userId, bookId);

    if (!response) {
      return;
    }

    if (Array.isArray(response)) {
      const [user_index, book_index] = response;

      if (this.books[book_index].quantity > 0) {
        this.books[book_index].quantity--;
        this.users[user_index].borrowBook(this.books[book_index].id);
      } else {
        console.log('Book is not available for borrowing');
      }
    }
  }

  returnBook(userId: number, bookId: number): void {
    const response = this.userAndBookCheck(userId, bookId);

    if (!response) {
      return;
    }

    if (Array.isArray(response)) {
      const [user_index, book_index] = response;

      this.books[book_index].quantity++;
      this.users[user_index].returnBook(this.books[book_index].id);
    }
  }
}
