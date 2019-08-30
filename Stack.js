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


function isEmpty(stack) {
  let currentNode = stack.top;
  if (currentNode === null) {
    console.log("empty Stack")
  }

}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let strStack = new Stack();
  let reverseStr = '';

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    strStack.push(s[i]);

  }

  while (strStack.top !== null) {
    reverseStr += strStack.pop();

  }
  // display(strStack);

  return s === reverseStr;

}


function parentheses(exp) {

  let expStack = new Stack();

  for (let i = 0; i < exp.length; i++) {
    console.log(exp[i]);

    if (exp[i] === '(') {
      expStack.push(exp[i]);
    }
    else if (exp[i] === ')') {
      expStack.pop(exp[i]);
    }

  }

  if (expStack.top === null) {
    return console.log('you have enough parentheses');
  }
  else {
    return console.log('you are missing a parentheses')
  }


}

function sort(stack){  
  //come back to if have time
  let finalStack = new Stack();
  let peekVar = peek(finalStack);
    
  while(stack.top !== null){
    // let peekVar = peek(stack);    
   
    let tempVar = stack.pop();
    finalStack.push(tempVar);
    // let peekVar = peek(stack);    
        
    if(tempVar > peekVar){
      console.log('in comparison')
      
    }
    

  }
 
 
  return  display(finalStack);

}






function main() {
  let starTrek = new Stack();
  let empty = new Stack
  let numStack = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  // display(starTrek);
  // starTrek.pop();
  // starTrek.pop();
  display(starTrek);
  // peek(starTrek);
  // isEmpty(empty);
  // True, true, true, false
  // console.log(is_palindrome("dad")); //true
  // console.log(is_palindrome("A man, a plan, a canal: Panama")); //true
  // console.log(is_palindrome("1001")); // true
  // console.log(is_palindrome("Tauhida")); //false
  // parentheses('(()'); // missing
  // parentheses('(())'); //good to go
  numStack.push(1);
  numStack.push(3);
  numStack.push(8);
  numStack.push(4);
  // sort(numStack);
}
main();
