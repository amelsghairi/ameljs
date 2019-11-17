function bold()
{
    // document.getElementById("textarea").style.fontWeight=bold;
    document.getElementById("textarea").style.fontWeight=900;

}
function italic()
{
    document.getElementById("textarea").style.fontStyle= 'italic';
}
function underline() {
    document.getElementById("textarea").style.textDecoration='underline';
}
 function changeSize() 
 {
     document.getElementById("textarea").style.fontSize=document.getElementById("selectSize").value;
 }
 function change()
 {
     document.getElementById("textarea").style.fontFamily=document.getElementById("select").value;
 }