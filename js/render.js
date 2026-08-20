let cardsInformation = [
    {
        class:"card reveal",
        title:"Hobbyist",
        description:"Perfect for student developers, open-source and contributors",
        monthlyPrice:0,
        yearlyPrice:0,
        btnText:"Get Started Free",
        Features:[
            "✓ Audit up to 1,000 lines of code monthly",
            "✓ Standard syntax error detection",
            "✓ Support for 5 basic programming languages",
            "✓ Core AI chat with 20 daily queries",
        ]
    },

    {
        class:"card special reveal",
        title:"Pro ✨ (Most Popular)",
        description:"Built for freelance developers, indie hackers, and professional software creators",
        monthlyPrice:19,
        yearlyPrice:19 * 12 * 0.8,
        btnText:"Subscribe to Pro ⚡",
        Features:[
            "✓ Unlimited codebase & repository scanning",
            "✓ Advanced deep logic vulnerability shield",
            "✓ Full workplace repository context indexing",
            "✓ Support for 30+ languages and modern frameworks",
        ]
    },

    {
        class:"card reveal",
        title:"Enterprise",
        description:"Designed for fast-growing software startups and agile dev teams",
        monthlyPrice:79,
        yearlyPrice:79 * 12 * 0.8,
        btnText:"Contact Sales",
        Features:[
            "✓ Everything included in the Pro tier",
            "✓ Dedicated team dashboard for up to 15 developers",
            "✓ End-to-end repository encryption & isolated data",
            "✓ Custom security compliance & analysis reports",
        ]
    },
];

let cardSpace = document.querySelector(".card-space");
let footerText = document.querySelector("footer .text");

function creatCardsPrice (yearly) {
    let priceDuration = "";

    if (yearly) {
        priceDuration = "/y";
    }   else {
        priceDuration = "/m";
    }

    cardSpace.innerHTML = cardsInformation.map((card) => {
        let price = 0 ;
        let features = card.Features.map((feature) => {
            return `<li>${feature}</li>`;
        }).join("");

        if (yearly) {
            price = card.yearlyPrice.toFixed(0) ;
        }   else {
            price = card.monthlyPrice.toFixed(0)  ;
        }

        return `<div class="${card.class}">
                    <div class="title">${card.title}</div>
                    <div class="descripstion">${card.description}</div>
                    <div class="price">$<span>${price}</span>${priceDuration}</div>
                    <button class="buy-btn hover-target">${card.btnText}</button>
                    <ul class="features">
                        ${features}
                    </ul>
                </div>`
    }).join("");

}

export const render = {
    manageCreatCardsPrice : (button) => {
        if (button.classList.contains("yearly")) {
            creatCardsPrice(true);
        }   else {
            creatCardsPrice(false);
        }
    },

    openQuestionCard : (btn) => {
        let card = btn.closest(".card");
        card.classList.toggle("open");
    },

    rerwiteFooterText: () => {
        let year = new Date().getFullYear() ;
        footerText.innerHTML = `© ${year} Micro AI All rights reserved`;
    }
}