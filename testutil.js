var Body = {        //객체
    setColor:function (col)   {
        document.querySelector('body').style.color = col;
    } ,
    setBgColor:function (col)   {
        document.querySelector('body').style.backgroundColor = col;
    }   
}

var Links = {
    setColor:function(color){
        $('a').css('color', color);  //jQuery
    }
}