// display language
var selectLanguage = "";
var buttonLanguage = "<button class=\"font-small skill-button\">";
var language = ["Java", "Python", "C++", "C#", "SQL", "HTML", "CSS", "JavaScript"];

language.forEach(displayLanguage);

function displayLanguage(name){
  selectLanguage += buttonLanguage + name + "</button>";}
  document.getElementById("displayLanguages").innerHTML = selectLanguage;

// display Software
var selectSW = "";
var buttonSW = "<button class=\"font-small skill-button\">";
var sw = ["Microsoft Azure", "Amazon AWS", "MySQL", "Visual Studio", "IntelliJ", 
"PyCharm", "Canopy","Docker", "github", "git", "Elasticsearch", "Kibana", "WebStorm", ".NET",
"Photoshop", "InDesign"];

sw.forEach(displaySW);

function displaySW(name){
  selectSW += buttonSW + name + "</button>";}
  document.getElementById("displaySW").innerHTML = selectSW;

// display coursework
var selectCourse = "";
var bookIcon = "<p><i class=\"fa fa-book fa-fw font-small margin-right-15 color-grey\"></i>";
var courseList = ["Data Structures and Algorithms", "Cloud Computing", "Operating Systems", 
"Database System", "Computer Networking", "Software Engineering", "Analysis and Design", 
"Hardware & Computer Organization", "Technical Writing", 
"Management Principles for Computing Professinals"];

courseList.forEach(displayCourse);

function displayCourse(name){ selectCourse += bookIcon + name + "</p>";}
document.getElementById("displayCourseWork").innerHTML = selectCourse;

// Interests Section Slides
var slideNo = 1;
displaySlide(slideNo);

function addSlide(n) {
  displaySlide(slideNo += n);
}

function currSlide(n) {
  displaySlide(slideNo = n);
}

function displaySlide(n) {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNo = 1}    
    if (n < 1) {slideNo = slides.length}

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideNo-1].style.display = "block";  
      dots[slideNo-1].className += " active";
    }

// Go to top
var topBtn = document.getElementById("goTopBtn");
window.onscroll = function() {scrollDown()};

function scrollDown(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function goTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function card_1() {
  document.getElementById("front-1").style.display = "none";
  document.getElementById("back-1").style.display = "block";
}

function card_2() {
 document.getElementById("back-1").style.display = "none";
 document.getElementById("front-1").style.display = "block";
}

function card_3() {
  document.getElementById("front-2").style.display = "none";
  document.getElementById("back-2").style.display = "block";
}

function card_4() {
 document.getElementById("back-2").style.display = "none";
 document.getElementById("front-2").style.display = "block";
}

function card_5() {
  document.getElementById("front-3").style.display = "none";
  document.getElementById("back-3").style.display = "block";
}

function card_6() {
 document.getElementById("back-3").style.display = "none";
 document.getElementById("front-3").style.display = "block";
}

function card_7() {
  document.getElementById("front-4").style.display = "none";
  document.getElementById("back-4").style.display = "block";
}

function card_8() {
 document.getElementById("back-4").style.display = "none";
 document.getElementById("front-4").style.display = "block";
}

function card_9() {
  document.getElementById("front-5").style.display = "none";
  document.getElementById("back-5").style.display = "block";
}

function card_10() {
 document.getElementById("back-5").style.display = "none";
 document.getElementById("front-5").style.display = "block";
}

function card_11() {
  document.getElementById("front-6").style.display = "none";
  document.getElementById("back-6").style.display = "block";
}

function card_12() {
 document.getElementById("back-6").style.display = "none";
 document.getElementById("front-6").style.display = "block";
}