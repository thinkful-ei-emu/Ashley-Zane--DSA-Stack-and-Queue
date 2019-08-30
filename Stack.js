class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function display(stack) {
  let displayedstack = "";
  let currentNode = stack.top;

  while (currentNode !== null) {
    displayedstack += `${currentNode.data}, `;
    currentNode = currentNode.next;
  }
  console.log(displayedstack);
  return displayedstack;
}

function peek(stack) {
  let currentNode = stack.top;
  if (currentNode !== null) {
    console.log(currentNode.data);
    return currentNode;
  }
  currentNode = currentNode.next;
}


function isEmpty(stack){
  let currentNode=stack.top;
  if(currentNode===null){
    console.log("empty Stack")
  }

};

function main() {
  let starTrek = new Stack();
  let empty= new Stack

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  display(starTrek);
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
  peek(starTrek);
  isEmpty(empty);
}
main();
