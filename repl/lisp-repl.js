/***** Lisp REPL Devel *****/

/* require tools >= 3.0 */
/* require ajax */
/* require prec-math */
/* require lisp-tools */
/* require lisp-parse */
/* require lisp-exec */
/* require lisp-core */
/* require lisp-compile-basic */

var udfp = $.udfp;
var dmp = $.dmp;
var len = $.len;
var inp = $.inp;
var psh = $.psh;
var rpl = $.rpl;
var satt = $.satt;
var bot = $.bot;
var atth = $.atth;
var cmb = $.cmb;
var sefn = $.sefn;

var frm = $("form");
var it = $("input");
var res = $("results");
var pg = $("page");

var his = $.his(it);

function run(a){
  his.add(a);
  out("JS-LISP> " + a);
  rst();
  
  try {
    out(L.evls(a));
  } catch (e){
    // taken care of by efn(e)
    out($.str(e));
  }
}

function ou(a){
  atth(esc(a), res);
  bot(pg);
}

function out(a){
  atth(esc(a) + "<br>", res);
  bot(pg);
}

function esc(a){
  return rpl(["<", ">", "\n"],
             ["&lt", "&gt", "<br>"], a);
}

function rst(){
  it.value = "";
}

frm.onsubmit = function (){
  run(it.value);
  return false;
};

satt(frm, "action",
  "javascript:" +
    "out('JS-LISP> ' + it.value);" +
    "rst();" +
    "out('Error: unknown (timeout?)'); ");

L.djn("*out*", function (a){
  ou(L.dat(L.str(a)));
  return L.nil();
});

//sefn(cmb(out, dmp));

L.evlf($.libdir + "/lisp-format/lisp-format.lisp");
L.evlf($.libdir + "/lisp-compile-basic/lisp-compile-basic.lisp");

//L.exe(get("/codes/apps/lisp-repl/devel7/lisp-test.lisp"));

