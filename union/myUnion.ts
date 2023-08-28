let score: string | number = 23;
score = '24'


type user = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}


let createUser: user | Admin = {
    name: 'saify',
    id: 23
}


function newUser(id: number | string) {
    if (typeof id === 'string') {
        return id.toUpperCase()
    }
}



const arr1: number[] = [12, 3, 4, 5]
const ar2: string[] = ["saify"]
const arr3: (number | string)[] = [12, 3, 4, 5, "down"]