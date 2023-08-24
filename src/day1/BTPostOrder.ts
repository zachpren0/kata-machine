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
    if (curr.right){
        walk(curr.right, path)
    }
    //post
    path.push(curr.value);
    
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}