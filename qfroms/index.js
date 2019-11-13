// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

// class Queue {
//   //instance of Queue auto-generates two instances of stacks
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   //add records to First Stack
//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     //verfifies that record exists/doesnt return undefined
//     while (this.first.peek()) {
//       // const record = this.first.pop();
//       // this.second.push(record); // same as below
//       // moves record from First Stack to Second Stack
//       this.second.push(this.first.pop());
//     }
//     //gets a reference to the 'top' record of the Second Stack
//     const record = this.second.pop();

//     while (this.second.peek()) {
//       // moves record back from Second Stack to First Stack
//       // pretty much returns to original state of First Stack
//       this.first.push(this.second.pop());
//     }
//     //calls this.second.pop() to remove top record
//     return record;
//   }

//   // Similar to remove(), but doesn't pop record from Second Stack
//   peek() {
//     while (this.first.peek()) {
//       // Moves records from First Stack to Second Stack
//       this.second.push(this.first.pop());
//     }
//     // Gets a reference to the 'top' record of the Second Stack
//     const record = this.second.peek();

//     // Moves everything back from the Second Stack to the First
//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }

//     // Returns the reference of the top record from Second Stack
//     return record;
//   }
// }

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
