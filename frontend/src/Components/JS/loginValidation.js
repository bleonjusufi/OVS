// function Validation(values) {
//     alert("")
//     let error = {}
//     const password_pattern =  /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

//     if(values.numriPersonal === "") {
//         error.numriPersonal = "Numri Personal nuk duhet te jete i zbrazte"
//     }else{
//         error.numriPersonal = ""
//     }

//     if(values.password === "") {
//         error.password = "Fjalekalimi nuk mund te jete i zbrazte"
//     }else if(!password_pattern.test(values.password)){
//         error.password("Fjalekalimi nuk eshte i sakte")
//     }else{
//         error.password = ""
//     }
//     return error; 
// }

// export default Validation