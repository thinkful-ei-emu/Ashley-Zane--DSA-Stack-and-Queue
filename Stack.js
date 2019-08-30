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
  let displayedstack=""
  let currentNode = stack.top;

  while (currentNode !== null) {
    if(currentNode.next===null){
      currentNode=stack.top;
    }
    
    
     console.group(currentNode);
    displayedstack += `${currentNode.data},`;
    console.log(displayedstack);
    currentNode=currentNode.next;
    
  }

  console.log(displayedstack);

  return displayedstack;
}

function peek(stack){
  let currentNode=stack.top;
  while(currentNode!==null){
    if(currentNode.next===null){
      console.log(currentNode.data);
      return currentNode.data;
    }
    currentNode=currentNode.next;
  }
}

function main() {
  let starTrek = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

   display(starTrek);
  peek(starTrek);
}
main();
