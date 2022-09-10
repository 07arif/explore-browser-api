// console.log('prompt connecting');
// alert('ki khobor bondo')
//--
const showAlert=()=>{
const num = Math.random()*10;
console.log(num)
if(num < 5 ){
alert('ki khobor Dosto');
}
}
//-----
const AskSomthing= ()=>{
const dicision = confirm('Are You Coming Picnic?');
console.log(dicision);
if(dicision === true){
alert('dosto 500tk bkash kor');
}
else{
console.log('DGM!!!  Dore Giye Mor')
}
}
//--
const getUserInfo= ()=>{
const name = prompt('Tell us your Name');
if(!!name){
console.log('Welcome here', name);
}
}