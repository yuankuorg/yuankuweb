function tab() {
	var titleLi = document.getElementById("title").getElementsByTagName("a");
	var contentUl = document.getElementById("schoolContent").getElementsByClassName("cont");

	var num = 0;
	contentUl[0].style.display = "block";
	titleLi[0].style.backgroundColor = "#f60";
	titleLi[0].style.color = "#fff";
	for (var i = 0; i < titleLi.length; i++) {
		titleLi[i].hello = i;
		titleLi[i].onclick = function() {
			change(this.hello);
		}
	}

	function autoplay() { //這是一个定时器的方法
		num++;
		if (num >= titleLi.length) {
			num = 0;
		}
		change(num);
	}

	function change(hello) {
		for (var j = 0; j < titleLi.length; j++) {
			titleLi[j].style.background = "#fff";
			titleLi[j].style.color = "#000";
			contentUl[j].style.display = "";
		}
		titleLi[hello].style.background = "#f60";
		titleLi[hello].style.color = "#fff";
		contentUl[hello].style.display = "block";
		num = hello;
	}
}

function osTop() {
	var obtn = document.getElementById('btn');
	//获取页面可视区的高度
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	window.onscroll = function() {
		//获取滚动条距离顶部的高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (osTop >= clientHeight) {
			//显示按钮
			obtn.style.display = "block";
		} else {
			//隐藏按钮
			obtn.style.display = "none";
		}
		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	}
	obtn.onclick = function() {
		//设置定时器
		timer = setInterval(function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			console.log(osTop - ispeed);
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30);
	}
}