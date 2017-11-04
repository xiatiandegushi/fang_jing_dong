window.onload=function(){
	var oxx=document.getElementById('xx');
	var obanner=document.getElementById('top-banner');
	var otext=document.getElementById('textt');
	oxx.onmousedown=function(){
		obanner.style.display='none';
	};
	otext.onmousedown=function(){
		otext.value='';
		otext.style.color='rgb(51, 51, 51)';
	};
}
$(function(){
				//手动控制轮播图
				$('#one li').eq(0).show();

				$('#two li').mouseover(function(){
					$(this).addClass('on').siblings().removeClass('on');
					var index=$(this).index();
					i=index;
					$('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
				})
				//自动播放
				var i=0;
				var t=setInterval(move,6000);
				//自动播放核心函数
				function move(){
					i++;
					if(i==5){
						i=0;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}
				//向右播放核心函数
				function moveL(){
					i--;
					if(i==-1){
						i=4;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}
				$('#left').click(function(){
						moveL();
				})
				$('#right').click(function(){
					move();
				})
				//鼠标移入移除
				$('#lunbo').hover(function(){
					clearInterval(t);
				},function(){
					t=setInterval(move,1500);
				})
			})
// ---------------------------------------------- 商品展示轮播图 --------------------------------------
window.onload = function(){
    var images = document.getElementsByClassName('shang_pin_display_right_1');
    var pos = 0;
    var len = images.length;
    setInterval(function(){
        images[pos].style.display = 'none';
        pos = ++pos == len ? 0 : pos;
        images[pos].style.display = 'inline';
    },1000);
};
<!---------------------------------------- 倒计时 js  ----------------------------------------->
function getRTime(){
    var EndTime= new Date('2017/10/29 12:20:00'); //截止时间
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=Math.floor(t/1000/60/60/24);
    var h=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);
    var s=Math.floor(t/1000%60);
//        document.getElementById("t_d").innerHTML = d + "天";
    document.getElementById("t_h").innerHTML = h+24;
    document.getElementById("t_m").innerHTML = m+60;
    document.getElementById("t_s").innerHTML = s+ 60;
}
setInterval(getRTime,1000);
 //*************hidein*****
 $(function(){
 	$('.hidein').click(function(){
 		$(this).css('display','none');
 		$('#jd_chaojidapai').css('display','none');
 	})
 })