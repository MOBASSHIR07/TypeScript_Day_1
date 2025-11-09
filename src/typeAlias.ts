type User = {
     id:number,
    name : {
        firstName : string,
        lastName : string
    },
    gander : 'male'| 'female' //union type value must this
    contactNo: string

    address: {
        division:string,
        city:string
    }
} // type alias

const user1:User = {
    id: 123,
    name:{firstName:"Sadikul", lastName:"Mobashir"},
    gander:'male',
    contactNo:"0123333",
    address:{
        division:'Dhaka',
        city:"dhaka"
    }

}
const user2:User = {
    id: 123,
    name:{firstName:"Arif",lastName:"Mobashir"},
    gander:'female',
    contactNo:"0123333",
    address:{
        division:'Dhaka',
        city:"dhaka"
    }

}
type Isadmin = true
const isAdmin : Isadmin = true

//function
type AddFunc = (num1:number,num2:number)=>number
const add : AddFunc= (num1, num2)=>{
   return num1+num2
}