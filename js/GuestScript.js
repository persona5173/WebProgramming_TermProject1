// 방명록을 작성하는 메소드
function addPost(){
  // 입력한 작성자 이름, 내용을 tr, td 의 태그를 생성하여 만들어주는 부분
  var tableRow = document.createElement("TR");
  var write = document.createElement("TD");
  var post = document.createElement("TD");
  var writeConTmp = document.getElementById("writer").value;
  var writeCon = document.createTextNode("작성자 : " +writeConTmp);
  var postTmp = document.getElementById("contents").value;
  var postCon = document.createTextNode("내용 : " +postTmp);

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
  buttonD.setAttribute("colspan","2");
  buttonD.ID="replaceButton";
  replyButton.appendChild(document.createTextNode("답글 달기"));

  //버튼 클릭시 댓글을 달기 위해 함수를 부르는 부분
  replyButton.setAttribute("onclick","reply(this)");

//만들어진 태그들을 html에 등록하는 부분
  document.getElementById("registerPost").appendChild(tableRow);
  document.getElementById("registerPost").appendChild(buttonRow);
}

//답글을 작성하는 부분
function reply(replyD){
  // prompt창을 띄워 내용을 입력받고
  var replyResult = prompt("답글 내용을 입력하세요.");
  // 버튼 부분을 대체하면서 답글이 들어가도록 함.
  replyD.parentNode.innerHTML = "┗ 답글 : " + replyResult;

}
