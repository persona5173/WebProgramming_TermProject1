// Modal창을 여는 함수
function openModal() {
    document.getElementById('myModal').style.display = "block";
}
// modal창을 닫는 함수
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// 현재 image의 위치를 기억 할 수 있도록 하는 함수
var modalSlideIndex;

// image를 앞 뒤로 움직이는 함수
function plusSlides(n) {
    showSlides(modalSlideIndex += n);
}

// 선택한 이미지를 찾는 함수
function currentSlide(n) {
    var current = Array.prototype.slice.call(document.getElementById('myGallery').children).indexOf(n.parentElement);
    showSlides(modalSlideIndex = current);
}

// modal창의 slide가 보이도록 하는 함수
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modalSlide");

    // 마지막에서 처음으로 처음에서 마지막으로 가게하는 부분
    if (n >= slides.length) {
        modalSlideIndex = 0;
        n = 0;
    } else if (n < 0) {
        modalSlideIndex = slides.length - 1;
        n = slides.length - 1;
    }

    // 모든 이미지를 보이지 않게
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //선택된 이미지만 보이게
    slides[modalSlideIndex].style.display = "block";
}

// 해당하는 이미지를 지우는 함수
function deleteImage(n) {
    var parent = n.parentNode;
    var galleryChildren = document.getElementById('myGallery').children;
    var modalChildren = document.getElementById("modal-content").children;

    for (var i = 0; i < galleryChildren.length; i++) {
        if (galleryChildren[i].id == parent.id) {
            document.getElementById('myGallery').removeChild(galleryChildren[i]);
            document.getElementById('modal-content').removeChild(modalChildren[i]);
        }
    }
}

// localStorage에 저장하는 함수
function ImagelocalStorage(caller) {
    var storeImage = caller.parentElement.id;
    localStorage.setItem(storeImage, storeImage);

}

// localsotrage에 들어간 이미지를 지우는 함수
function onloadDelete() {
    var saved;
    var galleryChildren = document.getElementById('myGallery').children;
    var modalChildren = document.getElementById("modal-content").children;

    for (var j = 0; j < galleryList.length; j++) {
        saved = localStorage.getItem(galleryList[j]);
        if (saved != null) {
            for (var i = 0; i < galleryChildren.length; i++) {
                if (galleryChildren[i].id == saved) {
                    document.getElementById('myGallery').removeChild(galleryChildren[i]);
                    document.getElementById('modal-content').removeChild(modalChildren[i]);
                }
            }
        }
    }
}
