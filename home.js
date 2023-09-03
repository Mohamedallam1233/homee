// const subDivs = document.querySelectorAll(".whatdiv");






var subDivs = $(".whatdiv")

let Indexx = 0;

function toggleDivs() {
  
  subDivs.eq(Indexx).addClass('dis')
  

  Indexx++;
  if (Indexx== subDivs.length) {
    Indexx = 0;
    subDivs.eq(Indexx).removeClass('dis')
  }else{
   subDivs.eq(Indexx).removeClass('dis')
  }
}
setInterval(toggleDivs, 4000);

setInterval(() => {
  Indexx = 0;
  subDivs.eq(Indexx).removeClass('dis')
}, subDivs.length * 4000);
 


function btnslider(id,num1,num2){
   document.querySelector(`.sl${id}`).classList.add('active_slider')
   document.querySelector(`.sl${num1}`).classList.remove('active_slider')
   document.querySelector(`.sl${num2}`).classList.remove('active_slider')
}

function btncateg(id,num1,num2){
    document.querySelector(`.c${id}`).classList.remove('notactive')
    document.querySelector(`.c${num1}`).classList.add('notactive')
    document.querySelector(`.c${num2}`).classList.add('notactive') 

    document.querySelector(`.b${id}`).classList.add('btn_cat_active')
    document.querySelector(`.b${num1}`).classList.remove('btn_cat_active')
    document.querySelector(`.b${num2}`).classList.remove('btn_cat_active')
 }


  

$(document).ready(function() {
    // Define the custom media query
    var customMediaQuery = window.matchMedia('(max-width: 550px)');
  
    // Function to handle media query changes
    var handleMediaQuery = function(mediaQuery) {
      if (mediaQuery.matches) {
        // Add the class when the media query is matched
        // $('.removed').css("width:0px !important")
        $('.removed').removeClass('col-5');
        $('.text-sec3').addClass('col-12');
        $('.text-sec3').removeClass('col-7');
        $('.text-sec3').css('background-image', 'url("pexels-markus-distelrath-3044470.jpg")');
        setInterval(() => {
        $('.div1').toggleClass('dis')
        $('.div2').toggleClass('dis');
        
        }, 4000);
        
      }else{
        
            setInterval(() => {
            $('.div1').toggleClass('dis')
            $('.div2').toggleClass('dis');
            }, 4000);
        
       $('.text-sec3').css('background-image', 'url("")');
       $('.removed').addClass('col-5');
       $('.text-sec3').addClass('col-7');
        $('.text-sec3').removeClass('col-12');
      } 
    };
  
    // Initial check for the media query
    handleMediaQuery(customMediaQuery);
  
    // Add a listener to the media query
    customMediaQuery.addListener(handleMediaQuery);
  });




   let activeIndex = 1;
const images = ['img/q.png', 'img/q2.png', 'img/q3.png', 'img/q4.png'];

const descriptions = [
    {
        opinion: 'افضل مدرسين و افضل بيئة للتدريس',
        student_name: 'محمود سعيد',
        stage: 'طالب بالصف الأاول '
    },
    {
        opinion: 'اتعلمت طتيرواستفدت جدا و الحمدلله تفوقت فى هذا العام',
        student_name: 'هاجر عيسي',
        stage: 'طالب بالصف الثانى'
    },
    {
        opinion: 'كورس عظيم فهمت منه كل حاجة',
        student_name: 'منه احمد',
        stage: 'طالب بالصف الثالث'
    },
    {
        opinion: 'شكرا على الاهتمام بنا وتعاملك معنا ك ابناء لكوا ',
        student_name: 'ياسين على',
        stage: 'طالب بالصف الرابع'
    },
];

// Function to set initial description
function setInitialDescription() {
    const defaultDescription = descriptions[activeIndex];
    const descriptionElement = document.getElementById('image-description');
    descriptionElement.querySelector('.opinion').textContent = defaultDescription.opinion;
    descriptionElement.querySelector('.student_name').textContent = defaultDescription.student_name;
    descriptionElement.querySelector('.stage').textContent = defaultDescription.stage;
}

// Call the function on page load
window.onload = setInitialDescription;

