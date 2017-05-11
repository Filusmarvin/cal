var ones  = ['','1' ,'2','3','4','5','6','7','8','9']
var signs = [ '+', '-', 'x', '÷']
let arr   = []
//  this function determines what was pressed.

$('button').on('click', function () {
let  pressed = $(this).text();


if (pressed === $('.clear').text()){
  arr = []
  $('.answer').text('cleared')
  console.log(arr)
}

else if (pressed !== $('.equals').text()) {
  $('.answer').text(pressed)
  arr.push(pressed);
  console.log(arr)
} 

else {
  console.log('equal was pressed')
  equal(arr)
}
})

function equal (arr) {
  if (arr.includes("+")) {
      arr.splice(1,1);
      console.log(arr)
      let first = arr.shift();
      let second = arr.shift();
      let firstNum = parseInt(first);
      let secondNum = parseInt(second)
      $('.answer').text( addNumbers(firstNum , secondNum))
      arr = []

    } else if(arr.includes("-")){
       arr.splice(1,1);
      console.log(arr)
      let first = arr.shift();
      let second = arr.shift();
      let firstNum = parseInt(first);
      let secondNum = parseInt(second)
      $('.answer').text( minusNumbers(firstNum , secondNum))
      arr = []
    }
    else if(arr.includes("-")){
       arr.splice(1,1);
      console.log(arr)
      let first = arr.shift();
      let second = arr.shift();
      let firstNum = parseInt(first);
      let secondNum = parseInt(second)
      $('.answer').text( multiplyNumbers(firstNum , secondNum))
      arr = []
    }
    else if(arr.includes("-")){
       arr.splice(1,1);
      console.log(arr)
      let first = arr.shift();
      let second = arr.shift();
      let firstNum = parseInt(first);
      let secondNum = parseInt(second)
      $('.answer').text( divideNumbers(firstNum , secondNum))
      arr = []
    }
}

function addNumbers( a, b) {
  return a + b
}
function minusNumbers( a, b) {
  return a - b
}
function multiplyNumbers( a, b) {
  return a * b
}
function divideNumbers( a, b) {
  return a / b
}
