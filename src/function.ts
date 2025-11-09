function add(num1:number, num2 : number):number{

return num1+num2
}
add(2,3)


const AddArrow = (num1:number, num2:number): number=>{
 return num1+num2
}
AddArrow(1,3)



//// function in object  -> method

const poorUser = {
    name : 'sadik',
    balance : 0,
    addBalance (value : number):number{
      const totalBalance =  this.balance + value
      return totalBalance
    }
}

poorUser.addBalance(1000)

// function in loops call back function

const arr:number[] = [1,2,4]

const sqrArray = arr.map((e:number):number=>e*e)

