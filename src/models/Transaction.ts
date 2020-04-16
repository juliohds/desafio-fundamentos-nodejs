import { uuid } from 'uuidv4';

class Transaction {
  id: string | undefined;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ id, title, value, type }: Transaction) {
    this.id = id === undefined ? uuid() : id;
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
