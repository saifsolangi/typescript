function addTwo(num: number) {
    return num + 2
}


function getUpper(name: string) {
    return name.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    return name
    email
    isPaid
}


signUpUser("saif", "saif@gmail.com", false)

// passing default parametre in function
const loginUser = (name: string, email: string, isPaid: boolean = false) => { }

loginUser("saify", "saify@gmail.com")


// strictly bounding functions to return only one type of value like string, number or boolean

// here are we strictly saying return only number
function getValue(num: number): number {
    return num
}



const consoleError = (errorMsg: string): void => {
    console.log(errorMsg)
}