function walk(curr: BinaryNode<number> | undefined , path: number[]): number[] {
    if (!curr){
        return path;
    }

    //recursion

    //pre
    
    //recurse
    if (curr.left){
        walk(curr.left, path)
    }

    path.push(curr.value);

    if (curr.right){
        walk(curr.right, path)
    }
    //post
    
    
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}