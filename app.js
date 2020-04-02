
let interestData,data;

data = [
    {principal:2500,time:1.8},
    {principal:1000,time:5},
    {principal:3000,time:1},
    {principal:2000,time:3}
]

interestData = [];

let interestCalculator = arr => {
    arr.forEach(el => {   
        switch(true){
            case el.principal >= 2500 && el.time > 1 && el.time < 3:
                el.rate = 3; 
                break;
            case el.principal >= 2500 && el.time >= 3:
                el.rate = 4;
                break;
            case el.principal < 2500 || el.time >= 1:
                el.rate = 2;
                break;
            default:
                el.rate = 1;
        }

        el.interest = (el.principal * el.rate * el.time) / 100;
        interestData.push(el);
    });

    console.log(interestData);
    return interestData;

}

console.log(interestCalculator(data));