//判断访问源
function IsPC(){
	var system ={};  
	var p = navigator.platform;       
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;  
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
	if(system.win||system.mac||system.xll){
	    document.write("作者比较懒，没有做样式适配，请在手机端打开...");
	}
}
function imagePreview(input){
	var files = input.files;
	var preview =document.getElementById("yg_multi");
	//判断已经存在的图片个数
	var l=$(".choosedImg div").length;
	if(files.length+l>9){
		$("textarea").val("您选的图片大于9张，请重新选择");
		return false;
	}
	for (var i = 0; i < files.length; i++) {
		//预览新添加的图片
	    var file = files[i];
		var div=document.createElement("div");
		div.className="choosedImg";
		var div2=document.createElement("div");
		var text=document.createTextNode("X");
	    var img = document.createElement("img");
        img.file = file;
		div.appendChild(img);
		div2.appendChild(text);
		div.appendChild(div2);
        preview.insertBefore(div,preview.childNodes[0]);
        var reader = new FileReader();
        reader.onload = (function(aImg) {
          return function(e) {
		  	dele(e.target.result);
            aImg.src = e.target.result;
          };
        })(img);
        reader.readAsDataURL(file);
    }
}
//图片去重
function dele(ob){
	var obj=$(".choosedImg img");
	var yl=obj.length;
	for(var i=0;i<yl;i++){
		var isrc=obj.eq(i).attr("src");
		if(ob==isrc){
			$(".choosedImg img").eq(i).parent().remove();
		}
	}
}
window.onload=function(){
	IsPC();	
	//删除图片
	$("#yg_multi").on("click",".choosedImg div",function(){
		$(this).parent().remove();
	})
}




		
		
		