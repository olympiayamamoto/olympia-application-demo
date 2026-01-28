function login() {
  const id = document.getElementById("userId").value;
  const pw = document.getElementById("password").value;

  if (id === "yamamoto" && pw === "yamamoto3582") {
    localStorage.setItem("userName", "サポート本部 山本 龍我");
    window.location.href = "home.html";
  } 
  else if (id === "olympia03" && pw === "olympia03") {
    localStorage.setItem("userName", "サカエチカ店");
    window.location.href = "home.html";
  } 
  else {
    alert("IDまたはパスワードが違います");
  }
}
