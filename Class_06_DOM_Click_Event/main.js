"use strict";
let myButton1 = document.getElementById('myButton1');
let myButton2 = document.getElementById('myButton2');
// data type dey kar Element ko get kiyya.
let myPara = document.getElementById('myPara');
console.log(myPara); // null
// example 1
myButton1?.addEventListener('click', () => {
    console.log("Button kaam kar rha hai Saamha...."); // button1 click hony par browser console mein iska output show hoga.
});
// example 2
myButton1?.addEventListener('click', () => {
    alert("Bohut khatar naak log hain ye to😢"); // click par alert message show hoga ye browser pe
});
// example 3
myButton1?.addEventListener('click', () => {
    document.body.style.background = "yellow"; // button1 click hony par body ka backgroud color yellow kar dega.
});
myButton2?.addEventListener('click', () => {
    document.body.style.background = "red"; // button2 click hony par body ka backgroud color red kar dega.
});
// example 3
myButton1?.addEventListener('click', () => {
    myButton2.style.display = "none"; // button1 par click karne se button2 ghaib ho jaega. or ye button2 mein (!) ka sign error htany ke liye lgaya hai.
});
myButton2?.addEventListener('click', () => {
    myButton1.style.display = "none"; // button2 par click karne se button1 ghaib ho jaega.
});
// example 4
myButton1?.addEventListener('click', () => {
    myButton2.style.background = "red"; // button2 ka background color red ho jaega or
    myButton1.style.background = "white"; // button1 ka background color white ho jaega jo ke ye khud hai.  khud ka background color 
}); // isliye white kar rha hai kiyun ke jab dosra button click hua hoga to iska color change kar 
// diyye hoga isliye ye button jese hi click hoga dosry button ke color ke sath sath khud ka color bhi change kar lega.
myButton2?.addEventListener('click', () => {
    myButton1.style.background = "green"; // button1 ka background color green ho jaega or
    myButton2.style.background = "white"; // button2 jo ye khud hai apna color ye white kar lega.
});
// example 5
myButton1?.addEventListener('click', () => {
    myButton1.textContent = "I am clicked...."; // Khud ka jo Text hai usy change kar ke apne andar (I am clicked..) likh dega.
});
// myPara work manipulation
myPara.addEventListener('click', () => {
    myPara.textContent = "I am clicked";
});
/* NOTES


myButton?.

button mein (?) isliye likha hai kiyun ke hamen nahi pata jo iski value hai wo null bhi ho sakti hai  isliye ham ? se
ye optional bana dety hain ke iski value kuch bhi ho jaye jaye or age iski jagah (!) not ka sign laga den to ham
typesript ko ye kehty hain ke hamen pata hai ke iski value null nahi ho sakti.
or agr ham in dono mein se koi bhi nahi lgana chahty to opar document.getElement wali line mein jaa kar veriable ko any data type dey denge.

addEventListener('click', ()=>{})

ye method aik Event hai jo hamen ijazat deta hai event lagane ki iske andar bohut sary events hoty hain jinko use kar ke
ham alag alag event bana kar perform kar sakty hain or ye event apne andar single ya double qutations leta hai.
ye Event apne andar 2 values leta hai 1st value wo event hota hai jo ham bnana chahty hain or dosri value aik function
bana kar lgate hain jese hi ye dono values (addEventListener) ko dety hain to ye hmara aik click Event ban jata hai
iske arrow function ka andar ham jo bhi code likhenge wo tab chalega jab is event button pr click parega.


let myPara: HTMLElement | null = document.getElementById('myPara');

jab bhi ham (HTML) se koi bhi Element (Typescript) mein get karte hain to typescript hamen aik error show krwata hai jisme
wo ye keh rha hota hai ('Element_Name' is possibly 'null') iska matlab ye hai ke typescript ka compiler phupo ban jata hai
usy ye tension stati rehti hai ke hamne jo Element HTML se get kiyya hai wo agr HTML mein ho hi naaa to phirrr....? isliye
is situation mein typescript hmare Element ko null print karega is cheez ko handle karne ke liye mein ham  us Element ko (?)
laga kar optinal bana dety hain ke agr hmara (Element) apko nahi milta to ap is Event ko ignore kar dena chlana hi mat.
ya phir (!) not ka sign laga kar typescript ko ye keh sakty hain ke jesa tum soch rhy ho wesa bilkul nahi hai
ya phirrr ham direct us Element ke veriable ko hi any data type dey dety hain ke ye element kuch bhi hamen faraq nahi parta.

*/ 
