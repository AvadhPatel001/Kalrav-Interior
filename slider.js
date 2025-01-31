//...................................................111...............................................

const slider111 = document.querySelector(".slider111");
const prevBtn111 = document.querySelector(".prev-btn111");
const nextBtn111 = document.querySelector(".next-btn111");
const slides111 = document.querySelectorAll(".slide111");
const slideIcon111 = document.querySelectorAll(".slide-icon111");
const numberOfSlides111 = slides111.length;
var slideNmner111 = 0;

// next Btn

nextBtn111.addEventListener("click", () => {
    slides111.forEach((slide111) => {
        slide111.classList.remove("active");
    });
    slideIcon111.forEach((slideIcon111) => {
        slideIcon111.classList.remove("active");
    });

    slideNmner111++;
    if(slideNmner111 > (numberOfSlides111 - 1)){
        slideNmner111 = 0;
    }

    slides111[slideNmner111].classList.add("active");
    slideIcon111[slideNmner111].classList.add("active");
});

// next Btn

//prv Btn

prevBtn111.addEventListener("click", () => {
    slides111.forEach((slide111) => {
        slide111.classList.remove("active");
    });
    slideIcon111.forEach((slideIcon111) => {
        slideIcon111.classList.remove("active");
    });

    slideNmner111--;
    if(slideNmner111 < 0){
        slideNmner111 = numberOfSlides111 - 1;
    }

    slides111[slideNmner111].classList.add("active");
    slideIcon111[slideNmner111].classList.add("active");
});

//prv Btn

// Auto play

    var playSlider111;

    var repeater111 = () => {
        playSlider111 = setInterval(function(){
            slides111.forEach((slide111) => {
                slide111.classList.remove("active");
            });
            slideIcon111.forEach((slideIcon111) => {
                slideIcon111.classList.remove("active");
            });
        
            slideNmner111++;
            if(slideNmner111 > (numberOfSlides111 - 1)){
                slideNmner111 = 0;
            }
        
            slides111[slideNmner111].classList.add("active");
            slideIcon111[slideNmner111].classList.add("active");  
        }, 3000);
    }
    repeater111();

// Auto play

// stop and start

    slider111.addEventListener("mouseover", () => {
        clearInterval(playSlider111);
    });

    slider111.addEventListener("mouseout", () => {
        repeater111();
    });

// stop and start


// ........................................222..........................................

const slider222 = document.querySelector(".slider222");
const prevBtn222 = document.querySelector(".prev-btn222");
const nextBtn222 = document.querySelector(".next-btn222");
const slides222 = document.querySelectorAll(".slide222");
const slideIcon222 = document.querySelectorAll(".slide-icon222");
const numberOfSlides222 = slides222.length;
var slideNmner222 = 0;

// next Btn

nextBtn222.addEventListener("click", () => {
    slides222.forEach((slide222) => {
        slide222.classList.remove("active");
    });
    slideIcon222.forEach((slideIcon222) => {
        slideIcon222.classList.remove("active");
    });

    slideNmner222++;
    if(slideNmner222 > (numberOfSlides222 - 1)){
        slideNmner222 = 0;
    }

    slides222[slideNmner222].classList.add("active");
    slideIcon222[slideNmner222].classList.add("active");
});

// next Btn

//prv Btn

prevBtn222.addEventListener("click", () => {
    slides222.forEach((slide222) => {
        slide222.classList.remove("active");
    });
    slideIcon222.forEach((slideIcon222) => {
        slideIcon222.classList.remove("active");
    });

    slideNmner222--;
    if(slideNmner222 < 0){
        slideNmner222 = numberOfSlides222 - 1;
    }

    slides222[slideNmner222].classList.add("active");
    slideIcon222[slideNmner222].classList.add("active");
});

//prv Btn

// Auto play

    var playSlider222;

    var repeater222 = () => {
        playSlider222 = setInterval(function(){
            slides222.forEach((slide222) => {
                slide222.classList.remove("active");
            });
            slideIcon222.forEach((slideIcon222) => {
                slideIcon222.classList.remove("active");
            });
        
            slideNmner222++;
            if(slideNmner222 > (numberOfSlides222 - 1)){
                slideNmner222 = 0;
            }
        
            slides222[slideNmner222].classList.add("active");
            slideIcon222[slideNmner222].classList.add("active");  
        }, 3000);
    }
    repeater222();

// Auto play

// stop and start

    slider222.addEventListener("mouseover", () => {
        clearInterval(playSlider222);
    });

    slider222.addEventListener("mouseout", () => {
        repeater222();
    });

// stop and start



//......................................333.....................................................

const slider333 = document.querySelector(".slider333");
const prevBtn333 = document.querySelector(".prev-btn333");
const nextBtn333 = document.querySelector(".next-btn333");
const slides333 = document.querySelectorAll(".slide333");
const slideIcon333 = document.querySelectorAll(".slide-icon333");
const numberOfSlides333 = slides333.length;
var slideNmner333 = 0;

// next Btn

nextBtn333.addEventListener("click", () => {
    slides333.forEach((slide333) => {
        slide333.classList.remove("active");
    });
    slideIcon333.forEach((slideIcon333) => {
        slideIcon333.classList.remove("active");
    });

    slideNmner333++;
    if(slideNmner333 > (numberOfSlides333 - 1)){
        slideNmner333 = 0;
    }

    slides333[slideNmner333].classList.add("active");
    slideIcon333[slideNmner333].classList.add("active");
});

// next Btn

//prv Btn

prevBtn333.addEventListener("click", () => {
    slides333.forEach((slide333) => {
        slide333.classList.remove("active");
    });
    slideIcon333.forEach((slideIcon333) => {
        slideIcon333.classList.remove("active");
    });

    slideNmner333--;
    if(slideNmner333 < 0){
        slideNmner333 = numberOfSlides333 - 1;
    }

    slides333[slideNmner333].classList.add("active");
    slideIcon333[slideNmner333].classList.add("active");
});

//prv Btn

// Auto play

    var playSlider333;

    var repeater333 = () => {
        playSlider333 = setInterval(function(){
            slides333.forEach((slide333) => {
                slide333.classList.remove("active");
            });
            slideIcon333.forEach((slideIcon333) => {
                slideIcon333.classList.remove("active");
            });
        
            slideNmner333++;
            if(slideNmner333 > (numberOfSlides333 - 1)){
                slideNmner333 = 0;
            }
        
            slides333[slideNmner333].classList.add("active");
            slideIcon333[slideNmner333].classList.add("active");  
        }, 3000);
    }
    repeater333();

// Auto play

// stop and start

    slider333.addEventListener("mouseover", () => {
        clearInterval(playSlider333);
    });

    slider333.addEventListener("mouseout", () => {
        repeater333();
    });

// stop and start
