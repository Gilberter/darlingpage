const userDate = (document.getElementById("start-date"));
const buttonCalculate = document.querySelector(".button-calculate");
const textdays = document.querySelector(".text-days");
const textdays1 = document.querySelector(".text-days1");
const textdays2 = document.querySelector(".text-days2");
const textdays3 = document.querySelector(".text-days3");

let newDate;
let diference;


userDate.addEventListener("change", (event) => {
    newDate = (event.target.value);
    
    let date1 = new Date("11/28/2022");
    let date2 = new Date(newDate);
    
    console.log(date1);
    console.log(date2);
    diference = date2.getTime() - date1.getTime();
    days = (diference  / (1000*3600*24)) + 1 
    month = days / 30.417
    weeks = days / 7
    monthnow = Number.parseFloat(month).toFixed(1);
    monthnowstring = monthnow.toString();

    
    
    buttonCalculate.addEventListener("click", () => {
        textdays.textContent = `Llevamos ${Number.parseInt(days)} Dias. `
        textdays1.textContent = `\n ${Number.parseFloat(month).toFixed(0)} meses y ${monthnowstring[2] } dias. \n `
        textdays2.textContent = ` ${Number.parseInt(weeks)} Semanas. \n`
        textdays3.textContent = `Estoy muy feliz de estar contigo mi amorcito lindo.`
    })
})


    


