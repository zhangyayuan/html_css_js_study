function animation(ele,json,fn){
    if(ele.setT){
        clearInterval(ele.setT);
    }
    ele.setT = setInterval(function(){
        var flag = true;
        for(var attr in json){
            if(attr == "opacity"){
                var current = getStyle(ele,attr)*100;
                var target = json[attr]*100;
                var tep = (target-current)/10;
                tep = tep >0 ? Math.ceil(tep) : Math.floor(tep);
                current += tep;
                ele.style[attr] = current/100;
            }else if(attr == "zIndex"){
                ele.style[attr] = current;
            }else{
                var current = parseInt(getStyle(ele,attr));
                var target = json[attr];
                var tep = (target-current)/10;
                tep = tep >0 ? Math.ceil(tep) : Math.floor(tep);
                current += tep;
                ele.style[attr] = current +"px";
            }
            if(target != current){
               flag =  false;
            }
        }
        if(flag){
            clearInterval(ele.setT);
            if(fn){
                fn();
            }
        }
       // console.log("目标位置"+target + "当前位置" + current + "每一步" + tep);
    },10)
}
function getStyle(ele,attr){
  return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : window.currentStyle[attr];
}