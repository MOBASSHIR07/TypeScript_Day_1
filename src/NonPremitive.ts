// arrray , object
let bazarlist : string[] = ['egg' , 'milk', 'sugar']

bazarlist.push()

let mixedArr : (string | number)[] = ['eggs', 12, 'Milk', 23]

let coordinates: [number,number] = [20,30] // fixed length 2 , see number , number inside []
let couple :[string,string] = ['gusband', 'wife']


///// refrence type


const user :{ organization : 'MY own',// type name( literal type) , not changeable value in key value 
   // readonly organization :string, // alternative of literal type 
    firstName:string ,
    middleName?:string ,// optional type
    lastName:string ,ismarried :boolean} = {
    firstName : "Sadikul",
    middleName: '', // can remove this line because of optional
    lastName: "Sadik",
    ismarried: true,
    organization : 'MY own' 
    // for object order not matters

}


console.log(user);