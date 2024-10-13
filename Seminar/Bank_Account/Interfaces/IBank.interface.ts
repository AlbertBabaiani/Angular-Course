export interface IBank {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    get user(): string;
    get balance(): number;
  }
  