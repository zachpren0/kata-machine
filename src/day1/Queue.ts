type Node<T> = {
    value: T,
    next?: Node<T>,
}


export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    //could also do
    // private head?: Node<T>;




    

    constructor() {
        this.head=this.tail=undefined;
        this.length=0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = {value: item} as Node<T>;

        if (!this.tail){
            this.tail = this.head = newNode
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;


}
    deque(): T | undefined {
        if (!this.head){
            return undefined;
        }
        
        this.length--;
        const h = this.head ;
        this.head = this.head.next;


        if (this.length ===0){
            this.tail = undefined;
        }
        return h.value;

        
}
    peek(): T | undefined {
        return this.head?.value; //add a question mark in case its undefined
}
}