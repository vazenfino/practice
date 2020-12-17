/* 
By varun gaddam
Date Created Dec 17th 2020

*/

let  letters =[]; // this is the stack

let word = "varun"; // race car

let reverseword = "";

// put letters of word into stack 

for ( var i= 0; i<word.length;i++){
  // console.log(letters);
  letters.push(word[i]);
}
// console.log(letters)

//pop of the stack in reverse order 
for (var j=0;j<word.length;j++){
  console.log(reverseword);
  reverseword +=letters.pop();
}
// console.log(reverseword);
//condition for palindrome 

if(reverseword === word)
  console.log( word + " is a palindrome");
else
  console.log(word + " is not a palindrome")
