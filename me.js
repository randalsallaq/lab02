'use strict';

var result = 0;

// // this is the greeting, in addition to the user's name in order to make more interaction with the user.//
// alert( 'hello there!');

var username = prompt('What is your name?');
console.log('welcome' + username);
alert('welcome ' + username);





// //Q1
// //here i am gonna start the guessing game by asking the user if they know me.//
// //if the answer is yes then it will show them: "hello friend"//
// //otherwise it will show them "I will be glad to let you know me"//

function me1(){
var meetme = prompt('Do You Know Me?'); 
if (meetme.toLowerCase() === 'y' || meetme.toLowerCase() === 'yes') {
    //console.log('Hi Friend');
    alert('Hi Friend');
    result == result++;
  } else {
      //console.log('I will be glad to let you know me');
    alert('I will be glad to let you know me');
  }
}
me1();

// //Q2
// //in this question u am asking the user to guess id i am more than 23 years old//
// // if his answer is yes then it'll show this: 'WOW. You\'re smart'//
// //otherwise it'll show: 'wrong. I am 23 and 6 months-_-'//


function me2(){

  var age = prompt('Am I more than 23?');
  if (age.toLowerCase() === 'y' || age.toLowerCase() === 'yes') {
      //console.log('WOW. You\'re smart');
      alert('WOW. You\'re smart');
      result == result++;
  } else {
      //console.log('wrong. I am 23 and 6 months-_-');
    alert('wrong. I am 23 and 6 months-_-')
  }
}
me2();

//   //Q3
//   //in this question i am asking the user if i am an employee//
//   //if the answer is yes then it'll show: 'NOPE :D'//
//   //otherwise it'll show:'YOU GOT IT'//


function me3(){
    var employee = prompt('Do you think I am an employee?');
    if (employee.toLowerCase() === 'y' || employee.toLowerCase() === 'yes') {
       // console.log('NOPE :D');
        alert('NOPE :D');
    } else {
       // console.log('YOU GOT IT');
        alert('YOU GOT IT');
        result == result++;
    }
  }
  me3();

    //Q4
    //here i am asking the user if I love potato//
    //if the answer is yes then it'll show: 'absolutely!//
    //otherwise it'll show: 'is it possible not to love potato even!'//

    function me4(){
    var potato = prompt('Do I love Potato?');
    if (potato.toLowerCase() === 'y' || potato.toLowerCase() === 'yes') {
       // console.log('absolutely!');
        alert('absolutely!');
        result == result++;
    } else {
       // console.log('is it possible not to love potato even!');
        alert('is it possible not to love potato even!');
    }
  }
  me4();

//     //Q5
    //here i am asking the user if they do like the coconut perfumes//
    //if they do then it'll show them: 'Finally! Someone shares me this!'//
    //otherwise it'll show: 'as usual'//

    function me5(){
    var perfume = prompt('Do you think that coconut perfumes are the best?');
    if (perfume.toLowerCase() === 'y' || perfume.toLowerCase() === 'yes') {
        //console.log('Finally! Someone shares me this!');
        alert('Finally! Someone shares me this!');
        result == result++;
    } else {
       // console.log('as usual');
        alert('as usual');
       
    }
  }
  me5();

    //Q6
   
    function me6(){
    for (var i = 0; i < 4; i++) {
      var brothers = prompt('how many brothers do I have? , you have 6 attempts');
      if (brothers < 4) {
        brothers = Number(brothers);
        //console.log('too low');
        alert('too low');
      }
        else if ( brothers > 4) {
          //console.log('too high');
          alert('too high')
        }
       else{
       // console.log('correct');
        alert('correct');
        result == result++;
        break;
        
      }
    }
  }
  me6();

//Q7
function me7(){
var animals = ['cat', 'dog', 'flamingo'];
    for (var o = 0; o < 6; o++){
      var guessfav = prompt ('what is my favourite animal?');
      
      if (guessfav == 'cat' || guessfav == 'dog' || guessfav == 'flamingo') {
        alert('correct!');
        result == result++;
      break;
      
      } else {
        alert('lets try again');
      }
    } 
  }
  me7();
    
    alert('my fav animals are : cat , dog , flamingo ');

    
      alert('your result is ' + result);
    

