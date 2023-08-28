/*
const user = {
    name: "saify",
    fee: 99
}


// passing objects as paramentre
function createUser({ name: string, fee: number }) { }

createUser(user)


// returing objects fromt he function
function newUser({ name: string, isPaid: boolean }): {} { return {} }


*/

type User = {
    readonly _id: string  // readonly property is used when you can't change the value
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number // this ? sign is used for optional
}

let myUser: User = {
    _id: '123',
    name: 'saify',
    email: 'saify@saify.com',
    isActive: false,
    creditCardDetails: 123
}

myUser.email = "saifysolangi@gmail.com"

