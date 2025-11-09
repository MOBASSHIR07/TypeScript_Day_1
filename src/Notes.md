# 🧠 TypeScript Beginner Notes — Day 1
_Complete Guide with Interview Questions + Answers_

---

## 🟢 1️⃣ Primitive Types

### ✅ What They Are
Primitive types are **basic data types** that store single values — not objects or collections.

| Type | Example | Description |
|------|----------|-------------|
| `string` | `"hello"` | Text values |
| `number` | `123`, `3.14` | All numeric values (no int/float difference) |
| `boolean` | `true`, `false` | Logical values |
| `undefined` | `let x;` | Declared but not assigned |
| `null` | `let x = null;` | Empty or no value |
| `void` | Used for functions that **don’t return anything** |
| `never` | Used for functions that **never finish normally** (e.g. throw errors) |
| `unknown` | Safe version of `any` (must check type before using) |

---

### 🧩 Example
```ts
let userName: string = 'Sadik';
let userId: number = 123;
let isAdmin: boolean = false;

let x = undefined; // type: any
x = 5;
x = "hello";
let n: number = null; // ❌ Error if "strictNullChecks" is true
💬 Interview Q&A

Q1: What’s the difference between null and undefined?
A: undefined means a variable is declared but not assigned; null means it’s intentionally empty.

Q2: When do you use never vs void?
A: void means a function doesn’t return anything; never means the function never finishes (e.g., throws an error or runs forever).

Q3: What’s safer — any or unknown? Why?
A: unknown is safer because you must check its type before using it.

Q4: Can you assign null to a number variable?
A: Only if "strictNullChecks" is disabled in tsconfig.json.


#🟡 2️⃣ Arrays and Tuples
✅ Arrays
let items: string[] = ['milk', 'egg'];
let numbers: Array<number> = [1, 2, 3];


Union type array:

let mixed: (string | number)[] = ['milk', 20];

✅ Tuples

Tuples are fixed-length arrays with specific types.

let point: [number, number] = [10, 20];
let couple: [string, string] = ['husband', 'wife'];

💬 Interview Q&A

Q1: Difference between array and tuple?
A: Arrays can hold values of the same type and have flexible length, while tuples have a fixed number of elements with predefined types.

Q2: Can a tuple be extended?
A: Technically yes (with push), but it breaks type safety, so it’s not recommended.

#🟣 3️⃣ Object Types, Optional, Readonly, and Literal Types
✅ Object Example
const user: {
  organization: 'My own'; // literal type
  firstName: string;
  middleName?: string; // optional
  lastName: string;
  isMarried: boolean;
} = {
  organization: 'My own',
  firstName: 'Sadikul',
  lastName: 'Sadik',
  isMarried: true,
};


Key Points:

organization: 'My own' → literal type (can’t change value)

middleName? → optional property

readonly → property can’t be changed after initialization

💬 Interview Q&A

Q1: What is a literal type?
A: A literal type restricts a variable or property to hold only one specific value, like 'admin' or 42.

Q2: Difference between readonly and const?
A:

readonly → used on object properties.

const → used on variables.

Q3: What’s an optional property?
A: A property marked with ? that may or may not exist in the object.

#🔵 4️⃣ Functions
✅ Regular Function
function add(a: number, b: number): number {
  return a + b;
}

✅ Arrow Function
const addArrow = (a: number, b: number): number => a + b;

✅ Function Inside Object (Method)
const poorUser = {
  name: 'sadik',
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(1000);

✅ Callback Function Example
const arr: number[] = [1, 2, 4];
const squareArray = arr.map((e: number): number => e * e);

💬 Interview Q&A

Q1: Why were arrow functions introduced?
A: To make functions shorter, cleaner, and to capture this from the surrounding scope.

Q2: Difference between normal and arrow function?
A: Arrow functions don’t have their own this, while normal functions do.

Q3: Why define return types?
A: It helps TypeScript catch type errors during compile time.

#🟢 5️⃣ Destructuring
✅ Object Destructuring
const user = {
  id: 123,
  name: {
    firstName: 'Sadikul',
    middleName: 'Mobasshir',
    lastName: 'Sadik',
  },
  gender: 'male',
  favouriteColour: 'black',
};

const { favouriteColour, name: { middleName } } = user;

✅ Array Destructuring
const friends: string[] = ['Rahim', 'Karim', 'Momotaz'];

const [A, B, C] = friends; // A=Rahim, B=Karim, C=Momotaz
const [, second, ] = friends; // skips first and last

💬 Interview Q&A

Q1: What is destructuring?
A: It’s a way to extract values from objects or arrays into separate variables.

Q2: Can you rename variables while destructuring?
A: Yes, e.g. const { name: firstName } = user;.

Q3: What happens if property doesn’t exist?
A: It becomes undefined.

#🔴 6️⃣ Nullable, Unknown, and Never Types
✅ Nullable Example
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From database: ${input}`);
  } else {
    console.log('Fetching all users...');
  }
};

