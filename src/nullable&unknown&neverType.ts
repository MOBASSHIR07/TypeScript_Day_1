//nullable&unknown&neverType.ts

const getUser = (input:string | null)=>{
    if(input){
        console.log(`From database : ${input}`);
    }
    else{
        console.log("From db all user");
    }
}
getUser("sadik")
getUser(null)

//unknown

const discountCal = (input:unknown)=>{// run time a bujbe + assign hobe like js// but further a type base kaz hobe
       if(typeof input =="number"){
        const discount = input *0.1
       }
       else if( typeof input == 'string') {
            const [discountPrize] = input.split("")
            Number(discountPrize)
       }
}

discountCal(100)
discountCal('100 TK')
discountCal(null)

//**** je function jibone kisu return kore nah type never , like new Error buildIn