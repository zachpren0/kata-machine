

function walk(curr: BinaryNode<number> | undefined , path: number[]): number[] {
    if (!curr){
        return path;
    }

    //recursion

    //pre
    path.push(curr.value);
    //recurse
    if (curr.left){
        walk(curr.left, path)
    }
    if (curr.right){
        walk(curr.right, path)
    }
    //post
    return path;
}



export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}