// User
// balance

import { IBank } from "./Interfaces/IBank.interface";

// deposit
// withdraw
// ბალანსისა და მომხმარებლის ნახვა

class Bank implements IBank {
  constructor(private _user: string, private _balance: number = 0) {}

  // თანხის შეტანა
  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  // თანხის გამოტანა
  withdraw(amount: number): void {
    if (amount > 0 && this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.error('Insufficient funds or invalid amount.');
    }
  }

  // Encapsulation
  get user(): string {
    return this._user;
  }

  get balance(): number {
    return this._balance;
  }
}

const person1 = new Bank('John', 2000);
const person2 = new Bank('Dave');

console.log('Balance is: ', person1.balance);

person1.deposit(1000);

console.log('Balance is: ', person1.balance);

person1.withdraw(2000);
person1.withdraw(200);

console.log('Balance is: ', person1.balance);
