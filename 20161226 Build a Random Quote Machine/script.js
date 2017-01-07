
var myColor=new Array('#ED1C24','#F15A24','#F7931E','#FBB03B','#FCEE21','#8CC63F','#009245','#0071BC','#2E3192','#5F0F8A','#8D0F82','#CF0072');
	//var oBtn=document.getElementById('btn');
var txtArray=new Array(
			'你我本无缘\n全靠我死撑',
			'我告诉你今晚星星很美丽\n你告诉她今晚星星很美丽',
			'可是我还爱着你呀\n你怎么就不爱我了',
			'你转身的一瞬\n我萧条的一生',
			'他不想公开这段关系',
			'明明在谈恋爱\n却跟单身狗一样',
			'你在哭泣\n他却安然睡去',
			'我回你是秒回\n而你回我却是一个轮回'
			);
var txtPosition=[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
var toShow=document.getElementById('toShow');
toShow.onclick=function(){
	//oP1.style.display='none';
	var oContainer=document.getElementById('container');
	var content=document.getElementById('content');
	var txt=document.getElementById('txt');
	var sina=document.getElementsByTagName('a');

	//设置html背景和文字颜色
	var randomNum=Math.floor(12*Math.random());
	oContainer.style.background=myColor[randomNum];
	txt.style.color=myColor[randomNum];
	

	//设置文本的背景颜色
	if(randomNum<6){
		content.style.background=myColor[randomNum + 6];
		sina[0].style.color=myColor[randomNum + 6];
	}
	else{
		content.style.background=myColor[randomNum - 6];
		sina[0].style.color=myColor[randomNum - 6];
	}
	//设置文本位置
	randomNum=Math.floor(8*Math.random());
	content.style.top=txtPosition[randomNum][0]*33.333+'%';
	content.style.left=txtPosition[randomNum][1]*33.333+'%';

	//设置文本内容
	randomNum=Math.floor(8*Math.random());
	txt.innerText=txtArray[randomNum];
	sina[0].setAttribute('href','http:\/\/service.weibo.com\/share\/share.php? title='+txtArray[randomNum]);
};