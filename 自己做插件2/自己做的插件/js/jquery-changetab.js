$.fn.changeTab=function(index){
        $(this).find("ul:eq("+index+")").show().siblings("ul").hide();
      }