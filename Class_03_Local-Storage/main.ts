// let myAnchor: any = document.getElementById('myAnchor');

// // console.log(myAnchor) // tag or uske sath bohut sara Extra Code.

// let data = myAnchor.innerText;

// localStorage.setItem('pageOneData', data);

// console.log(localStorage.getItem('pageOneData'));  // Output:  Click here to open second file


// <--------------------------------------------END------------------------------------------->
// yahn ham Darect User se data ley kar usy (localStorage) mein save krwa rhy hain.  

let userName = prompt('What is your Name?') || "undefined" // ye data type hamne isliye lgai kiyun localStorage ki value mein error aa rh tha ke isme aai hui value null bhi ho sakti hai.

localStorage.setItem('userName', userName);

// user se liya hua data hamne localStorage mein (userName) ke naam se memory bana kar store kar diyya
// or is store kiyye huy data ko ham HTML ki second.html ki file mein print krwa ke check kar rhy hain.  


















/* NOTES 


console.log(myAnchor);          => extra Code methods and many more.
let data = myAnchor.innerText;  => us tag ke extra code mein se sirf uska text nikal rhy hain.

html se ham jab bhi koi cheez (Class, Id, Tag) se document ke zariye Typescript mein access kar ke aik veriable mein main
rakhty hain to us veriable mein sirf uski wo value nahi ati jo uske HTML page mein uske tag ke andar rakhi gai thi balke is veriable
mein bohut sara extra data (methods, Style.CSS) or bohut kuch ata hai isliye agr hamen us veriable mein se kuch bhi chahiye ho jese
ke us HTML ke tag ke andar likha hua text to uske liye ham (myAnchor.innerText) property use karenge or phir usy aik new veriable
mein save krwa ke us veriable ko use karenge kiyun ke us veriable mein sirf us tag se nikala hua text hi hoga or kuch nahi.


localStorage.setItem('pageOneData', value);

(localStorage) is se ham aik page ka data dosry teaasry ya kisi bhi page mein shift kar sakty hain. setItem() ye method 2 argument
leta hai pehla wo naam jo ham isme save kiyye huy data ka rakhna chahty hain jisko bad mein use kar ke ham is memory ko acces karenge 
or dosray argument mein wo value jo ham isme store karna chahty hain memory ke tor pe.



localStorage.getItem('pageOneData')

is method se ham (localStorage) ke andar ka wo data get kar rhy hain getItem() method ke zariye jis data ko hamne pehly setItem() 
method ke zariye store krwaya tha.
















































*/