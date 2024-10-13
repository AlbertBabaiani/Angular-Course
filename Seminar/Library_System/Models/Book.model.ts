// 1. Book

// id
// name
// author
// publication year
// quantity

export class Book {
    quantity: number;
  
    constructor(
      public id: number,
      public name: string,
      public author: string,
      public publicationyear: number,
      quantity: number
    ) {
      this.quantity = Math.max(0, quantity);
    }
  }
  