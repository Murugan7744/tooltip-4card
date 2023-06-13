var section = document.getElementById("about");

var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var div2 = document.createElement("div");
div1.appendChild(div2);
div2.classList.add("row");



var gallery = [{
    imgsrc: "images/team-1.jpg",
    head1: "TITAN",
    head2: "COLOR: Black",
    head3: "TYPE: Analog",
    head4: "PRIZE: 2,500"
},
{
    imgsrc: "images/team-2.jpg",
    head1: "Fastrack",
    head2: "COLOR: Grey",
    head3: "TYPE: Analog",
    head4: "PRIZE: 3,500"
},
{
    imgsrc: "images/team-3.jpg",
    head1: "BOAT",
    head2: "COLOR: Cherry Blossom",
    head3: "TYPE: Digital",
    head4: "PRIZE: 4,500"
},
{
    imgsrc: "images/team-4.jpg",
    head1: "LUXURY",
    head2: "COLOR: Black",
    head3: "TYPE: Digital",
    head4: "PRIZE: 8,500"
}]
var div5;
gallery.forEach(function (element) {

    var div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.classList.add("col");

    var div4 = document.createElement("div");
    div3.appendChild(div4);
    div4.classList.add("card");

    div5=document.createElement("div");
    div4.appendChild(div5);
    div5.classList.add("watches");

    var image = document.createElement("img");
    div5.appendChild(image);
    image.src = element.imgsrc;

    var detail=document.createElement("a");
    div5.appendChild(detail);
    detail.setAttribute("href","#");
    detail.innerHTML="Details";
    detail.classList.add("link");

    var div6 = document.createElement("div");
    div4.appendChild(div6);
    div6.classList.add("box");

    var prize=document.createElement("div");
    div6.appendChild(prize);
    prize.classList.add("prize");

    var icon=document.createElement("div");
    div6.appendChild(icon);
    icon.classList.add("icon");

    var heading = document.createElement("h3");
    div6.appendChild(heading);
    heading.innerHTML = element.head1;

    var para = document.createElement("p");
    div6.appendChild(para);
    para.innerHTML = element.head2;

    var para1 = document.createElement("p");
    div6.appendChild(para1);
    para1.innerHTML = element.head3;

    var para2= document.createElement("p");
    div6.appendChild(para2);
    para2.innerHTML = element.head4;
})


var buttons=document.querySelectorAll(".link");
 buttons.forEach(function(element){
                element.addEventListener("click", function(){
                    this.parentNode.nextElementSibling.classList.add("view");
                })        
    })

    var icons=document.querySelectorAll(".icon");
 icons.forEach(function(icon){
                icon.addEventListener("click", function(){
                    this.parentNode.classList.remove("view");
                })        
    })