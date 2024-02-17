function myFunction(){
    let a = document.getElementById("ul")
    a.classList.toggle("scale")
    let b = document.querySelectorAll(".line")
    var i=0;
    for(i=0;i<b.length;i++)
    {
    b[i].classList.toggle("line2")
    }
}