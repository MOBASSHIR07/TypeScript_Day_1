//spread operator for array

const friends = ['Rahim', 'Karim']
const schoolFriends = ["Pintu", 'Cintu', 'habib']
const collegeFnd = ['Mr. Smart' , 'Mr .very smart'] 

friends.push(...schoolFriends)

//spread op for obj

const user = {name:"sadik", phoneNo:'01722199333'}

const otherInfo = {hobby : "outing", favouriteColour:"black"}

const userInfo = {...user, ...otherInfo}



// rest operator 

// const sendInvite = (friend1:string, friend2:string, friend3:string)=>{


//     console.log();

    
// }

 const sendInvite = (...friends:string[])=>{ // rest operator same syntex


   friends.forEach((friend:string)=>console.log(`send Invitation tp ${friend}`))

    
 }
 
 sendInvite('pintu', 'cintu', 'billu')
 