
const user = {
    name: "saify",
    fee: 99
}


// passing objects as paramentre
function createUser({ name: string, fee: number }) { }

createUser(user)


// returing objects fromt he function
function newUser({ name: string, isPaid: boolean }): {} { return {} }
