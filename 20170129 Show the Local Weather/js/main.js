$(document).ready(function () {
	//var today=new Date();
	//alert(today.getFullYear());
	//$('.today .date').append(today.getFullYear()+"/"+today.get);
	//var weather = "";
	/*
	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(data){
    	alert(data.city);
	});
	*/
	//alert(returnCitySN["cip"]);
	//alert(remote_ip_info.city);
	//var a = $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php');
	//alert(a);
	//
	$('body').click(function(){
		//$(".today input").val(remote_ip_info.city);
		//alert(remote_ip_info.city);
		/*
		$.getJSON('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json', function(data){
    		alert(data.city);
		});
		*/
		/*
		$.ajax({
			url:"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json",
			type:"GET",
			dataType:'jsonp', 
			success:function(data){
				alert(data.country);
			},
			error:function(){
				alert("失败");
			}
		});
		*/
		
	});


	//$('button').click(function(){
		/*
		$.getJSON('http://v.juhe.cn/weather/index',{
			cityname:"郑州",
			key:"2eba2e34331f5292ed645fca402f588c"
		},function(json){
			alert('a');
		}
		);
		*/
		$.ajax({
			url:"http://v.juhe.cn/weather/ip",
			type:"GET",
			data:{
				ip:"183.204.49.80",
				key:"2eba2e34331f5292ed645fca402f588c"
			},
			dataType:'JSONP', 
			success:function(data){
				$('.location span').append(data.result.today.city);
				$(".today .weather p").append(data.result.today.weather+"</br>"+data.result.today.temperature);
				$(".today .date").append(data.result.today.date_y);
				$(".today .week").append(data.result.today.week);

				//获取未来天气，将json数据转换为数组
				var future=[];
				for(var i in data.result.future){
					future.push(data.result.future[i]);
				}

				//显示未来天气
				for (var i = 0; i < 3; i++) {
					$(".future ul li:eq("+i+")").append(future[i+1].week+"</br>"+future[i+1].weather+"</br>"+future[i+1].temperature);
				}
				
			}
		});
	//});
});