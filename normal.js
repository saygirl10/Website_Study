var Body = {
  setColorBackground : function(color) {
    document.querySelector('body').style.backgroundColor=color;
  },
  setColorText : function(color){
    document.querySelector('body').style.color=color;
  }
};

var BorderColor = {
  setH1 : function(color){
     document.querySelector('h1').style.borderColor=color;
  },
  setLeftVertical : function(color){
    document.querySelector('.leftVertical').style.borderColor=color;
  },
  setLeftVertical2 : function(color){
    document.querySelector('.leftVertical2').style.borderColor=color;
  }
};

var Link = {
  setAlink : function(color){
    var i = 0;
    var alist = document.querySelectorAll('a');
      while (i < alist.length) {
        alist[i].style.color=color;
        i = i + 1;
      }
  }
};

function button(self) {
    if (self.value === 'Night_Mode') {
      Body.setColorBackground('black');
      Body.setColorText('gray');
      self.value='Day_Mode';
      BorderColor.setH1('Tan');
      BorderColor.setLeftVertical('Tan');
      BorderColor.setLeftVertical2('Tan');
      Link.setAlink('gray');
    } else {
      Body.setColorBackground('white');
      Body.setColorText('black');
      self.value='Night_Mode';
      BorderColor.setH1('brown');
      BorderColor.setLeftVertical('brown');
      BorderColor.setLeftVertical2('brown');
      Link.setAlink('black');
    }
}

// 3_JavaScript 에만 해당 됨 //

var studyObject = {
  ex4 : "비교연산자와 블리언 // JS - Comparison operator & Boolean",
  ex5 : "조건문 // JS - Comditional Statement",
  ex6 : "배열 // JS - Array Syntax",
  ex7 : "반복문 // JS - Loop",
  ex8 : "배열과 반복문 // JS - Loop & Array"
};
studyObject.ex10 = "함수 // Function"
studyObject.ex11 = "객체 // Object"

/*
function study() {
  var JS_study = [
    '비교연산자와 블리언 // JS - Comparison operator & Boolean',
    '조건문 // JS - Comditional Statement',
    '배열 // JS - Array Syntax',
    '반복문 // JS - Loop','배열과 반복문 // JS - Loop & Array'
  ];
  var linklist = ['ex4','ex5','ex6','ex7','ex8'];
  JS_study.push('함수 // Function');
  linklist.push('ex10');
  JS_study.push('객체 // Object');
  linklist.push('ex11');

  var i = 0;
  while (i < JS_study.length) {
    document.write('<li><a href="'+linklist[i]+'.html" >'+JS_study[i]+'</a></li>');
    i = i + 1;
  }
}
*/

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
