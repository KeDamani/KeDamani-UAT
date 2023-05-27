function Do()
{
    
    var currTime = 0
var i = 1;
do
{


        setTimeout(function () {
            document.getElementById("Timer").innerHTML = "time to go = " + currTime
            currTime = currTime + 1;
        }, 1000 * i);
        i += 1;

} while (i <12);
}

function While()
{
    
    var currTime = 0
var i = 1;
While
{


        setTimeout(function () {
            document.getElementById("Timer").innerHTML = "almost there = " + currTime
            currTime = currTime + 1;
        }, 1000 * i);
        i += 1;

}(i <12);
}

function For()
{
    
    var currTime = 0
var i = 1;
for (i = 1; i < 12; i++)
{


        setTimeout(function () {
            document.getElementById("Timer").innerHTML = "throughout = " + currTime
            currTime = currTime + 1;
        }, 1000 * i);

}(i <12);
}