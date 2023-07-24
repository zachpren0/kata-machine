export default function bubble_sort(arr: number[]): void {
//xi <+ xi+1
//n^2

for (let i = 0; i < arr.length; ++i){
    for (let j = 0; j < arr.length - 1 - i; ++j){
        if (arr[j] > arr[j+1]){
            const tmp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = tmp;
        }
    }
}


}