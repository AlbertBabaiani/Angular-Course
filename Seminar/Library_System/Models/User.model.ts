// 2. User

// id
// name
// borrowed books

export class User {
    private borrowedBooks: number[];
  
    constructor(private _id: number, private _name: string) {
      this.borrowedBooks = [];
    }
  
    get id(): number {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    borrowBook(bookId: number) {
      this.borrowedBooks.push(bookId);
    }
  
    returnBook(new_bookId: number) {
      const index = this.borrowedBooks.findIndex(
        (bookId) => bookId === new_bookId
      );
  
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
      }
    }
  }
  