type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0; 
        this.head = undefined;
        this.tail = undefined;
    }

    private debug(){
        let curr = this.head;
        let out = "";
        for (let i=0; curr && i < this.length; ++i){
            out += `${i} => ${curr.value}`;
            curr = curr.next
        }
        console.log(out);
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if (!this.head){
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        
}
    insertAt(item: T, idx: number): void {
            const node = {value: item} as Node<T>;
       
            if (idx > this.length){
                throw new Error("idx too great - length not long enough - bad ");
            }else if (idx === this.length) {
                this.append(item);
                return;
            }else if (idx===0){
                this.prepend(item);
                return;
            }
            else{
                
                const curr = this.getAt(idx) as Node<T>;
                
                
                let prev = curr.prev;


                //fix this if it breaks

                node.prev = prev;
                node.next = curr;
                
                curr.prev = node;

                if (prev){
                    prev.next = node;
                }

                this.length++;

            }
        
}
    append(item: T): void {

        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.tail){
            this.head = this.tail = node;
            this.debug();
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.debug()
        }

}
    remove(item: T): T | undefined { 
        
        let curr = this.head;
        for (let i=0; i < this.length && curr; ++i) {
            if (curr.value === item){
                break;
            }
            
            curr = curr.next;
        }

        if (!curr){
            return undefined;
        }

        return this.removeNode(curr);


       

}
    get(idx: number): T | undefined {
        let curr = this.getAt(idx);
        curr = curr as Node<T>;
        return curr?.value;
}
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node){
            return undefined;
        }

        return this.removeNode(node);
}


    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0){
            const out = this.head?.value;
            this.head=this.tail=undefined;
            return out;
        }
        if (node.prev){
            node.prev.next = node.next;
        }
        if (node.next){
            node.next.prev = node.prev;
        }
        if (node===this.head){
            this.head = node.next;
        }
        if (node===this.tail){
            this.tail = node.prev;
        }
        const removedValue = node.value;
        node.prev = node.next = undefined;

        return removedValue;
    }
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i=0; i < idx && curr; ++i) {
            curr = curr.next;
        }
        
        return curr as Node<T>;
    }
}