function button(self) {
  var full = document.querySelector('body');
  var h1Element = document.querySelector('h1');
  var leftTop = document.querySelector('.leftTop',);
  var leftBottom = document.querySelector('.leftBottom',);
  var i = 0;
  var alist = document.querySelectorAll('a');
    if (self.value === 'Night_Mode') {
      full.style.backgroundColor='black';
      full.style.color='gray';
      self.value='Day_Mode';
      h1Element.style.borderColor='Tan';
      leftTop.style.borderColor='Tan';
      leftBottom.style.borderColor='Tan';
        while (i < alist.length) {
          alist[i].style.color='gray';
          i = i + 1;
        }
    } else {
      full.style.backgroundColor='white';
      full.style.color='black';
      self.value='Night_Mode';
      h1Element.style.borderColor='brown';
      leftTop.style.borderColor='brown';
      leftBottom.style.borderColor='brown';
        while (i < alist.length) {
          alist[i].style.color='black';
          i = i + 1;
        }
    }
}

// 3_JavaScript 에만 해당 됨 //
function study() {
  var JS_study = ['비교연산자와 블리언 // JS - Comparison operator & Boolean','조건문 // JS - Comditional Statement','배열 // JS - Array Syntax','반복문 // JS - Loop','배열과 반복문 // JS - Loop & Array'];
  var linklist = ['ex4','ex5','ex6','ex7','ex8'];
  JS_study.push('함수 // Function');
  linklist.push('ex10');

  var i = 0;
  while (i < JS_study.length) {
    document.write('<li><a href="'+linklist[i]+'.html" >'+JS_study[i]+'</a></li>');
    i = i + 1;
  }
}

function buttonStudy(self) {
  var study = document.querySelector('.JavaScript_Study');
  if (self.value==='Night_Mode') {
    study.style.borderColor='lightslategray';              study.style.borderWidth='2px';
  } else {
    study.style.borderColor='dimgray';
    study.style.borderWidth='1px';
  }
}
// 3_JavaScript 에만 해당 됨 //
