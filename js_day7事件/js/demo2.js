if(typeof window.onload == "function"){
    var saved = null;
    saved =  window.onload;
}
window.onload = function (){
    // var inp = document.getElementsByTagName("input")[0];
    // inp.onmousedown = function (evt){
    //     // alert(arguments.length);
    //     // alert(arguments[0]);
    //     var e = evt || window.event;
    //     alert(e.button);
    // }
    if(saved)saved();
    alert("第二个");
}