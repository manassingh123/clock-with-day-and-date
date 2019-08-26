
var noon = 12;

// Getting it to show the current time on the page

 function showCurrentTime()
{
	
	var currentTime = new Date();
	  
	var hours = currentTime.getHours();
	var minutes =currentTime.getMinutes();
	var seconds =currentTime.getSeconds();
	var meridian ="AM";
	 
	if(hours >= noon)
		{
			meridian="PM";
		}
	if(hours > noon)
		{
			hours =hours-12;
		}
	if(minutes < 10)
		{
			minutes ="0" + minutes;
			
		}
	if(seconds < 10)
		{
			seconds ="0" + seconds;
		}
	
	document.getElementById('clock').innerHTML =  hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
	

};

var updateTime=function()
{
	showCurrentTime();
	
	setInterval( updateTime,1000);
};
updateTime();



/*-----days----*/

var weekDays=function(){
	

var w=new Date();
var weeks=new Array(7);

weeks[0]="Sunday";
weeks[1]="Monday";
weeks[2]="Tuesday";
weeks[3]="Wednesday";
weeks[4]="Thrusday";
weeks[5]="Friday";
weeks[6]="Saturday";

var day=weeks[w.getDay()];
document.getElementById('day').innerHTML=day;

};

var updateDay =function()
{
weekDays();
		
			setInterval(updateDay,1000);
};

updateDay();


/*-------date-------*/

var showCurrentDate=function()

{
	var a=new Date();
	var fullYear=a.getFullYear();
	var Month=a.getMonth();
	var date=a.getDay();
	
	document.getElementById('date').innerHTML= date+ " / " + Month + " / " + fullYear;
	
};
showCurrentDate();