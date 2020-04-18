
let formatNum = n => {

    let arr;

    arr = [];
    for(var i = 1; i <= n; i++) {
        arr.push(i)
    }

    arr.forEach((e,i) => {
        switch(true){
            case e % 2 === 0 && e % 3 === 0 && e % 5 === 0:
                arr[i] = "yu" + "-" + "gi" + "-" + "oh";
                break
            case e % 2 === 0 && e % 3 === 0:
                arr[i] = "yu" + "-" + "gi";
                break
            case e % 3 === 0 && e % 5 === 0:
                arr[i] = "gi" + "-" + "oh";
                break
            case e % 2 === 0 && e % 5 === 0:
                arr[i] = "yu" + "-" + "oh";
                break
            case e % 2 === 0:
                arr[i] = "yu";
                break
            case e % 3 === 0:
                arr[i] = "gi";
                break
            case e % 5 === 0:
                arr[i] = "oh";
                break
            default:
                arr[i] = e;
        }
    })

    return arr;

}
console.log(formatNum(100))
console.log(formatNum(20))

