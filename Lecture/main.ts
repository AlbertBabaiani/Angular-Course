//////////////////////////////
// კონვერტაცია - tsc main.ts ("main.ts"-ის მაგივრად შეგიძლიათ მიუთითოთ სხვა TypeScript-ის ფაილი)
//////////////////////////////

//////////////////////////////
// პრიმიტიული ტიპები
//////////////////////////////

// String
let value: string = 'Hello World!';

// Number
let num: number = 200_000.3;

// Boolean
let b: boolean = false;

//////////////////////////////
// Explicit vs Implicit Type Declaration
//////////////////////////////

// Explicit
let num_explicit: number = 10;

// Implicit
let num_implicit = 10;

//////////////////////////////
// Any
//////////////////////////////

let x: any = true;

x++;
x.toUpperCase();
x.name;
x();

//////////////////////////////
// Unknown
//////////////////////////////

let y: unknown = true;

if (typeof y === 'number') {
  // Type Narrowing
  y++;
}
if (typeof y === 'string') {
  y.toUpperCase();
}

//////////////////////////////
// მასივები
//////////////////////////////

const number_arr: number[] = [1, 2, 3, 4, 5];
const string_arr: string[] = ['a', 'b', 'c'];

const number_arr1: Array<number> = [1, 2, 3, 4, 5];
const string_arr2: Array<string> = ['a', 'b', 'c'];

// Implicit
const number_arr1_implicit = [1, 2, 3, 4, 5];
const string_arr2_implicit = ['a', 'b', 'c'];

// Union in Functions
const union_arr: (number | string)[] = [1, 2, 3, 4, 'a', 'sd', 2];

//////////////////////////////
// Union Type
//////////////////////////////

let ageOrName: number | string | boolean = false; // შეეცადეთ ბევრი არ დაამატოთ - 3

let namee: string | null = null;
namee = 'John';

//////////////////////////////
// ფუნქციები
//////////////////////////////

function sum(a: number, b: number): number {
  return a + b;
}

// არააუცილებელი პარამეტრი - Optional parameter
function sum_optional_parameter(a: number, b?: number): number {
  if (b !== undefined) {
    return a + b;
  }

  return a + a;
}

// Default parameter
function sum_default_parameter(a: number, b: number = 2): number {
  return a + b;
}

// Arrow Function
let sum_arrow_function = (a: number, b: number): number => a + b;

//////////////////////////////
// Objects
//////////////////////////////

const person1 = {
  id: '111',
  name: 'George',
  age: 20,

  information() {
    console.log('Id: ' + this.id, 'Name: ' + this.name, 'Age: ' + this.age);
  },
};

person1.information();

const person2 = {
  id: '444',
  name: 'Lewis',
  age: 44,

  information() {
    console.log('Id: ' + this.id, 'Name: ' + this.name, 'Age: ' + this.age);
  },
};

person2.information();

// Factory Function
function Factory_Function(id: string, name: string, age: number) {
  return {
    id,
    name,
    age,

    information() {
      console.log('Id: ' + this.id, 'Name: ' + this.name, 'Age: ' + this.age);
    },
  };
}

const person1_factory_function = Factory_Function('111', 'George', 20);
person1_factory_function.information();

const person2_factory_function = Factory_Function('444', 'Lewis', 44);
person2_factory_function.information();

//////////////////////////////
// Class
//////////////////////////////

class Person {
  id: string;
  name: string;
  age: number;

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  information() {
    console.log('Id: ' + this.id, 'Name: ' + this.name, 'Age: ' + this.age);
  }
}

const person1_class = new Person('111', 'George', 20);

person1.information();

const person2_class = new Person('444', 'Lewis', 44);

class Figure {
  private area: number | null = null;

  constructor(public width: number, public height: number) {}

  public CalculateArea(): number {
    this.area = this.height * this.width;

    return this.area;
  }
}

const r = new Figure(10, 20);
r.CalculateArea();
console.log(r);

class Person2 {
  private _id = '12345';

  set id(new_id: string) {
    if (this._id.length > 10) {
      this._id = new_id;
    }
  }

  get id(): string {
    return this._id;
  }
}

const p = new Person2();
p.id = '1111';
console.log(p.id);

class Custom_Array {
  private arr: number[];

  constructor() {
    this.arr = [];
  }

  AddItem(new_value: number): void {
    this.arr.push(new_value);
  }

  RemoveItem(value: number) {
    const index = this.arr.findIndex((item) => item === value);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  GetAllItems(): number[] {
    return [...this.arr];
  }
}

const custom_array = new Custom_Array();
custom_array.AddItem(10);
custom_array.AddItem(20);
custom_array.AddItem(30);
custom_array.AddItem(40);
custom_array.AddItem(50);
console.log(custom_array.GetAllItems());
custom_array.RemoveItem(40);
console.log(custom_array.GetAllItems());
custom_array.RemoveItem(44);
console.log(custom_array.GetAllItems());

//////////////////////////////
// Interface
//////////////////////////////

interface ICustom_Class {
  AddItem(new_value: number): void;
  RemoveItem(value: number): void;
  get GetAllItems(): number[];
}

class Custom_Array2 implements ICustom_Class {
  private arr: number[];

  constructor() {
    this.arr = [];
  }

  AddItem(new_value: number): void {
    this.arr.push(new_value);
  }

  RemoveItem(value: number) {
    const index = this.arr.findIndex((item) => item === value);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  get GetAllItems(): number[] {
    return [...this.arr];
  }
}

const arr_custom_array2 = new Custom_Array2();
arr_custom_array2.AddItem(10);
arr_custom_array2.AddItem(20);
arr_custom_array2.AddItem(30);
arr_custom_array2.AddItem(40);
arr_custom_array2.AddItem(50);
console.log(arr_custom_array2.GetAllItems);
arr_custom_array2.RemoveItem(40);
console.log(arr_custom_array2.GetAllItems);
arr_custom_array2.RemoveItem(44);
console.log(arr_custom_array2.GetAllItems);

//////////////////////////////
// Generics
//////////////////////////////

function show_array<T>(arr: T[]) {
  console.log(arr);
}

const string_arr_generic: string[] = ['a', 'b', 'c'];
const number_arr_generic: number[] = [1, 2, 3];

show_array<number>(number_arr_generic);

//////////////////////////////
// Generics in class
//////////////////////////////

interface ICustom_Class_Generic<T> {
  AddItem(new_value: T): void;
  RemoveItem(value: T): void;
  get GetAllItems(): T[];
}

class Custom_Array_Generic<T> implements ICustom_Class_Generic<T> {
  private arr: T[];

  constructor() {
    this.arr = [];
  }

  AddItem(new_value: T): void {
    this.arr.push(new_value);
  }

  RemoveItem(value: T) {
    const index = this.arr.findIndex((item) => item === value);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  get GetAllItems(): T[] {
    return [...this.arr];
  }
}

const arr_number_generic = new Custom_Array_Generic<number>();
arr_number_generic.AddItem(10);
arr_number_generic.AddItem(20);
arr_number_generic.AddItem(30);
arr_number_generic.AddItem(40);
arr_number_generic.AddItem(50);
console.log(arr_number_generic.GetAllItems);
arr_number_generic.RemoveItem(40);
console.log(arr_number_generic.GetAllItems);
arr_number_generic.RemoveItem(44);
console.log(arr_number_generic.GetAllItems);

const arr_string_generic = new Custom_Array_Generic<string>();
arr_string_generic.AddItem('a');
arr_string_generic.AddItem('b');
arr_string_generic.AddItem('c');