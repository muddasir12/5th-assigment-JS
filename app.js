////////CHAPTER 31-34///////

var now = new Date();
document.write(now);

alert("Current Month : November")

var days =  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var nowDay = new Date().getDay()
document.write("<br>" + "TODAY IS :" + days[nowDay])

var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("<br>" + "It's PM")
}else if(c === "13:"){
    document.write("<br>" +"It's PM")
}else if(c === "14:"){
    document.write("<br>" +"It's PM")
}else if(c === "15:"){
    document.write("<br>" +"It's PM")
}else if(c === "16:"){
    document.write("<br>" +"It's PM")
}else if(c === "17:"){
    document.write("<br>" +"It's PM")
}else if(c === "18:"){
    document.write("<br>" +"It's PM")
}else if(c === "19:"){
    document.write("<br>" +"It's PM")
}else if(c === "20:"){
    document.write("<br>" +"It's PM")
}else if(c === "21:"){
    document.write("<br>" +"It's PM")
}else if(c === "22:"){
    document.write("<br>" +"It's PM")
}else if(c === "23:"){
    document.write("<br>" +"It's PM")
}else if(c === "24:"){
    document.write("<br>" +"It's AM")
}else if(c === "01:"){
    document.write("<br>" +"It's AM")
}else if(c === "02:"){
    document.write("<br>" +"It's AM")
}else if(c === "03:"){
    document.write("<br>" +"It's AM")
}else if(c === "04:"){
    document.write("<br>" +"It's AM")
}else if(c === "05:"){
    document.write("<br>" +"It's AM")
}else if(c === "06:"){
    document.write("<br>" +"It's AM")
}else if(c === "07:"){
    document.write("<br>" +"It's AM")
}else if(c === "08:"){
    document.write("<br>" +"It's AM")
}else if(c === "09:"){
    document.write("<br>" +"It's AM")
}else if(c === "10:"){
    document.write("<br>" +"It's AM")
}else if(c === "11:"){
    document.write("<br>" +"It's AM")
}


var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}else if(c === "Mon"){
    document.write()
}else if(c === "Tue"){
    document.write()
}else if(c === "Wed"){
    document.write()
}else if(c === "Thr"){
    document.write()
}else if(c === "Fri"){
    document.write()
}

var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("<br>" + "Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));