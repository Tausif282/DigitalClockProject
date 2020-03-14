
// let time= document.getElementById(`clock`)

// function clock(){
//     // console.log(new Date())
//     let date =new Date();//date object
//     // console.log(date);
//     let hours=date.getHours() %12;
//     let minutes=date.getMinutes();
//     let seconds=date.getSeconds();
//     // console.log(`${hours}:${minutes}:${seconds}`)
//     time.innerHTML= `<h1>${hours}:${minutes}:${seconds}</h1>`
// }
//  clock();

// // setTimeout();
// // clearTimeout();
// // setInterval();
// // clearInterval();
// clock();
// setTimeout( _ => {
//     document.write(`<h1>Tausif</h1>`)
// },3000);

// setInterval(_ => {
//     let date=new Date().toLocaleTimeString();
//     document.write(date)
// },1000);
let time= document.getElementById(`clock`)
function clock(){
     setInterval(_ =>{
    // console.log(new Date())
    let date =new Date();//date object
    // console.log(date);
    let hours=date.getHours() %12;
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let AmorPm=date.getHours()>12?'PM':'PM';
    // console.log(`${hours}:${minutes}:${seconds}`)
    time.innerHTML= `<h1>${hours}:${minutes}:${seconds} ${AmorPm}</h1>`

},1000)

}
clock();
