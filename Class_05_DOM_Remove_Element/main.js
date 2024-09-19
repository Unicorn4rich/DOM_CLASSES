"use strict";
let H1 = document.createElement("h1");
// let btao = prompt("what is your name?")
H1.innerText = "Hello Taha";
// document.body.append(H1); 
// document.body.prepend(H1);
document.body.children[2].append(H1); // paragraph or H1 tag aik sath combine huy huwy hain.
document.body.children[2].removeChild(H1);
// iahn par krwaenge wahi par jaa kar delete krwaenge
document.body.append(H1);
// document.body.removeChild(H1);
H1.remove(H1); // darect bhi remove kar sakty hain.
// ye HTML mein define kiyye huy elements ko bula kar delete kar rhy hain
let para2 = document.getElementById("para2");
let para3 = document.getElementById('para3');
para2.remove();
para3?.remove();
/* NOTES


append();

ye method jo bhi cheez HTML mein add krwata hai wo last mein jaa kar add hoti hai baqi content ke.


prepend();

ye method HTML mein jo bhi cheez add krwata hai wo baqi ke sary content se pehly show hoti hain.


document.body.children[2].append(H1);

document matlab HTML ki body mein jo para graph hain wo (body) ke exact andar hain to ye pargraph body ke children huy
isliye hamne (children[2]) ka method laga kar usme aik paragraph ka index number dey kar kaha ke is index ke bad append(H1) kardo
yani ke push kardo hmare (H1) tag ko taky us tag mein jo bhi hai wo dosry index ke bad show ho. agr iski jagah ham prepend(H1) method
ka use karte to ye 2 number index ke paragraph se pehly (H1) tag ka data show krwata.


document.body.children[2].removeChild(H1);

HTML ki body mein 2 number index ke bad jo hamne H1 add krwaya tha usy removeChild(H1); method se delete krwa rhy hain.
agr hamen H1 ka tag jo ke hamne add krwaya tha usy delete karna hai to ham bilkul wesy hi acces kar ke delete karenge matlab jahn par
hamne push kiyya tha wahi par jaa kar delete bhi karenge.


para2.remove()

HTML mein moujod Elements ko bhi ham DOM manipulation ke zariye delete karwa sakty hain.


para3?.remove()

iske andar question mark isliye laga rhy hain kiyun ke HTML ki property mein kuch na likhen to wo null ho jati hai.

*/ 
