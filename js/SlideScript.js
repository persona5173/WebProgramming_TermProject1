var galleryList = ['column1', 'column2', 'column3', 'column4'];

// 창이 처음 켜질 때 slide타이머를 실행하고, 이미지 슬라이드의 처음 부분이 실행되게, 실행하자마나 localStorage의 이미지를 삭제
window.onload = function() {
    slider.on();
    showDivs(1);
    onloadDelete();
}

// 타이머 구현 부분
var slider = {
    on: function() {
        this.timer = setTimeout(function() {
            plusDivs(1);
        }, 5000);
    },
    off: function() {
        clearTimeout(this.timer);
    }
}

var slideIndex = 1;
showDivs(slideIndex);

// 이미지 앞 뒤 움직임
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// 선택한 이미지
function currentDiv(n) {
    showDivs(slideIndex = n);
}

// 이미지를 보여주는 부분
function showDivs(n) {
    // 처음 보여줄 때 타이머를 off
    slider.off();
    var i;
    var slideShow = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("photoButton");

		// 마지막에서 처음으로 처음에서 마지막으로 가게하는 부분
    if (n > slideShow.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideShow.length
    };
    // 모든 이미지를 off
    for (i = 0; i < slideShow.length; i++) {
        slideShow[i].style.display = "none";
    }
    // 모든 dot들을 off
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" photoButton_black", "");
    }
    // 현재 이미지만 block으로 보이게
    slideShow[slideIndex - 1].style = "display:block";
    // 선택된 dot만 색을 바꿈
    dots[slideIndex - 1].className += " photoButton_black";
    // 이동이 끝났다면 타이머 다시 on
    slider.on();
}
