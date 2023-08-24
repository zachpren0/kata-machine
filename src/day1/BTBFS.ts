

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[] = [head];


    while (q.length){
        const next = q.shift() as BinaryNode<number> | undefined | null;
        if (!next){
            continue;
        }
      
        //search 
        if (next.value === needle)
            return true;
            q.push(next.left);
            q.push(next.right);
    }
    return false;
}