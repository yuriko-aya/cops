function MenuExpand() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function side_open() {
  document.getElementById("sidenav").className = "side_open bg-primary";
  document.getElementById("content").className = "content_open bg-primary nav-head main-cont";
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("side_close").style.display = "block";
  document.getElementById("side_open").style.display = "none";
}
function side_close() {
  document.getElementById("sidenav").className = "side_nav bg-primary";
  document.getElementById("content").className = "col-md-10 bg-primary nav-head main-cont";
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("side_open").style.display = "block";
}
