import LinkedList from "./linkedList.js"

let linkedList = new LinkedList();

linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.prepend(1);
// linkedList.getTail()

let size = linkedList.size()

// console.log(size)
// let head = linkedList.getHead()s
// let tail = linkedList.getTail();

// linkedList.at(0)



// linkedList.pop()
// linkedList.getTail()

let res = linkedList.contains(1)
// console.log(res)
linkedList.append(10)
let res2 = linkedList.find(10)
// console.log(res2)



linkedList.toString()
linkedList.insertAt("a",5);
linkedList.toString()
linkedList.removeAt(4);
linkedList.toString()


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())