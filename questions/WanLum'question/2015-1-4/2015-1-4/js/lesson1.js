	var sendBtn = document.getElementById("sendBtn");
window.onload = function () {
	
sendBtn.addEventListener("click",sendMsg,false);
};

function sendMsg() {
	var showMsg = document.getElementById("showMsg");
	var User = document.getElementById("User");
	var Msg = document.getElementById("Msg");

	showMsg.innerHTML += User.innerHTML +Msg.Value +"<br>";
	Msg.Value ='';
}