
var backColor=new Array('#ED1C24','#F15A24','#F7931E','#FBB03B','#FCEE21','#8CC63F','#009245','#0071BC','#2E3192','#5F0F8A','#8D0F82','#CF0072');
	//var oBtn=document.getElementById('btn');
var textArray=new Array(
			'你我本无缘\n全靠我死撑',
			'我告诉你今晚星星很美丽\n你告诉她今晚星星很美丽',
			'可是我还爱着你呀\n你怎么就不爱我了',
			'你转身的一瞬\n我萧条的一生',
			'他不想公开这段关系',
			'明明在谈恋爱\n却跟单身狗一样',
			'你在哭泣\n他却安然睡去',
			'我回你是秒回\n而你回我却是一个轮回'
			);
var textPosition=[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
function toColor(){
		//oP1.style.display='none';
		var oContainer=document.getElementById('container');
		var textBox=document.getElementById('textBox');
		var text=document.getElementById('text');
		//设置html背景和文字颜色
		var randomNum=Math.floor(12*Math.random());
		oContainer.style.background=backColor[randomNum];
		text.style.color=backColor[randomNum];
		//设置文本的背景颜色
		if(randomNum<6){
			textBox.style.background=backColor[randomNum+6];
		}
		else{
			textBox.style.background=backColor[randomNum-6];
		}
		//设置文本位置
		randomNum=Math.floor(8*Math.random());
		textBox.style.top=textPosition[randomNum][0]*33.333+'%';
		textBox.style.left=textPosition[randomNum][1]*33.333+'%';
		//设置文本内容
		randomNum=Math.floor(8*Math.random());
		text.innerText=textArray[randomNum];
	}