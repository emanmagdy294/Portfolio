/*** loading ***/
$(document).ready(function () {

    /** color box  **/

    $("#toggleIcon").click(function () {
        let colorsBoxWidth = $("#colorsBox").innerWidth();
        if ($("#sideBar").css("left") == "0px") {
            $("#sideBar").animate({ left: `-${colorsBoxWidth}` }, 1000);
        }
        else {
            $("#sideBar").animate({ left: `0px` }, 1000);
        }
    })
    let colorsBox = $(".color-box");
    colorsBox.eq(0).css("backgroundColor", "tomato");
    colorsBox.eq(1).css("backgroundColor", "#09c");
    colorsBox.eq(2).css("backgroundColor", "black");
    colorsBox.eq(3).css("backgroundColor", "teal");
    colorsBox.eq(4).css("backgroundColor", "white");
    colorsBox.eq(5).css("backgroundColor", "lightgreen");

    colorsBox.click(function (e) {
        let myColor = $(e.target).css("backgroundColor");
        $(".change").css("backgroundColor", myColor);
    })
})

/* show images */
var imgs = Array.from(document.querySelectorAll(".member img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("colse");
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (eventInfo) {
        currentIndex = imgs.indexOf(eventInfo.target);
        var imgSrc = eventInfo.target.src
        console.log(currentIndex);
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")"
        lightBoxContainer.style.display = "flex";
    })
}

var a = document.getElementsByClassName("test")
/* nextBtn */
function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")"
}
nextBtn.addEventListener("click", nextSlide);

/* prev Btn */

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")"
}
prevBtn.addEventListener("click", prevSlide);


/* close button */
function closeSlide() {
    lightBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click", closeSlide);

/* keydown */
document.addEventListener("keydown", function (eventInfo) {
    if (eventInfo.code == 'ArrowRight') {
        nextSlide();
    }
    else if (eventInfo.code == 'ArrowLeft') {
        prevSlide();
    }
    else if (eventInfo.code == 'Escape') {
        closeSlide();
    }
})
/************/
