"use strict";
// DOM Traversal technique => (DOM) > HTML ke jo elements hain unme (Traversal) yani travel karna (technique) ki zariye.
// iska matlab hai ke travel karna aage peechy opar neechy kisi bhi tarf move krwana.
let myDiv = document.getElementById('myDiv');
// myDiv.style.background = "blue";
myDiv.style.border = "2px solid black";
myDiv.style.display = "flex";
// myDiv.style.justifyContent = "center";
myDiv.style.textAlign = "center";
myDiv.style.alignItems = "center";
myDiv.style.flexDirection = "column";
// DOM Traversal technique => Start
// let para = document.getElementsByTagName('p'); // HMLT collection dega veriable mein or ye ham darect para ko get kar 
// para[0].style.background = "red";              // uspe manipulation kar rhy hain lekin ab ham bagher class, tag, ya id
//                                                // ke div ke andar rakhy paragraphs ko acces kar ke maipulation karna chahty hain.
// myDiv.firstElementChild.style.color = "brown";
// myDiv.lastElementChild.style.color = "red";
// document.body.style.background = "yellow"; 
console.log(
//    myDiv.parentElement  
//  document.body.firstElementChild.firstElementChild.
//  nextElementSibling.nextElementSibling.style.color = "aqua"
//  document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.background = "yellow"   
//  document.body.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.style.background = "blue"
document.body.firstElementChild.children[2].style.color = "blue");
/* NOTES


myDiv.firstElementChild.style.color = "brown";

myDIv ke andar jo uska pehla child hai usko acces karo or style Css ke andar jo color ki property hai us se is first
Element ka color change kardo.
is line mein ham (myDiv) jo ke HTML se get kiyya hai usko acces kar ke uske andar jo paragraph hain unko bagher kisi
(Id, Class, Tag) ke acces kar ke uspe manuplation kar rhy hain


myDiv.parentElement   => body

Div se ham uske parent Element ko bhi acces kar sakty hain or uspe bhi manupulation kar sakty hain.


document.body.style.background = "yellow";
Is se ham document ke andar rakhy body ke page ko acces kar ke uspe manuplation kar sakty hain.


document.body.firstElementChild.firstElementChild.nextElementSibling.style.color = "blue";

iska matlab hai document ke andar jo body hai uske andar jo pehla element hai jo ke aik div hai us div ke andar jo pehla
pehla element jo ke paragraph hai uske brabar mein jo uska sibling hai (Sad) uske text ka color blue kardo.
isi cheez ko ham travel kehty hain document se body mein travel kar ke gaye phir div mein or us se div ke pragrapg ke
sibling mein travel kiyya yahi cheez (Traversal technique) kehlati hai.


document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.color = "aqua";

document ke andar jo body hai uske andar jo pehla child hai jo ke aik div hai us div ka jo pehla child pargraph hai
jiski value (Funny) hai uske brabar mein jo (Sad) ka paragraph hai uske bhi brabar mein jo (Bandar) ka
paragraph hai uska color (aqua) kardo. is tarhn ham aik element se dosry element ya dosry element se 3sry element ya
kisi bhi element ke beech mein jo cheez hai usko acces kar sakty hain sibling wala game khel ke😂.


document.body.firstElementChild.lastElementChild.previousElementSibling.style.color =  "red"

document se body mein travel kiyya phir body ke andar ke first chaild jo ke aik div hai us tak travel kiyya
uske bad hamne us div ke last waly element jo ke aik paragraph hai (bandar) wahn tak travel kiyya or phir kaha ke
us se pehly wala jo paragraph hai jo ke (Sad) ka hai uske text pe manipulation ki hai.


document.body.firstElementChild.children =>  HTMLCollection(4) [p, p, p, p]

document ke andar jo body hai or us body ke andar ke jo aik div hai us div ke andar jitne bhi paragraph hain wo
is div ke children hain or ham (children) ki property ko use kar ke un sab children ko HTML COLLECTION ke arrray
mein get kar sakty hain.


document.body.firstElementChild.children[2].style.color = "blue";   => p

children property ko index number deny se wo property sirf wali children array mein and kar ke laa kar degi jiska ham usy index denge.
or usi index pe manpulation bhi kar sakty hain CSS ki.
















































*/ 
