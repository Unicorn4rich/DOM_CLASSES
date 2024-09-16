"use strict";
// Elelement Selector
// Yahn par ham div ko acces kar ke uspe CSS ki property apply kar rhy hain (DOM) manipulation ke zariye.
let myDiv = document.getElementById('myDiv');
myDiv.innerText = "I am Div"; /* Div ke andar text likha hai is property se */
// console.log(myDiv);   div ki property show nahi ho rhi.
myDiv.innerText = "I am div"; // (myDiv) ke andar bohut sari property Aai hain apne ap jisme se (innerText) bhi aik hai
myDiv.innerText = "I am Div";
myDiv.style.height = "200px";
myDiv.style.width = "200px";
myDiv.style.background = "red";
myDiv.style.border = "2px solid black";
myDiv.style.color = "white";
myDiv.style.display = "flex";
myDiv.style.justifyContent = "center";
myDiv.style.alignItems = "center";
// <----------------------------------------------------------END------------------------------------------------>
// Class Selector
// yahn par ham Class ke zariye Elelments ko acces kar rhy hain.
let background = document.getElementsByClassName('background');
console.log(background); // HTMLCollection(2) [div.background, div.background]
background[0].style.height = "150px";
background[0].style.width = "150px";
background[0].style.border = "2px solid black";
background[0].style.marginBottom = "10px";
background[1].style.height = "150px";
background[1].style.width = "150px";
background[1].style.border = "2px solid black";
// <----------------------------------------------------------END------------------------------------------------>
// tag Selector
// yahn par ham tag ke zariye Elelments ko acces kar rhy hain.
let div = document.getElementsByTagName('div');
// console.log(div); array Collection
div[0].style.height = "150px";
div[0].style.width = "150px";
div[0].style.background = "pink";
div[0].style.border = "2px solid black";
div[1].style.height = "150px";
div[1].style.width = "150px";
div[1].style.background = "red";
div[1].style.border = "2px solid black";
// <----------------------------------------------------------END------------------------------------------------>
// for loop ON HTML COLLECTION ARRAY
let div = document.getElementsByTagName('div'); // => Array collection
for (let i = 0; i < div.length; i++) {
    div[i].style.height = "150px"; // => ye [i] isliye diyya hai ke pehly 0 index chalega uske bad phir 2sra index chalega.
    div[i].style.width = "150px";
    div[i].style.background = "blue";
    div[i].style.border = "2px solid";
    div[i].style.marginBottom = "15px";
}
// Multiple divs ko for loop ka use kar ke aik jesi (CSS) sab pe apply kar sakty hain bari bari.
// <----------------------------------------------------------END------------------------------------------------>
// querySelector => get sigle element
let myDiv = document.querySelector('#id'); // => (id) accepted
let myDiv = document.querySelector('.class');
let myDiv = document.querySelector('div');
myDiv.innerText = "shoaib";
myDiv.style.height = "150px";
myDiv.style.width = "150px";
myDiv.style.background = "gray";
// <----------------------------------------------------------END------------------------------------------------>
// querySelectorAll() => get all Elements
let mydiv = document.querySelectorAll('div');
// console.log(mydiv); Nodelist array
mydiv.forEach((item) => {
    item.style.height = "150px";
    item.style.width = "150px";
    item.style.background = "yellow";
    item.style.border = "2px solid black";
    item.style.marginBottom = "10px";
});
/* NOTES

[3] => Tariqon se ham HTML ke elements ko get kar sakty hain.
1. (Id) se ham sirf single element hi get kar paty hain.
2. (Class) se ham bohut sary Elements ko aik sath get kar sakty hain array ki shakal mein or agr single element pe class lagi ho tab bhi wo element aik array mein aega jo [HTML COLLECTION] ka hoga.
3. (Tag) se bhi ham multiple elements ko acces kar sakty hain jo [HTML COLLECTION] array mein aenge.


myDiv.innerText = "I am Div";

div ke andar text likh rhy hain.


myDiv.style.height = "200px";

div ko acces kar ke uspe (DOM Manpulation) kar rhy hain.
HTML div pe style ki property laga kar style ke andar jo (height) ki property hai wo laga rhy hain. HTML elelments ko isi
tarhn typesript mein bula kar unpe CSS ki property laga sakty hain.


console.log(background);  class elements ko print krwa rhy hain

html mein 2 divs ko same classes dey kar unhy aik hi bar mein aik sath acces kiyya or print krwaya uska result dekhny ke liye.
HTMLCollection(2) [div.background, div.background] => ye hamen browser ke console mein show hoga iska matlab hai ke
ye aik array ki Collection hai jiske andar 2 divs hain hain apni apni class ko represent karty huy. or isme array isliye show
krwaya kiyun ke aik se ziyada (classes) ho sakti hain or agr aik hi single element get kar rhy hain to wo bhi aik array mein hi
band ho kar hamen milega lekin (id) to sirf aik hoti hai.


background[0].style.height = "150px";

html mein moujod 2 divs jin ke opar same class lagi hai unhy ham typscript mein aik sath acces kar ke unhy unke index number
se acces kar ke uspe style ke andar jo height ki property hai wo apply kar ke height barha rhy hain.


background[1].style.height = "150px";

same yahn hamne (1) index waly div ko acces kar ke uspe property`s apply kar rhy hain.


console.log(div); tags

tags ko acces kar ke browser ke console mein resut check kar rhy hain.
HTMLCollection(2) [div.classiDiv, div#IdiDiv, IdiDiv: div#IdiDiv] => ye bhi aik array return karta hai
jiske andar 0 index pe (div.classiDiv) aik div hai jiski class (classiDiv) hai or 2sry index pe (div#IdiDiv) pe bhi aik
div hai jiski id (#IdiDiv) hai.


let myDiv = document.querySelector()

ye selector 5 div hain to ye sirf single first waly div ko pakar kar laega or iski speaciality hai ke ye hamen
(Id, Tag, Class) 3eeno pe apply ho jata hai or unko get kar ke laa kar deta hai lekin sirf first wali single value.
querySelector ko ham Id, class, ya tag se bhi pakar sakty hain.


let mydiv = document.querySelectorAll('div');

ye all to all sary divs ko aik sath laega lekin ye HTML COLLECTION return nahi karega browser console mein
balke ye  NodeList(2) [div.class, div.class] ka array return karta hai.


1. HTML COLLECTION => ye aik array hai.
2. Nodelist        => ye bhi aik array hi return krwata hai.
ye 2no array ki tarhn dikhty hain lekin origenal array nahi hain.

(1) HTML COLLECTION mein (foreach) ka method nahi chalta jab ke Nodelist mein (foreach) ka method chal jata hai.
(2) Nodelist hmare DOM ke sath update nahi hoti or HTML Collection DOM ke sath update ho jati hai.


























*/ 
