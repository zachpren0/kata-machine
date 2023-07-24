export default function bs_list(haystack: number[], needle: number): boolean {
    //haystack is sorterd
    let lo = 0;
    let hi = haystack.length;

    while(hi > lo){
        const m = Math.floor(lo + (hi-lo)/2);
        if (haystack[m] === needle){
            return true;
        } if (needle > haystack[m]) {
            lo = m+1;
        } else {
           hi = m;     
        }
    } 

    return false;


}