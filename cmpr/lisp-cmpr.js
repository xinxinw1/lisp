/***** Lisp to JS Compiler Devel *****/

/* require tools >= 3.0 */
/* require prec-math */
/* require ajax */
/* require lisp-tools */
/* require lisp-parse */
/* require lisp-exec */
/* require lisp-core */
/* require lisp-compile-basic */

var but = $("cmp");
var src = $("src");
var res = $("res");

but.onclick = function (){
  res.value = "";
  
  time(function (){
    try {
      L.jcal("compprocprn", L.st(src.value));
    } catch (e){
      res.value += e;
    }
  });
};

L.djn("*out*", function (a){
  res.value += L.dat(L.str(a));
  return L.nil();
});

function settime(a){
  $("time").innerHTML = a;
}

function time(a){
  settime($.spd1(a));
}

src.value = $.get("test.lisp");

time(function (){
  L.evlf($.libdir + "/lisp-format/lisp-format.lisp");
  L.evlf($.libdir + "/lisp-compile-basic/lisp-compile-basic.lisp");
  L.jcal("compprocstr", L.st($.get("lisp-cmp-core.lisp")));
});