getUser("Sadik");
getUser(null);

✅ Unknown Type Example
const discountCal = (input: unknown) => {
  if (typeof input === "number") {
    const discount = input * 0.1;
    console.log(discount);
  } else if (typeof input === "string") {
    console.log(`Discount info: ${input}`);
  }
};

✅ Never Type Example
function throwError(): never {
  throw new Error("Something went wrong!");
}

💬 Interview Q&A

Q1: When to use unknown instead of any?
A: Use unknown when you don’t know the type yet but want to force checking before using it.

Q2: What is never type?
A: It represents a function that never returns a value (e.g., throws an error).

Q3: Difference between void and never?
A:

void → function executes but returns nothing.

never → function never completes execution.

#🟠 7️⃣ Conditional Operators
✅ Ternary Operator
const biyerJonnoEligible = (age: number): string => {
  const result = age >= 21 ? "eligible" : "not eligible";
  return result;
};
console.log(biyerJonnoEligible(21));

✅ Nullish Coalescing Operator (??)
const userTheme = null;
const selectedTheme = userTheme ?? 'Light';
console.log(selectedTheme); // Light

✅ Optional Chaining (?.)
const user = {
  name: {
    first: 'Sadik',
  },
};

console.log(user?.name?.first); // Safe access

💬 Interview Q&A

Q1: Difference between || and ???
A: || checks falsy values (like 0, "", null, undefined),
?? checks only null or undefined.

Q2: When to use optional chaining (?.)?
A: When accessing deeply nested properties that might not exist.

#🟤 8️⃣ Spread and Rest Operator
✅ Spread Operator (Array)
const friends = ['Rahim', 'Karim'];
const schoolFriends = ['Pintu', 'Cintu'];
const allFriends = [...friends, ...schoolFriends];

✅ Spread Operator (Object)
const user = { name: 'Sadik' };
const extra = { hobby: 'coding' };
const fullUser = { ...user, ...extra };

✅ Rest Operator
const sendInvite = (...friends: string[]) => {
  friends.forEach(friend => console.log(`Invitation sent to ${friend}`));
};
sendInvite('Pintu', 'Cintu', 'Billu');

💬 Interview Q&A

Q1: Difference between spread and rest operator?
A:

Spread: expands arrays/objects.

Rest: collects arguments into an array.

Q2: Can we use rest in object destructuring?
A: Yes, to collect remaining properties.

#🟣 9️⃣ Type Alias
✅ Example
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 1,
  name: { firstName: 'Sadikul', lastName: 'Mobasshir' },
  gender: 'male',
  contactNo: '0123333',
  address: { division: 'Dhaka', city: 'Dhaka' },
};

✅ Function Type Alias
type AddFunc = (a: number, b: number) => number;
const add: AddFunc = (a, b) => a + b;

💬 Interview Q&A

Q1: What is a type alias?
A: A custom name for a complex or reusable type.

Q2: Can you use unions and intersections in aliases?
A: Yes, type aliases support both.

🔶 🔟 Union and Intersection Types
✅ Union (|)
type Role = 'admin' | 'user' | 'guest';
const getDashboard = (role: Role) => {
  if (role === 'admin') return 'Admin Dashboard';
  else if (role === 'user') return 'User Dashboard';
  return 'Guest Dashboard';
};

✅ Intersection (&)
type Employee = {
  id: string;
  name: string;
  phone: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const manager: EmployeeManager = {
  id: 'E123',
  name: 'Choudhury',
  phone: '012233',
  designation: 'Manager',
  teamSize: 20,
};

💬 Interview Q&A

Q1: Difference between union and intersection?
A:

| (union): one of multiple types.

& (intersection): combines multiple types together.

Q2: Can union and intersection be used together?
A: Yes, e.g. (A | B) & C.

Q3: Real-life example of intersection?
A: A User & Admin type that merges both user and admin properties.

🏁 Final Recap Table
Concept	Example	Description
string	'Sadik'	Text
number[]	[1,2,3]	Array of numbers
tuple	[10, 20]	Fixed-length array
object	{name: 'Sadik'}	Structured data
union	`'admin'	'user'`
intersection	A & B	Combine multiple types
unknown	Type safe any	
never	Never returns	
void	Returns nothing	
??	Nullish coalescing	
?.	Optional chaining	
...	Spread/Rest	
🧠 TypeScript Philosophy

TypeScript adds type safety on top of JavaScript.

At runtime, types disappear → it becomes plain JavaScript.

The goal is catching errors before running the code.

Helps large projects stay consistent and bug-free.

✨ End of TypeScript Day-1 Notes

---
