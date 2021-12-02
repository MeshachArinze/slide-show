const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__button--left');
const nextBtn = document.querySelector('.carousel__button--right');
const dotNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotNav.children);

// get the width of the slides

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const upDateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('currenr-slide');
    targetDot.classList.add('current-slide');
};

// left button
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);
    upDateDot(currentDot, prevDot);
});


// right button
nextBtn.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    upDateDot(currentDot, nextDot);
});


dotNav.addEventListener('click', e => {
    // what indicator was click on
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    // console.log(targetIndex);

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    upDateDot(currentDot, targetDot);

    if ( targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
    
});