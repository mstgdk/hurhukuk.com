
// ANASAYFA ÖZLÜSÖZ OTOMATİK YAZIM
var i = 0;
var txt = 'Hür Hukuk ve Danışmanlık müvekkilleri ile doğru ve hızlı ileişim kurarak onlara etkin ve etkili çözüm önerileri sunar ve uygular.';
var speed = 10;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("effectözlüsöz").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


//RESİM DEĞİŞTİRME
function hover(element) {
  element.setAttribute('src', 'images/hukuklogo2.png');
}

function unhover(element) {
  element.setAttribute('src', 'images/muhammedenesgedik.jpeg');
}
function hover1(element) {
  element.setAttribute('src', 'images/hukuklogo2.png');
}

function unhover1(element) {
  element.setAttribute('src', 'images/enesprofil.jpg');
}
function hover2(element) {
  element.setAttribute('src', 'images/hukuklogo2.png');
}

function unhover2(element) {
  element.setAttribute('src', 'images/enesprofil.jpg');
}
function hover3(element) {
  element.setAttribute('src', 'images/hukuklogo2.png');
}

function unhover3(element) {
  element.setAttribute('src', 'images/enesprofil.jpg');
}

//BACK TO TOP

$(document).ready(function () {

  $(window).scroll(function () {

    if ($(window).scrollTop() > 100) {
      $(".backtotop").fadeIn();
    }
    else {
      $(".backtotop").fadeOut();
    }

  });

  $(".backtotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
  });
});

//HAREKETLİ DİVLER
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};