function toggleImage(direction) {
    const circleContainer = document.querySelector('.circle-container');
    const imageContainer = circleContainer.querySelector('.image-container');
    const activeImage = imageContainer.querySelector('.active-image');
    const nextIndex = (activeIndex + direction + images.length) % images.length;

    const nextActiveImage = imageContainer.children[nextIndex];

    nextActiveImage.style.transition = 'none';
    nextActiveImage.style.transform = 'scale(0)';

    activeImage.style.transition = 'none';
    activeImage.style.transform = 'scale(1.2)';
    activeImage.style.backgroundImage = `url('${images[activeIndex]}')`;

    // Display description for the next active image
    const description = descriptions[nextIndex];
    const descriptionElement = document.getElementById('image-description');
    descriptionElement.querySelector('.opinion').textContent = description.opinion;
    descriptionElement.querySelector('.student_name').textContent = description.student_name;
    descriptionElement.querySelector('.stage').textContent = description.stage;

    activeIndex = nextIndex;
    activeImage.classList.add('move-transition');

    setTimeout(() => {
        nextActiveImage.style.transition = 'transform 0.5s';
        nextActiveImage.style.transform = 'scale(1)';
        activeImage.style.transition = 'transform 0.5s';
        activeImage.style.transform = 'scale(0)';

        setTimeout(() => {
            activeImage.style.transition = 'none';
            activeImage.classList.remove('move-transition');
            activeImage.style.transform = 'scale(1)';
            activeImage.style.backgroundImage = `url('${images[nextIndex]}')`;
        }, 500);
    }, 100);
}

       
function slidenext(e) {
  const element = $(e);
  const carousel = new bootstrap.Carousel(element.closest('.carousel')[0], {
    interval: false
  });

  var carouselWidth = element.closest('.carousel-inner')[0].scrollWidth;
  var cardWidth = element.closest('.carousel-inner').find(".carousel-item").first().width();

  var scrollPosition = element.closest('.carousel-inner').scrollLeft();

  if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition = scrollPosition + cardWidth;
    element.closest('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
  }

  element.closest('.carousel-inner').addClass("slide");

  console.log('lll');
}

function slidepre(e) {
  const element = $(e);
  const carousel = new bootstrap.Carousel(element.closest('.carousel')[0], {
    interval: false
  });

  var carouselWidth = element.closest('.carousel')[0].scrollWidth;
  var cardWidth = element.closest('.carousel').find(".carousel-item").first().width();

  var scrollPosition = element.closest('.carousel').scrollLeft();

  if (scrollPosition > 0) {
    scrollPosition = scrollPosition - cardWidth;
    element.closest('.carousel').animate({ scrollLeft: scrollPosition }, 600);
  }

  element.closest('.carousel').addClass("slide");

  console.log('lll');
}

// function slidenext(e){
//     const element =$(e)
        
// const carousel = new bootstrap.Carousel(element.parent().parent()[0], {
//   interval: false
// });


// var carouselWidth = element.parent()[0].scrollWidth;
// var cardWidth =element.parent().closest().find(".carousel-item").width();


// var scrollPosition = 0;

//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//           scrollPosition = scrollPosition + cardWidth;
//           element.parent()[0].animate({ scrollLeft: scrollPosition }, 600);
//         }
//         element.parent().parent().addClass("slide");
//         console.log('lll');
// }


// function slidepre(e){
//       const element =$(e)
//     const carousel = new bootstrap.Carousel(element.parent().parent()[0], {
//       interval: false
//     });
//     var carouselWidth =element.parent()[0].scrollWidth;
//     var cardWidth = element.parent().closest().find(".carousel-item").width();
    
//     var scrollPosition = 0;
//             if (scrollPosition > 0) {
//                 scrollPosition = scrollPosition - cardWidth;
//                 element.parent()[0].animate({ scrollLeft: scrollPosition }, 600);
//               }
//               element.parent().parent().addClass("slide");
//               console.log('lll');
//     }





function gotosub(){
  window.location.href="../subjects/index.html"
}
function detials(){
  window.location.href="../teachers/info_teacher.html"
}
function gologin(){
  window.location.href="../login/login.html"
}
function lANG(){
  $('.langu').fadeToggle('slow');
}
