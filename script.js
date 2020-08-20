var rate=5,value=0,pre=0; //rate比率 value滾輪值
var level=150; //滑鼠滾輪換頁面邊界值
var max=level*6;
var now=".slide_first";
var limit=0,lag=0,time=0;
function slide_fade(a,time,mset){
	if(a==".slide_first"){
		blank(time+20);
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){$(a).fadeIn(time);},10);
		setTimeout(function(){
			
		},time+10);
	}
	else if(a==".slide_second"){
		blank(time+20);
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){$(a).fadeIn(time);},10);
		setTimeout(function(){
			
		},time+10);
	}
	else if(a==".slide_third"){
		blank(time+20);
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){$(a).fadeIn(time);},10);
		setTimeout(function(){
			
		},time+10);
	}
	else if(a==".slide_fourth"){
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){
			$(a).fadeIn(time);
			$("#d2").fadeIn(time);
			if(value<mset){
				$("#d3").fadeIn(time);
				$("#d4").fadeIn(time);
			}
			else{
				$("#d3").fadeOut(time);
				$("#d4").fadeOut(time);
			}
		},10);
		setTimeout(function(){
			$("#d3").fadeIn(2000);
			$("#d4").fadeOut(2000);
		},time+10);
	}
	else if(a==".slide_fifth"){
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){
			$(a).fadeIn(time);
			if(value<mset){
				$("#d4").fadeOut(time);
				$("#d2").fadeIn(time);
				$("#d3").fadeIn(time);
			}
			else{
				$("#d2").fadeOut(time);
				$("#d3").fadeOut(time);
			}
		},10);
		setTimeout(function(){
			$("#d2").fadeIn(2000);
			$("#d3").fadeOut(2000);
		},time+10);
	}
	else if(a==".slide_sixth"){
	setTimeout(function(){
		if(now==a){
			$(now).fadeOut(time/2);
			$(now).fadeIn(time);
		}
		else{
			$(now).fadeOut(time);
		}
		now=a;
	},time+10);
		setTimeout(function(){
			$(a).fadeIn(time);
			$("#d1").fadeIn(time);
			$("#d2").fadeIn(time);
			$("#d3").fadeOut(time);
			$("#d4").fadeOut(time);
		},10);
		setTimeout(function(){
			$("#d2").fadeOut(2000);
		},time+10);
	}
	setTimeout(function(){pre=mset;value=mset;},time+5);
}
//init
var totaltime=4810; //執行總時間
var winW,winH;
var timeline=10;
winW=window.screen.width;
winH=window.screen.height;
setTimeout(function(){
	if(navigator.userAgent.indexOf("Mac",0)!=-1||navigator.userAgent.indexOf("mac",0)!=-1){
		$(".X").css("top","37.5vh");
		$(".X").css("height","12.5vh");
		$(".X").css("line-height","25vh");
		$("._X").css("top","37.5vh");
		$("._X").css("height","12.5vh");
		$("._X").css("line-height","25vh");
	}
	else{
		$(".X").css("height","10vh");
		$(".X").css("transform","translate(0,40vh)");
		$("._X").css("transform","translate(0,40vh)");
	}
},0);
setTimeout(function(){$(".label").css("display","none");},10);
setTimeout(function(){
	$(".X").fadeIn();
	$("._X").fadeIn();
	totaltime-=1200;
},1200);
timeline+=1200;
setTimeout(function(){
	$(".label").css("display","block");
},timeline);
setTimeout(function(){
	$(".X").fadeOut(300);
	setTimeout(function(){
		$("._X").css("color","rgb(70,91,141)");
		$("#upword").css("color","rgb(70,91,141)");
		$("#downword").css("color","rgb(70,91,141)");
	},200)
	totaltime-=500;
},500+timeline);
timeline+=500;
value=0;
//lebal動畫
setTimeout(function(){
	$("#home").css("animation-name","togetin");
	$("#home").css("left","0vw");
	$("#menu1").css("animation-name","togetin1");
	$("#menu1").css("right","42vw");
	$("#menu2").css("animation-name","togetin2");
	$("#menu2").css("right","34vw");
	$("#menu3").css("animation-name","togetin3");
	$("#menu3").css("right","26vw");
	$("#menu4").css("animation-name","togetin4");
	$("#menu4").css("right","18vw");
	$("#menu5").css("animation-name","togetin5");
	$("#menu5").css("right","9vw");
	$("#menu").css("animation-name","togetin6");
	$("#menu").css("right","0vw");
	totaltime-=500;
},500+timeline);
timeline+=500;
setTimeout(function () {
		$("#fukc").fadeOut(500);
		totaltime-=2500;
},2000+timeline);
timeline+=2500;
setTimeout(function(){
	$(".slide_first").fadeIn(500);
	totaltime-=100;
},timeline);
timeline+=100;
totaltime=timeline;
	//滑鼠
function abs(x){
	return (x>0?(x):(x*(-1)));
}
function handle(delta) {
	if(Math.floor(delta)==delta){
		if(delta>0) delta=8;
		else delta=-8;
		rate=1;
	}
	else if(abs(delta)<1){
		rate=3.1;
	}
	else{
		rate=1;
	}
	pre=value;
	value+=delta*rate;
	if(value>max){
		value=max;
		if(!limit){
		$(".slide_sixth").fadeOut(300);
		setTimeout(function(){$(".slide_sixth").fadeIn(300)},10);
		limit=1;
		restore();
		}
	}
	if(value<0){
		value=0;
		if(!limit){
		$(".slide_first").fadeOut(300);
		setTimeout(function(){$(".slide_first").fadeIn(300)},10);
		limit=1;
		restore();
		}
	}
	if(Math.floor(pre/level)!=Math.floor(value/level)){
		if(value<level) slide_fade('.slide_first',500,value);
		else if(value<level*2) slide_fade('.slide_second',500,value);
		else if(value<level*3) slide_fade('.slide_third',500,value);
		else if(value<level*4) slide_fade('.slide_fourth',500,value);
		else if(value<level*5) slide_fade('.slide_fifth',500,value);
		else slide_fade('.slide_sixth',500,value);
	} 
}
function wheel(event){
	var delta = 0;
	if (!event) event = window.event;
	if (event.wheelDelta) {
	    delta = event.wheelDelta/120; 
	    if (window.opera) delta = -delta;
	} else if (event.detail) {
	    delta = -event.detail/3*3;
	}
	if (delta)
	handle((-1)*delta);
}
setTimeout(function(){
	if (window.addEventListener)
		window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
},totaltime);
function restore(){
   	setTimeout(function(){limit=0},1500);
}
function blank(t){
	setTimeout(function(){
		$("#d1").css("display","none");
		$("#d2").css("display","none");
		$("#d3").css("display","none");
		$("#d4").css("display","none");
		$("#d5").css("display","none");
		$("#d6").css("display","none");
	},t);
}