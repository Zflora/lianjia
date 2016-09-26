/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-02 09:53:23
 * @version $Id$
 */
$(function(){
        $(".dz").click(function(){
            var i=0,dz_num=0,n=0;
                i=$(".dz").index($(this));
                dz_num=$(".dz_num").eq(i).html();
            if($(this).find('img').attr("src")=='images/tou-10.png'){
                $(this).find('img').attr("src","images/des-04.png");
                n=++dz_num;
                if (n<99) {
                    $(".dz_num").eq(i).html(n);
                }else{
                    $(".dz_num").eq(i).html("99+");
                };
            }else{
                $(this).find('img').attr("src","images/tou-10.png");
                n=--dz_num;
                if (n<99) {
                    $(".dz_num").eq(i).html(n);
                }else{
                    $(".dz_num").eq(i).html("99+");
                };
            };

        });
        $("#fxbtn").click(function(){
            $("#xb_on").slideDown().css("position","fixed");
            $("#da").show();
            $("body").attr("style","position:fixed")
		});
            $("#da").click(function(){
                $("#xb_on").slideUp().css("position","absolute");
                $("#da").hide();
                $("body").attr("style","position:static");
            })
            $("footer>button").click(function(){
                $("#xb_on").slideUp().css("position","absolute");
                $("#da").hide();
                $("body").attr("style","position:static");
        })
    });
