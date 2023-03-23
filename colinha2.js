

function shuffleArray(arr,vezes) {
    for (let t = 0 ; t<vezes ; t++){
        for (let i = arr.length - 1; i > 0; i--) {
        
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
           
        }
        console.log(arr)
        
    
    }
}
    
var arrA = [1, 2, 3, 4, 5];

console.log(shuffleArray(arrA,3)); 
