'use strict';

// Selections
const sideBar = document.querySelector('.sidebar');
const navScrollingSections = document.querySelectorAll('.section');
const allSections = document.querySelectorAll('.reveal')
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');
const imgTarget = document.querySelectorAll('figure');
const testimonialSection = document.querySelector('.testimonials')
const comment = document.querySelector('.testimonial__text');
const userPhoto = document.querySelector('.testimonial__details--photo');
const userName = document.querySelector('.testimonial__details--name');
const userRole = document.querySelector('.testimonial__details--role');
const bar = document.querySelector('.testimonial__progress-bar');

/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Sticky navigation

// const stickyNav = function (entries) {
//     const [entry] = entries;

//     const rowStart = entry.target.dataset.rows;
//     const rowEnd = entry.target.dataset.rowe;
//     if (!entry.isIntersecting) return;
//     else {

//         navItems.forEach(i => {
//             const href = i.firstChild.getAttribute('href');

//             if (href === `#${entry.target.id}`) {
//                 i.classList.add('nav__item--active')
//             }
//             else {
//                 i.classList.remove('nav__item--active');
//             }
//         });

//         if (entry.target.classList.contains('header')) {
//             sideBar.style.gridRow = `${rowStart} / ${rowEnd}`;
//             sideBar.style.gridColumn = `1/2`
//             sideBar.style.justifyContent = '';
//         } else {
//             sideBar.style.gridRow = `${rowStart} / ${rowEnd}`;
//             sideBar.style.gridColumn = `1/3`
//             sideBar.style.justifyContent = 'space-evenly';
//         }
//     }
// }

// const navObserver = new IntersectionObserver(stickyNav, {
//     root: null,
//     threshold: .85
// });
// navScrollingSections.forEach(s => navObserver.observe(s))

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// smooth revealing section

