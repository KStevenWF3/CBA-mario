  let marginupdown = 0;
  let marginrightleft = 0;

  $('body').keydown(function(e){
    if (!e.repeat)
        if (e.key === "ArrowUp"){
            $('#player').attr('src','./images/mario-back-1.png');
            marginupdown = marginupdown - 50;
            $('#player').css('margin-top', marginupdown);
        }else if (e.key === "ArrowRight"){
            $('#player').attr('src','./images/mario-right-1.png');
            marginrightleft = marginrightleft + 50;
            $('#player').css('margin-left', marginrightleft);
        }else if (e.key === "ArrowDown"){
            $('#player').attr('src','./images/mario-front-1.png');
            marginupdown = marginupdown + 50;
            $('#player').css('margin-top', marginupdown);
        }else if (e.key === "ArrowLeft"){
            $('#player').attr('src','./images/mario-left-1.png');
            marginrightleft = marginrightleft - 50;
            $('#player').css('margin-left', marginrightleft);
        }

    else{
        if (e.key === "ArrowUp"){
            $('#player').attr('src','./images/mario-back-1.png');
            marginupdown = marginupdown - 50;
            $('#player').css('margin-top', marginupdown);
        }else if (e.key === "ArrowRight"){
            $('#player').attr('src','./images/mario-right-1.png');
            marginrightleft = marginrightleft + 50;
            $('#player').css('margin-left', marginrightleft);
        }else if (e.key === "ArrowDown"){
            $('#player').attr('src','./images/mario-front-1.png');
            marginupdown = marginupdown + 50;
            $('#player').css('margin-top', marginupdown);
        }else if (e.key === "ArrowLeft"){
            $('#player').attr('src','./images/mario-left-1.png');
            marginrightleft = marginrightleft - 50;
            $('#player').css('margin-left', marginrightleft);
        }
    }
  });