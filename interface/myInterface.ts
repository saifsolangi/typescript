interface newUser {
    readonly dbId: number,
    userName: string,
    email: string,
    userId: number,
    course?: string,
    getCoupan(): string
}


const saify: newUser = {
    dbId: 1, userName: 'saify', email: 'saify@saify.com', userId: 34,
    getCoupan: () => { return "" }
}


saify.email = "saifysolangi@gmail.com"
