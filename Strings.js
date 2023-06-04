function strings()
{
    var string1 = document.getElementById("Guitar").value;
    var string2 = document.getElementById("Bass").value;
    alert(string1);
    alert(string2);
    //concatenate a string
    var str3 = string1 + string2;
    
    var rev = str3;
    var splitString = str3.split("");
    alert(splitString);
    var reverseArray = splitString.reverse();
    alert(rev);
    var joinArray = reverseArray.join("");
    alert(joinArray);

    if (joinArray == str3)
    {
        alert("palindrome achieved");
    }
    var repJC = str3.replace(/kenyatta/i, "emanuel")
    alert(repJC)
}
