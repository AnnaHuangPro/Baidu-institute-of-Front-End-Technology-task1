function transformClass(){
    var line = document.getElementById("hr");
    line.className = "afterClick";
    setTimeout("document.getElementById(\"hr\").className='before'",2000);
}