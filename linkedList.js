import Node from "./node.js";

class LinkedList {
    constructor(parameters) {
        this.head = null
    };

    append(value){
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; 
        }
    }
    prepend(value){
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    size() {
        let size = 0
        let current = this.head
        if (!this.head) return 0;
        while(current){
            size++;
            current = current.next
        }
        return size
    }
     getHead() {
        console.log(this.head);
        return this.head.value
    }
    getTail(){
        let current = this.head;
        while(current.next){
            current = current.next
        };
        console.log(current);
        return current.value
    }
    at(index){
        if(index < 0) {
            throw new Error('Cannot handle negative index')
        }
        let current = this.head;
        let counter = 0;
        while (counter < index){
            counter++
            current = current.next


            if(!current) {
                console.log('out of bounds')
                throw new Error('out of bounds: no such index')
            }
        }
        console.log(current)
        return current
    }
    pop(){
        if (!this.head) return undefined;

        if (!this.head.next) {
            const lastValue = this.head.value
            this.head = null
            return lastValue;
        }

        let current = this.head
        while(current.next.next){
            current = current.next
        }
        let lastValue = current.next.value;
        current.next = null
        console.log(lastValue)
        return lastValue


    }
}

export default LinkedList