// obj destructuring

// array destruturing


const user = {
    id : 123,
    name :{
        firstName: 'Sadikul',
        MiddleName:'Mobasshir',
        lastName: 'Sadik'
    },
    gender:'male',
    favouriteColour:'black'
}


const {favouriteColour, name : {MiddleName}} = user;


/// array
const friends : string[] = ['Rahim ', 'karim' , 'momotaz']

const myBestFnd = friends[1]// normal

//destructure

const [A,B,C] = friends//  A B C get value by order 
const [,e,] = friends// skiping first and last index

