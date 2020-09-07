'use strict';

// this is the greeting, in addition to the user's name in order to make more interaction with the user.//
alert( 'hello there!');

var username = prompt('What is your name?');
console.log('welcome' + username);
alert('welcome ' + username);





//Q1
//here i am gonna start the guessing game by asking the user if they know me.//
//if the answer is yes then it will show them: "hello friend"//
//otherwise it will show them "I will be glad to let you know me"//
var meetme = prompt('Do You Know Me?'); 
if (meetme.toLowerCase() === 'y' || meetme.toLowerCase() === 'yes') {
    //console.log('Hi Friend');
    alert('Hi Friend');
  } else {
      //console.log('I will be glad to let you know me');
    alert('I will be glad to let you know me');
  }


//Q2
//in this question u am asking the user to guess id i am more than 23 years old//
// if his answer is yes then it'll show this: 'WOW. You\'re smart'//
//otherwise it'll show: 'wrong. I am 23 and 6 months-_-'//

  var age = prompt('Am I more than 23?');
  if (age.toLowerCase() === 'y' || age.toLowerCase() === 'yes') {
      //console.log('WOW. You\'re smart');
      alert('WOW. You\'re smart');
  } else {
      //console.log('wrong. I am 23 and 6 months-_-');
    alert('wrong. I am 23 and 6 months-_-')
  }


  //Q3
  //in this question i am asking the user if i am an employee//
  //if the answer is yes then it'll show: 'NOPE :D'//
  //otherwise it'll show:'YOU GOT IT'//

    var employee = prompt('Do you think I am an employee?');
    if (employee.toLowerCase() === 'y' || employee.toLowerCase() === 'yes') {
       // console.log('NOPE :D');
        alert('NOPE :D');
    } else {
       // console.log('YOU GOT IT');
        alert('YOU GOT IT');
    }

    //Q4
    //here i am asking the user if I love potato//
    //if the answer is yes then it'll show: 'absolutely!//
    //otherwise it'll show: 'is it possible not to love potato even!'//

    var potato = prompt('Do I love Potato?');
    if (potato.toLowerCase() === 'y' || potato.toLowerCase() === 'yes') {
       // console.log('absolutely!');
        alert('absolutely!');
    } else {
       // console.log('is it possible not to love potato even!');
        alert('is it possible not to love potato even!');
    }

    //Q5
    //here i am asking the user if they do like the coconut perfumes//
    //if they do then it'll show them: 'Finally! Someone shares me this!'//
    //otherwise it'll show: 'as usual'//

    var perfume = prompt('Do you think that coconut perfumes are the best?');
    if (perfume.toLowerCase() === 'y' || perfume.toLowerCase() === 'yes') {
        //console.log('Finally! Someone shares me this!');
        alert('Finally! Someone shares me this!');
    } else {
       // console.log('as usual');
        alert('as usual');
       
    }
