const fibonacci = function(num) {
    let fibSeq = []
    if (num < 0){
        return "OOPS"
    }
    for (let i = 0; i < num; i++){
        if (i == 0 || i == 1){
            fibSeq.push(1) 
        }else{
            fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1])     
        }
    }
    return fibSeq[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
