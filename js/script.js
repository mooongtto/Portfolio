$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth >= 1200){
        // fullpage 플러그인
        new fullpage('#wrap',{
            anchors: ['anchor1','anchor2','anchor3','anchor4','anchor5','anchor6'],
            scrollBar:true,
        });
    };


});