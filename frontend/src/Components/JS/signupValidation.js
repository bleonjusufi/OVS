// function Validation(values) {
//     let error = {}
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern =  /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

//     if(values.emri === "") {
//         error.emri = "Emri dhe Mbiemri nuk duhen te jene te zbrazte"
//     }else{
//         error.emri = ""
//     }

//     if(values.numriPersonal === ""){
//         error.numriPersonal = "Numri Personal nuk duhet lene zbrazte"
//     }else{
//         error.numriPersonal = ""
//     }

//     if(values.email === ""){
//         error.email = "Adresa Elektronike duhet te plotesohet"
//     }else if(!email_pattern.test(values.email)){
//         error.email = "Adresa Elektronike jo korrekte"
//     }else{
//         error.email = ""
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