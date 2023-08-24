 //divide array by two - pick a pivot. 
    //iterate over and if bigger then pivot put it above pivot if low then put it below pivot.
    //nlogn could be n^2 in case its reverse sorted
    
    //strat = pick the middle element.

//partition - produce pivot index and moves items
function partition(arr: number[], lo:number, hi: number): number {

    const pivot = arr[hi];
    let idx = lo -1; 

    for (let i = lo ; i < hi; i ++){
        if (arr[i] <= pivot ){
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;

    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
    

}
// quicksort- calls patircia

function qs(arr: number[], lo: number, hi: number): void {
    if (lo>=hi){
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    
    qs(arr, lo, pivotIdx -1);
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1);
}