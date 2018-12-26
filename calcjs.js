var n1="";
var n2="";
var ans="";
var sign="";
function onc()
{
	document.getElementById("num1").value='0';
}
function seven()
{
	document.getElementById("num1").value+='7';
}
function ch()
{
	document.getElementById("num1").value+='.';
}
function eight()
{
	document.getElementById("num1").value+='8';
}
function nine()
{
	document.getElementById("num1").value+='9';
}
function four()
{
	document.getElementById("num1").value+='4';
}
function five()
{
	document.getElementById("num1").value+='5';
}
function six()
{
	document.getElementById("num1").value+='6';
}
function one()
{
	document.getElementById("num1").value+='1';
}
function two()
{
	document.getElementById("num1").value+='2';
}
function three()
{
	document.getElementById("num1").value+='3';
}
function zero()
{
	document.getElementById("num1").value+='0';
}
function clr()
{
	n1="";
	n2="";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML="";
}
function add()
{
	n1=parseFloat(document.getElementById("num1").value);
	sign="+";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+"+";
}
function div()
{
	n1=parseFloat(document.getElementById("num1").value);
	sign="/";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+"/";
}
function mul()
{
	n1=parseFloat(document.getElementById("num1").value);
	sign="*";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+"*";
}
function sub()
{
	n1=parseFloat(document.getElementById("num1").value);
	sign="-";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+"-";
}
function mod()
{
	n1=parseFloat(document.getElementById("num1").value);
	sign="%";
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+"%";
}
function equ()
{
	n2=parseFloat(document.getElementById("num1").value);
	document.getElementById("num1").value="";
	document.getElementById("sm").innerHTML=n1+" "+sign+" "+n2;
	if(sign=='+')
	{
		ans=n1+n2;
	}
	if(sign=='-')
	{
		ans=n1-n2;
	}
	if(sign=='*')
	{
		ans=n1*n2;
	}
	if(sign=='/')
	{
		ans=n1/n2;
	}
	if(sign=='%')
	{
		ans=n1%n2;
	}
	document.getElementById("num1").value=ans;
	
}