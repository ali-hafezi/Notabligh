// JavaScript Document
function over(e1,e2,e3,e4)
{

	document.getElementById("id"+e1).style.backgroundColor=e2;
	document.getElementById("id"+e1).style.color=e3;
	
	document.getElementById("ul"+e1).style.display=e4;
	
}

function linkover(e1,e2,e3)
{
	document.getElementById(e1).style.backgroundColor=e2;
	document.getElementById(e1).style.color=e3;

}
function pageing(e1,e2,n)
{
	
	for(var i=1;i<=n;i++)
	 document.getElementById(e1+i).style.display="none";
	 
	 document.getElementById(e1+e2).style.display="block";
	
}

function pageScroll(e) {
	var y=document.getElementById(e).offsetTop;
    	window.scroll(0,y); // horizontal and vertical scroll increments
}