const reavlingSection = function (entires, observer) {
    const [entry] = entires;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(reavlingSection, {
    root: null,
    threshold: 0.20
});

allSections.forEach(function (s) {
    sectionObserver.observe(s);
    s.classList.add('section--hidden');
});


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// smooth scrolling

document.querySelector('.nav').addEventListener('click', function (e) {
    e.preventDefault();
    const link = e.target.closest('.nav__item');
    const id = link ? link.firstChild.getAttribute('href') : null;

    if (id === null) return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    // navItems.forEach(i => {
    //     i.classList.remove('nav__item--active');
    // })
    // e.target.parentElement.classList.add('nav__item--active');

});

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// lazy loading image

// const lazyLoading = function (entries, observer) {
//     const [entry] = entries;
//     console.log(entry.target.firstElementChild);
//     if (!entry.isIntersecting) return

//     entry.target.firstElementChild.src = entry.target.firstElementChild.dataset.src;
//     entry.target.firstElementChild.addEventListener('load', function () {
//         entry.target.firstElementChild.classList.remove('lazy-img')
//     });
//     observer.unobserve(entry.target.firstElementChild)
// }

// const imgObserver = new IntersectionObserver(lazyLoading, {
//     root: null,
//     threshold: 0,
//     rootMargin: '200px'
// })

// imgTarget.forEach(img => imgObserver.observe(img))

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// testimonials switching

const testimonials = [
    {
        name: 'Mark Smith',
        position: 'Marketing',
        photo: 'img/user-1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure voluptates, recusandae, vel omnis aut explicabo ex corporis odio quod fuga maxime, obcaecati ipsum sed eveniet quo officia voluptate rerum.'
    },
    {
        name: 'Will Ramsey',
        position: 'UX/UI designer',
        photo: 'img/user-2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores nemo error incidunt vitae velit quidem eveniet. Non consequatur corrupti blanditiis, quo culpa reprehenderit quisquam quis, in doloremque ullam sapiente.'
    },
    {
        name: 'Jisca Willam',
        position: 'Video editor',
        photo: 'img/user-3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero perferendis, ullam molestias distinctio eveniet obcaecati? Reiciendis molestiae qui maxime assumenda vero aut ut. Ratione, praesentium? Nesciunt vero amet deleniti.'
    },
    {
        name: 'Robertson',
        position: 'Google engineer',
        photo: 'img/user-4.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repellendus autem nihil incidunt nam dolorum dolorem earum, doloremque eaque provident, minus rerum velit numquam ab, doloribus praesentium? Saepe, earum impedit.'
    }
]


const testimonial = function () {
    let num = 1;
    const displayTestimonial = function () {
        const { name, position, photo, text } = testimonials[num];

        comment.innerHTML = text;
        userPhoto.src = photo;
        userName.innerHTML = name;
        userRole.innerHTML = position;

        num++;

        if (num > testimonials.length - 1) {
            num = 0;
        }
    }
    bar.style.animation = 'grow 10s linear infinite'
    setInterval(displayTestimonial, 10000)
}

// Intersecting 
const testimonialWork = function (entries, observe) {
    const [entry] = entries;

    if (!entry.isIntersecting) return
    testimonial();

    observe.unobserve(entry.target);
}
const testimonialObserver = new IntersectionObserver(testimonialWork, {
    root: null,
    threshold: 0.2
});
testimonialObserver.observe(testimonialSection);

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// slider
// const dotsContainer = document.querySelector('.dots');
// const allSlides = document.querySelectorAll('.slide__project');
// const btnToLeft = document.querySelector('.changing-btn--left');
// const btnToRight = document.querySelector('.changing-btn--right');

// const slider = function () {
//     let curSlide = 0;
//     let maxSlide = allSlides.length

//     //create dots
//     const createDots = function () {
//         allSlides.forEach((_, i) => dotsContainer.
//             insertAdjacentHTML('beforeend', `<button class = "dots__dot" data-slide = "${i}"></button>`));
//     }
//     // add active dot
//     const activeDot = function (slide) {
//         document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
//         document.querySelector(`.dots__dot[data-slide = '${slide}']`).classList.add('dots__dot--active');
//     }

//     // positioning slides
//     const slidePosition = function (slide) {
//         allSlides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
//     }

//     // next slide
//     const nextSlide = function () {
//         if (curSlide === maxSlide - 1) {
//             curSlide = 0
//         } else {
//             curSlide++
//         }
//         activeDot(curSlide);
//         slidePosition(curSlide)
//     }
//     const prevSlide = function () {
//         if (curSlide === 0) {
//             curSlide = maxSlide - 1
//         } else {
//             curSlide--
//         }
//         activeDot(curSlide);
//         slidePosition(curSlide);
//     }

//     // inital 
//     const init = function () {
//         createDots();
//         activeDot(curSlide);
//         slidePosition(curSlide);
//     }

//     init();

//     // event handler 
//     btnToRight.addEventListener('click', nextSlide);
//     btnToLeft.addEventListener('click', prevSlide);

//     document.addEventListener('keydown', function (e) {
//         if (e.key === 'ArrowRight') nextSlide();
//         if (e.key === 'ArrowLeft') prevSlide();
//     });

//     dotsContainer.addEventListener('click', function (e) {
//         if (e.target.classList.contains('dots__dot')) {
//             const { slide } = e.target.dataset;
//             slidePosition(slide);
//             activeDot(slide)
//         }
//     })
// }
// slider();


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// rate me
const rateMeContainer = document.querySelector('.contact__rate-me');
const rateMeImg = document.querySelectorAll('.contact__rate-me__img');

rateMeContainer.addEventListener('click', function (e) {

    if (e.target.classList.contains('contact__rate-me__img')) {
        // rateMeImg.forEach(img => img.classList.remove('bigger-img'));
        // e.target.classList.add('bigger-img');
        const imgNum = e.target.dataset.img;
        document.querySelector(`.contact__rate-me__text[data-text = "${imgNum}"]`).textContent++;
    }
})