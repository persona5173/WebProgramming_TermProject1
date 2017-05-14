// 메뉴에서 선택시 해당하는 Menu로 이동하는 함수
function MoveToMenu(Menu) {
    location.href = "#" + Menu;
}

// 클릭시 Dropdown이 나타나는 함수
function Dropdown_visible() {
    var div = document.getElementById("Dropdown-list");
    var pos = div.offsetHeight;

    // 만약 Dropdown-list가 show상태가 아니라면
    if ("Dropdown-list" == document.getElementsByClassName("Dropdown-list")[0].className) {
        var animation = setInterval(expand, 1);
        // height가 증가하면서 애니메이션처럼 보이게 함
        function expand() {
            if (pos > 120) {
                clearInterval(animation);
            } else {
                pos += 4;
                div.style.height = pos + "px";
            }
        }
        // dropdown의 이미지를 x로 바꿈
        document.getElementById("dropdown").src = "./img/DropDown/DropDown_x_icon.png"
        // Dropdown-list를 show상태로
        document.getElementById("Dropdown-list").classList.toggle("show");

    } else {
        //다시 원래대로 돌아가는 부분
        var animation = setInterval(collapse, 1);

        function collapse() {
            if (pos < 0) {
                clearInterval(animation);
                // 0까지 돌아왔다면 show상태에서 다시 돌아옴
                document.getElementById("Dropdown-list").classList.toggle("show");

            } else {
                pos -= 4;
                div.style.height = pos + "px";
            }
        }
        // 아이콘을 menu아이콘으로 바꿈
        document.getElementById("dropdown").src = "./img/DropDown/DropDown_menu_icon.png"

    }
}
