
$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var n =  $('#nav');
        if(scroll > 20) {
            n.css("background","linear-gradient(-45deg, rgba(143, 17, 238), rgba(35, 166, 213))" );
            n.css("box-shadow","0px 2px 10px rgba(0, 0, 0, 0.18)");

        }else {
            n.css("box-shadow","none" );
            n.css("background","transparent");
        }
    })
})
