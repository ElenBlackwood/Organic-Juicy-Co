//===SEARCH ICON===/
const search = document.querySelector('.search'),
            icon = search.querySelector('.search-icon'),
            clear = search.querySelector('.clear');

const span = search.getElementsByTagName('span');

icon.addEventListener( 'click', () => {
    search.classList.toggle('search_active');

    if(search.classList.contains('search_active')) {
        clear.style.display = 'flex';
    } else {
        clear.style.display = 'none';
    };    
});

clear.addEventListener('click', ()=> {
    document.getElementById('mySearch').value = '';
});

//===BURGER MENU===//
const burgerMenu = document.querySelector('.burger-menu'),
            header = document.querySelector('.header'),
            body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu_active');
    header.classList.toggle('header_mobile');
    body.classList.toggle('no-scroll');

    // if( burgerMenu.classList.contains('burger-menu_active')) {
    //     search.style.display = 'flex';
    // } else {
    //     search.style.display = 'none';
    // };
});


//===SLIDER ARROWS SECTION===//
const sliderArrows = document.querySelector('.slider-arrows'),
        slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
        prev = sliderArrows.querySelector('.slider-arrows__arrow_left'),
        next = sliderArrows.querySelector('.slider-arrows__arrow_right');

let slideIndex = 0;

prev.addEventListener('click', () => {
    showSlideArrows(-1);
});

next.addEventListener('click', () => {
    showSlideArrows(1);
});

function showSlideArrows(n = 0) {
    slideIndex += n;

    if(slideIndex < 0) {
        slideIndex = slidesArrows.length - 1;
    } if(slideIndex >= slidesArrows.length){
        slideIndex = 0;
    };
    
    slidesArrows.forEach( item => {
        item.style.display = 'none';
    });

    slidesArrows[slideIndex].style.display = 'block';
};

showSlideArrows();


//===SLIDER DOTS SECTION===//
const sliderDots = document.querySelector('.slider-dots');
const slidesDots = sliderDots.querySelectorAll('.slider-dots__item');
const wrapperDots = document.querySelector('.slider-dots__nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');
    dot.dataset.slideTo = i;
    dot.classList.add('slider-dots__nav-item', 'opacity');

    if (i == 0) {
        dot.classList.add('slider-dots__nav-item_active');
    };

    if (i != 0) {
        slidesDots[i].style.display = 'none';
    };

    dot.addEventListener('click', showSlideDots);
    wrapperDots.append(dot);
    dots.push(dot);
};

function showSlideDots (event) {
    const slideTo = event.target.dataset.slideTo;

    slidesDots.forEach(item => {
        item.style.display = 'none';
    });

    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => {
        dot.classList.remove('slider-dots__nav-item_active');
        event.target.classList.add('slider-dots__nav-item_active');
    });
}


//===ORANGE SECTION===//

const sliderOrange = document.querySelector('.orange');
const slidesOrange = sliderOrange.querySelectorAll('.orange__img');
const arrow = sliderOrange.querySelector('.orange__arrow');

let index = 0;

arrow.addEventListener('click', () =>{
    showArrowSlide(1);
})

function showArrowSlide(n = 0) {
    index += n;

    if(index >= slidesOrange.length) {
        index = 0;
    }

    slidesOrange.forEach( item => {
        item.style.display = 'none';
    });

    slidesOrange[index].style.display = 'block';
}

showArrowSlide();



