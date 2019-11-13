//LINKED LISTS
// ordered collection of data
// compromised of nodes, each with an amount of data, and a reference to the next node
// Head = first node
// Tail = last node; but doesnt have a reference to any next node

//Two separate nodes that aren't linked
//Head
const nodeOne = {
  data: 123
};

//Tail
const nodeTwo = {
  data: 456
};

// This line links the two nodes
nodeOne.next = nodeTwo;
