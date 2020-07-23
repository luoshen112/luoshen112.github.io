//屏蔽右键相关
var jsArgument = document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1].src;	//获取传递的参数
rightButton = jsArgument.substr(jsArgument.indexOf("rightButton=") + "rightButton=".length, 1);
if (rightButton == "1")
{
	document.oncontextmenu = function(e){return false;}
	document.onselectstart = function(e){return false;}
	if (navigator.userAgent.indexOf("Firefox") > 0)
	{
		document.writeln("<style>body {-moz-user-select: none;}</style>");
	}
}

// 手机站自动跳转
mobilejump = jsArgument.substr(jsArgument.indexOf("mobilejump=") + "mobilejump=".length, 1);
if (mobilejump == "1"){
	var url = window.location.href;
	if(url.slice(url.lastIndexOf("/")+1)=="index.php"){
		url = url.slice(0,url.lastIndexOf("/")+1);
	}
	var isAndroid = navigator.appVersion.toLowerCase().indexOf("android") >= 0,
	isIphone = navigator.appVersion.toLowerCase().indexOf("iphone") >= 0;
	if (isAndroid || isIphone){
	    window.location.href = url +"m";
	};
}

//设为首页
function setHomePage()
{
	if(document.all)
	{
		var obj = document.links(0);
		if (obj)
		{
			obj.style.behavior = 'url(#default#homepage)';
			obj.setHomePage(window.location.href);
		}
  	}
	else
	{
		if(window.netscape)
		{
			try
			{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}
			catch (e)
			{
				window.alert("此操作被浏览器拒绝，请通过浏览器菜单完成此操作！");
			}
		}
   	}
}

//加入收藏
function addFavorite()
{
	var url		= document.location.href;
	var title	= document.title;
	if (document.all)
	{
		window.external.addFavorite(url,title);
	}
	else if (window.sidebar)
	{
		window.sidebar.addPanel(title, url,"");
	}
}

//左右等高
function equalHeight(){
	var a = $(".sidebar").height();
	var b = $(".main").height();
	if ( a >= b){
		$(".main").height(a);
	}
	else if ( a <= b){
		$(".sidebar").height(b);
	}
}

//纵向菜单
function Nav(){
	var mst;
	$(".nav li a").filter(".current").parent("li").addClass("cur").siblings().removeClass("cur");
	$(".nav li").hover(function(){
		var _this = $(this);
		$(this).find("a:eq(0)").addClass("current");
		mst = setTimeout(function(){
			_this.find(".subNav").slideDown(300);
			mst = null;
		},300)
	},function(){
		if(mst!=null) {clearTimeout(mst)};
		$(this).not(".cur").find("a:eq(0)").removeClass("current");
		$(this).find(".subNav").slideUp(300);
	})
}