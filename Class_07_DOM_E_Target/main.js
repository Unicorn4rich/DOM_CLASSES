"use strict";
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let myInput = document.getElementById('myInput');
// btn?.addEventListener('click', (e)=>{   // function ke parameter (e) mein hamne addEvent ki sari property`s print krwa ke dekh li ke uske andar jitni bhi property`s hain..
//    console.log(e.target);  // yahn par ham (e) ke event mein se uski target ki value ko get kar ke print krwa rhy hain ke hamen bas (target) ki value print hui huwi chahiye.
// });                        // ye (target) ki property khud ko dhond kar laa kar deti hai. matlab ke jis HTML element ko ham get kar ke uspe ye property lgaenge to ye  
// us HTML Element ko print krwa ke dikha degi ke wo HTML Element hai konsa.
// Matlab ke hamne HTML se button ko get kar ke uspe addEvent chlaya or uspe click kiyya (target) ki property laga ke to ye button khud ka address nikal kar dega ke wo hai konsa Element.                          
btn2?.addEventListener("click", (e) => {
    console.log(e.target); // or ham is (e) ke andar se sirf (target) ki property se is HTML Element, uski value, or uski id ke sath print krwa rhy hain browser console mein.
}); // Output: <button id="btn2">Button2</button>                   
// is button ke (target) ne apni Id or value print kar ke di or opar waly button ne apni. 
// input work
myInput?.addEventListener('change', (e) => {
    console.log(e.target); // jese hi input ke andar kuch likh kar enter karenge to ye (change) chalega or uska HTML Element bhi laar kar dey dega print console mein.
});
myInput?.addEventListener('change', (e) => {
    console.log(e.target.value); // (e) yani addEvent method ke Events (target) yani iska khud ka element jisko target kar ke ye Event chlaya jaa rha hai 
}); // (value) yani jab ham kuch bhi input mein likh kar enter karenge to wo value hamen browser console mein print ho kar milegi.
function myfunc() {
    console.log("I am function"); // us function ki body ke andar likha code bhi chal jaega.
} //  I am function
