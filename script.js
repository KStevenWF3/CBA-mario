$(document).keydown(function(e){
    var offset = $('#player').offset();
     
    if(e.which == 37) {
     // left
     console.log(offset.left);
     $('#player').offset({ left: offset.left-4 });
     $('#player').attr("src", "./images/mario-left-1.png");
    } else if(e.which == 39) {
     //right
     $('#player').offset({ left: offset.left + 4 });
     $('#player').attr("src", "./images/mario-right-1.png");
    } else if(e.which == 38) {
     //top
     $('#player').offset({ top: offset.top - 4 });
     $('#player').attr("src", "./images/mario-back-1.png");
    } else if(e.which == 40) {
     //bottom
     $('#player').offset({ top: offset.top + 4 });
     $('#player').attr("src", "./images/mario-front-1.png");
    }
    
 })
 
//   let marginupdown = 0;
//   let marginrightleft = 0;

//   $('body').keydown(function(e){
//     if (!e.repeat)
//         if (e.key === "ArrowUp"){
//             $('#player').attr('src','./images/mario-back-1.png');
//             marginupdown = marginupdown - 50;
//             $('#player').css('margin-top', marginupdown);
//         }else if (e.key === "ArrowRight"){
//             $('#player').attr('src','./images/mario-right-1.png');
//             marginrightleft = marginrightleft + 50;
//             $('#player').css('margin-left', marginrightleft);
//         }else if (e.key === "ArrowDown"){
//             $('#player').attr('src','./images/mario-front-1.png');
//             marginupdown = marginupdown + 50;
//             $('#player').css('margin-top', marginupdown);
//         }else if (e.key === "ArrowLeft"){
//             $('#player').attr('src','./images/mario-left-1.png');
//             marginrightleft = marginrightleft - 50;
//             $('#player').css('margin-left', marginrightleft);
//         }

//     else{
//         if (e.key === "ArrowUp"){
//             $('#player').attr('src','./images/mario-back-1.png');
//             marginupdown = marginupdown - 50;
//             $('#player').css('margin-top', marginupdown);
//         }else if (e.key === "ArrowRight"){
//             $('#player').attr('src','./images/mario-right-1.png');
//             marginrightleft = marginrightleft + 50;
//             $('#player').css('margin-left', marginrightleft);
//         }else if (e.key === "ArrowDown"){
//             $('#player').attr('src','./images/mario-front-1.png');
//             marginupdown = marginupdown + 50;
//             $('#player').css('margin-top', marginupdown);
//         }else if (e.key === "ArrowLeft"){
//             $('#player').attr('src','./images/mario-left-1.png');
//             marginrightleft = marginrightleft - 50;
//             $('#player').css('margin-left', marginrightleft);
//         }
//     }
//   });