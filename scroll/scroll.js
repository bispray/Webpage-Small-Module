document.onscroll = function(){ 
    var pos = getVerticalScrollPercentage(document.body) ;
    var lazynum = document.getElementById("lazynum");
    lazynum.innerText = Math.round(pos) + "%" ;
}
 
function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode ;
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100 ;
}