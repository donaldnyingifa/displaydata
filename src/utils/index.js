export const progress =(user)=> {
    let total = 26
    let curr = Object.keys(user).length
    let per = (curr/total) * 100
    return Math.ceil(per)
}