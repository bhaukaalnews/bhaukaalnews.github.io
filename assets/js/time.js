function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var sum="";
    if(h>=0 && h<12)
    {sum=h + ":" + m + ":" + s+ " AM";}
    else
    {sum=h-12 + ":" + m + ":" + s+ " PM";}
    document.getElementById('txt').innerHTML =
    sum;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }