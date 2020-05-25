var myDate = new Date();
var join="";
var i=0;
for(i=4;i<15;i++)
{
	join+=myDate.toString()[i];
}
document.getElementById("demo").innerHTML = join;
/*
function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}*/