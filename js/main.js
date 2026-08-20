import { render } from './render.js' ;

let monthlyBtn = document.querySelector(".monthly");
let priceBtns = document.querySelectorAll(".btns-box button");

const clicks = {
    "price-btn" : (button) => {
        render.manageCreatCardsPrice(button);
        priceBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    },

    "open-question-btn" : (button) => {
        render.openQuestionCard(button);
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active"); 
        }
    });
}, {
    threshold: 0.15 
});

document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
});

let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove" , (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
})

document.querySelectorAll(".hover-target").forEach((ele) => {
    ele.addEventListener("mouseenter" , (e)=> {
        cursor.classList.add("hovered");
    });

    ele.addEventListener("mouseleave" , (e)=> {
        cursor.classList.remove("hovered");
    });

    ele.addEventListener("mousedown" , (e)=> {
        cursor.classList.add("clicked");
    });

    ele.addEventListener("mouseup" , (e)=> {
        cursor.classList.remove("clicked");
    });
});

window.addEventListener ("click" , (e) => {
    for (let className of e.target.classList) {
        if (clicks[className]) {
            clicks[className] (e.target);
            break;
        }
    }
}) ;


window.addEventListener("load" , (e)=> {
    render.manageCreatCardsPrice(monthlyBtn);
    render.rerwiteFooterText();
});