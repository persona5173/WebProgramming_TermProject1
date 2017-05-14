// 방명록을 작성하는 메소드
function addPost() {
    // 입력한 작성자 이름, 내용을 tr, td 의 태그를 생성하여 만들어주는 부분
    var tableRow = document.createElement("TR");
    var write = document.createElement("TD");
    var post = document.createElement("TD");
    var writeConTmp = document.getElementById("writer").value;
    var writeCon = document.createTextNode("작성자 : " + writeConTmp);
    var postTmp = document.getElementById("contents").value;
    var postCon = document.createTextNode("내용 : " + postTmp);

    //생성한 것들을 어느 태그에 속하게 구현하는지를 보여주는 부분
    tableRow.appendChild(write);
    tableRow.appendChild(post);
    tableRow.ID = "replyContent"
    // tableRow.style.backgroundColor="red";

    write.appendChild(writeCon);
    post.appendChild(postCon);

    // 답글 버튼을 만들어주는 부분
    var buttonRow = document.createElement("TR");
    var buttonD = document.createElement("TD");
    var replyButton = document.createElement("button");

    // 버튼이 어느 태그에 속하는지 만들어주는 부분
    buttonRow.appendChild(buttonD);
    buttonD.appendChild(replyButton);

    // 만들어진 버튼의 행과 열을 맞춰주기 위한 부분
    buttonD.setAttribute("colspan", "2");
    buttonD.ID = "replaceButton";
    replyButton.appendChild(document.createTextNode("답글 달기"));

    //버튼 클릭시 댓글을 달기 위해 함수를 부르는 부분
    replyButton.setAttribute("onclick", "reply(this)");

    //만들어진 태그들을 html에 등록하는 부분
    document.getElementById("registerPost").appendChild(tableRow);
    document.getElementById("registerPost").appendChild(buttonRow);
}

//답글을 작성하는 부분
function reply(replyD) {
    var comment_value = prompt("답글 내용을 입력하세요.");


    // url인지 체크하는 부분
    if (comment_value.includes("www.") || comment_value.includes("http://") || comment_value.includes("https://")) {
        if (comment_value.includes("http://") || comment_value.includes("https://")) {} else {
            comment_value = "http://" + comment_value;
        }
// open graph를 이용해 해당 정보를 가져오는 부분
        $.ajax({
            type: 'POST',
            url: 'https://graph.facebook.com',
            data: {
                id: comment_value,
                scrape: true
            },
            // 잘가져왔다면
            success: function(response) {
                replyD.parentNode.appendChild(add_og(response));
                replyD.parentNode.removeChild(replyD.parentNode.childNodes[0]);

            },
            // 잘못가져온 경우
            error: function(response) {
                replyD.parentNode.innerHTML = "┗ 답글 : " + comment_value;
            }
        });
        // url이 아니라면
    } else {
        replyD.parentNode.innerHTML = "┗ 답글 : " + comment_value;
    }



}

// url에 대한 정보들을 가져와서 태그들을 넣어주는 부분
function add_og(response) {

    var link = document.createElement("a");
    link.href = response.url;
    link.target = "_blank";
    var div = document.createElement("div");
    div.className = "ogDiv";

    var left_div = document.createElement("div");
    left_div.id = "left_og_div";
    var image = document.createElement("img");
    image.src = response.image[0].url;
    left_div.appendChild(image);

    var right_div = document.createElement("div");
    right_div.id = "right_og_div";
    var title = document.createElement("h3");
    title.innerHTML = response.title;
    var description = document.createElement("p");
    description.innerHTML = response.description;
    var url = document.createElement("p");
    url.innerHTML = response.url;
    right_div.appendChild(title);
    right_div.appendChild(description);
    right_div.appendChild(url);

    div.appendChild(left_div);
    div.appendChild(right_div);
    link.appendChild(div);

    return link;
}
//       });
//     } else {
//       document.getElementsByClassName("c")[i].innerHTML = comment_value;
//     }
//   }
//   guest_index++;
// }
