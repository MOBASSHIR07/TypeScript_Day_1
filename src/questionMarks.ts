// ? : ternary operator
// ?? : nullish coalescing operator
// ?. optional chaning


const userAge = 21
const biyerJonnoEligible =(age:number) :string=>{
    const result = age >=21 ? "eligible": "Not eligible"
    return result

}
console.log(biyerJonnoEligible(21))


//Nullish work only on null or undefine and set default value

const userTheme =null

const selectedTheme = userTheme ?? 'Light'
const selectedTheme1 = userTheme ? 'Light': "Dark"// if truely , falsy
console.log(selectedTheme);
console.log(selectedTheme1);

// optional chaning


