//menu
$(document).ready(function(){
   $(".arr_l").click(function(){
      $(".dis").slideToggle();

   })
   $("#cc").click(function(){
      $(".dis").slideToggle();
   })


   $("#fujian").click(function(){
        $(".ext_fq_option").slideToggle();
        $(".ui-mask").slideToggle();
   })
   var $quxi=$(".ext_fq_option").find("div");
   $quxi.click(function(){
        $(".ext_fq_option").slideToggle();
        $(".ui-mask").slideToggle();
   })


   $("#leixing").click(function(){
        $(".ext_fq_leixing").slideToggle();
   })
   var $quxi=$(".ext_fq_leixing").children("div").eq(1);
   $quxi.click(function(){
        $(".ext_fq_leixing").slideToggle();
   })

   $("#workday").click(function(){
        $("#workday1").slideToggle();
   })
   $("#workday1quxiao").click(function(){
        $("#workday1").css("display","none");
        $("#piancha1").css("display","none");
        $("#cd1").css("display","none");
   })

   $("#piancha").click(function(){
        $("#piancha1").slideToggle();
   })
   $("#piancha1quxiao").click(function(){
        $("#piancha1").css("display","none");
        $("#workday1").css("display","none");
        $("#cd1").css("display","none");
   })
   
   
   
   
   $("#cd").click(function(){
        $("#cd1").slideToggle();
   })
   $("#cdquxiao").click(function(){
        $("#cd1").css("display","none");
        $("#workday1").css("display","none");
        $("#piancha1").css("display","none");
   })
   
   
   
   $("#zt").click(function(){
        $("#cd1").slideToggle();
   })
   $("#cdquxiao").click(function(){
        $("#cd1").css("display","none");
        $("#workday1").css("display","none");
        $("#piancha1").css("display","none");
   })
   
   
   var $tasktime=$(".task_time").find("ul").children("li");
   var i=0;
   $tasktime.click(function(){
	   i=$tasktime.index($(this));
	   $tasktime.eq(i).css("background","#ccc").siblings().css("background","#fff");
	   })

   $("#shangji").click(function(){
      $(".add_yc").slideToggle();
      /*$("#shangji").find(".sign_list").children("img").css("transform","rotate(90deg)");*/
	  var new_add=document.getElementById("new_add");
	  var n=new_add.src;
	  if(n='images/but_r@3x.png'){
              $(new_add).setAttribute('src','images/but_l1@3x.png');
          }else{
			  
			  }
   })



  var d = new Date();
  var h = d.getHours(); 
  var m = d.getMinutes(); 
  var s = d.getSeconds();
   $("#shang").click(function(){
    // $(this).addClass("shang");
      
          if(h<9){
              $(this).addClass("shang");
          }else if (h>9) {
              $(this).addClass("cd");
          } else if(h=9){
              if (m=0) {
                  if (s=0) {
                    $(this).addClass("shang");
                  } else{
                    $(this).addClass("cd");
                  };
              } else{
                $(this).addClass("cd");
              };
          };
        })


          $("#xia").click(function(){
            $("#xia").addClass("xia");

                 if(h<18){
                  $("#xia").addClass("zt");
                 }else{
                  $("#xia").addClass("xia");
                 }


   })
   
   
   
   $(".width_24").click(function(){
	   		$(this).children("a").addClass("xuanting").siblings().removeClass("xuanting");
	   })

})