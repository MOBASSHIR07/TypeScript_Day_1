// union  or 
type UserRole = 'admin' | 'user' | 'guest'

const getDashboard = (role:UserRole)=>{
    if(role == 'admin'){
        return 'Admin Dashboard'
    }
    else if(role == 'user'){
        return "User Dashboard";
    }
    else {
       return "guest Dahsboard"
    }
}

getDashboard('admin')


// intersection and
type Employee = {
    id:string,
    name:string,
    phoneNo :string
    
}

type Manager = {
    designation : string,
    teamSize:number
}

type EmployeeManager = Employee & Manager 

const ChoudhurySaheb : EmployeeManager ={
    name: 'Choudhory Saheb',
    id:'123',
    phoneNo:'0122344',
    designation:"manager",
    teamSize:20

}