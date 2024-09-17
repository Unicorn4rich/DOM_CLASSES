// document.body.style.background = "black"; // document ke andar rakhy body ke page ko black color ka background laga kar manupulation kardi.

let myh1: any = document.createElement('h1')  // Create Element

// console.log(myh1);  // succecsfully created h1 tag

let UserName = prompt("What is Your Name?");

myh1.innerText = UserName; // manipulation 2

// myh1.innerText = "Taha"; // manipulation 1

// console.log(myh1);  // check kar rhy hain h1 tag mein value aai hai ya nahi.

document.body.append(myh1); // push to HTML body Webpage








/* 

NOTES 


let myh1 = document.createElement('h1')

is line ka matlab hai ke ham (document) yani ke HTML ke andar createElement() method ka use kar ke aik element create
karna chahty hain (h1) tag ka or create karne ke bad ham usy aik veriable mein store krwa denge.


myh1.innerText = "Taha";

is line mein ham (myh1) tag jise hamne create kiyya tha uske andar (innerText) ka use karte huy aik value
store krwa rhy hain (Taha) naam ki. jise agr ham browser ke console pe check karen to wahn h1 tag ke andar ye 
value likhi hui nazar aegi.


document.body.append(myh1); // push to HTML Webpage

(document) yani HTML ki (body) ke andar append() yani push kardo last mein (myh1) ka tag uski value ke sath jo ke hamen
webpage pe dikhai dega print hua huwa.
DOM ke andar jab ham kisi bhi Element ko create karte hain to wo sirf memory ke andar hota hai HTML ke andar nahi jata
lekin agr hamen is DOM se create kiyye gaye Element ko HTML mein bhejna hai or usy browser pe print hua huwa show 
krwana hai to ham aisy karenge is method se.


























































*/