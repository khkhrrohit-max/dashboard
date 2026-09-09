/* =========================================================
   ACHIEVEMENTS DATA
   ========================================================= */

const achievements = [

    {
        id: 1,
        title: "100K Milestone Honor",
        name: "CampusCrew",
        company: "CampusCrew",
        type: "certificate",
        date: "26 June 2026",
        duration: "Achievement",
        year: 2026,
        image: "campuscrew-100k.jpg"
    },

    {
        id: 2,
        title: "AI-Machine Learning Engineer Certificate Course",
        name: "Reliance Foundation Skilling Academy",
        company: "Reliance Foundation Skilling Academy",
        type: "certificate",
        date: "01 August 2026",
        duration: "150 Hours",
        year: 2026,
        image: "reliance-ai-ml.jpg"
    },

    {
        id: 3,
        title: "Day 7 Unstop Week-of-Wins",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "unstop-day7.jpg"
    },

    {
        id: 4,
        title: "Day 5 MAVI's Pantry",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "unstop-day5.jpg"
    },

    {
        id: 5,
        title: "Highest Online Yoga Participation",
        name: "Habuild",
        company: "Habuild / World Records Union",
        type: "certificate",
        date: "22 June 2026",
        duration: "14 - 21 June 2026",
        year: 2026,
        image: "habuild-yoga.jpg"
    },

    {
        id: 6,
        title: "Day 3 Blue Tea",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "unstop-day3.jpg"
    },

    {
        id: 7,
        title: "Day 4 Joyspoon",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "unstop-day4.jpg"
    },

    {
        id: 8,
        title: "Day 2 Hammer",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "unstop-day2..jpg"
    },

    {
        id: 9,
        title: "Day 1 GIVA",
        name: "Unstop",
        company: "Unstop",
        type: "certificate",
        date: "Unstop Week-of-Wins",
        duration: "Achievement",
        year: 2026,
        image: "upstop-day 1.jpg"
    },

    {
        id: 10,
        title: "Offer Letter - Full Stack Web Development",
        name: "Internship",
        company: "Upskill",
        type: "offer",
        date: "04 April 2026",
        duration: "2 Month",
        year: 2026,
        image: "upskillinternship.jpg"
    },

    {
        id: 11,
        title: "Full Stack Web Development Internship",
        name: "Internship",
        company: "Upskill",
        type: "internship",
        date: "04 April 2026 - 17 June 2026",
        duration: "2 Month",
        year: 2026,
        image: "Full stack dev.jpg"
    },

    {
        id: 12,
        title: "Offer Letter - Leadership Internship",
        name: "Internship",
        company: "India Skill",
        type: "offer",
        date: "21 May 2026 - 21 June 2026",
        duration: "1 Month",
        year: 2026,
        image: "leadershipintership.jpg"
    },

    {
        id: 13,
        title: "Complete the Learn AI",
        name: "Microsoft",
        company: "Microsoft",
        type: "badge",
        date: "06-12-2025",
        duration: "20 Days",
        year: 2025,
        image: "genrativeai.jpg"
    }

];


/* =========================================================
   SETTINGS
   ========================================================= */

const IMAGE_PATH = "";


let currentFilter = "all";
let currentSearch = "";
let currentYear = "all";
let currentSort = "newest";


/* =========================================================
   DOM
   ========================================================= */

const achievementGrid =
    document.getElementById("achievementGrid");

const emptyState =
    document.getElementById("emptyState");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const yearFilter =
    document.getElementById("yearFilter");

const sortFilter =
    document.getElementById("sortFilter");

const previewOverlay =
    document.getElementById("previewOverlay");

const previewImage =
    document.getElementById("previewImage");

const previewTitle =
    document.getElementById("previewTitle");

const previewName =
    document.getElementById("previewName");

const previewCompany =
    document.getElementById("previewCompany");

const previewType =
    document.getElementById("previewType");

const previewDate =
    document.getElementById("previewDate");

const previewDuration =
    document.getElementById("previewDuration");

const downloadBtn =
    document.getElementById("downloadBtn");

const modalClose =
    document.getElementById("modalClose");


/* =========================================================
   TYPE LABEL
   ========================================================= */

function getTypeLabel(type) {

    const labels = {
        certificate: "Certificate",
        badge: "Badge",
        offer: "Offer Letter",
        internship: "Internship"
    };

    return labels[type] || "Achievement";
}


/* =========================================================
   IMAGE PATH
   ========================================================= */

function getImage(item) {

    return IMAGE_PATH + item.image;

}


/* =========================================================
   CREATE CARD
   ========================================================= */

function createCard(item) {

    const card =
        document.createElement("article");

    card.className = "achievement-card";

    card.innerHTML = `

        <div class="card-image">

            <img
                src="${getImage(item)}"
                alt="${item.title}"
            >

            <div class="card-label">
                ${getTypeLabel(item.type)}
            </div>

        </div>


        <div class="card-content">

            <h3>
                ${item.title}
            </h3>

            <div class="card-company">
                <i class="fa-solid fa-building"></i>
                ${item.company}
            </div>


            <div class="card-meta">

                <span>
                    <i class="fa-regular fa-calendar"></i>
                    ${item.date}
                </span>

                <span>
                    ${item.duration}
                </span>

            </div>

        </div>
    `;


    card.addEventListener("click", () => {

        openPreview(item);

    });


    return card;
}


/* =========================================================
   FILTER
   ========================================================= */

function getFilteredAchievements() {

    let result = [...achievements];


    if (currentFilter !== "all") {

        result =
            result.filter(
                item =>
                    item.type === currentFilter
            );

    }


    if (currentSearch.trim() !== "") {

        const search =
            currentSearch
                .toLowerCase()
                .trim();


        result =
            result.filter(item => {

                return (
                    item.title.toLowerCase().includes(search) ||
                    item.name.toLowerCase().includes(search) ||
                    item.company.toLowerCase().includes(search) ||
                    item.type.toLowerCase().includes(search)
                );

            });

    }


    if (currentYear !== "all") {

        result =
            result.filter(
                item =>
                    String(item.year) === currentYear
            );

    }


    if (currentSort === "newest") {

        result.sort(
            (a, b) => b.id - a.id
        );

    }


    if (currentSort === "oldest") {

        result.sort(
            (a, b) => a.id - b.id
        );

    }


    if (currentSort === "az") {

        result.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );

    }


    if (currentSort === "za") {

        result.sort(
            (a, b) =>
                b.title.localeCompare(a.title)
        );

    }


    return result;
}


/* =========================================================
   RENDER
   ========================================================= */

function renderAchievements() {

    const result =
        getFilteredAchievements();


    achievementGrid.innerHTML = "";


    if (result.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    result.forEach(item => {

        achievementGrid.appendChild(
            createCard(item)
        );

    });

}


/* =========================================================
   STATISTICS
   ========================================================= */

function updateStatistics() {

    const certificates =
        achievements.filter(
            item => item.type === "certificate"
        ).length;


    const badges =
        achievements.filter(
            item => item.type === "badge"
        ).length;


    const offers =
        achievements.filter(
            item => item.type === "offer"
        ).length;


    const internships =
        achievements.filter(
            item => item.type === "internship"
        ).length;


    document.getElementById(
        "certificateCount"
    ).textContent = certificates;


    document.getElementById(
        "badgeCount"
    ).textContent = badges;


    document.getElementById(
        "offerCount"
    ).textContent = offers;


    document.getElementById(
        "internshipCount"
    ).textContent = internships;


    document.getElementById(
        "totalCount"
    ).textContent = achievements.length;

}


/* =========================================================
   YEAR FILTER
   ========================================================= */

function populateYears() {

    const years = [
        ...new Set(
            achievements.map(
                item => item.year
            )
        )
    ].sort((a, b) => b - a);


    years.forEach(year => {

        const option =
            document.createElement("option");

        option.value = year;

        option.textContent = year;

        yearFilter.appendChild(option);

    });

}


/* =========================================================
   CATEGORY TABS
   ========================================================= */

document
    .querySelectorAll(".category-tab")
    .forEach(tab => {

        tab.addEventListener("click", () => {

            document
                .querySelectorAll(".category-tab")
                .forEach(item =>
                    item.classList.remove("active")
                );


            tab.classList.add("active");


            currentFilter =
                tab.dataset.filter;


            renderAchievements();

        });

    });


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value;

        renderAchievements();

    }
);


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        currentSearch = "";

        renderAchievements();

        searchInput.focus();

    }
);


/* =========================================================
   YEAR
   ========================================================= */

yearFilter.addEventListener(
    "change",
    event => {

        currentYear =
            event.target.value;

        renderAchievements();

    }
);


/* =========================================================
   SORT
   ========================================================= */

sortFilter.addEventListener(
    "change",
    event => {

        currentSort =
            event.target.value;

        renderAchievements();

    }
);


/* =========================================================
   RESET
   ========================================================= */

document
    .getElementById("resetFilters")
    .addEventListener("click", () => {

        currentFilter = "all";
        currentSearch = "";
        currentYear = "all";
        currentSort = "newest";


        searchInput.value = "";

        yearFilter.value = "all";

        sortFilter.value = "newest";


        document
            .querySelectorAll(".category-tab")
            .forEach(tab =>
                tab.classList.remove("active")
            );


        document
            .querySelector(
                '[data-filter="all"]'
            )
            .classList.add("active");


        renderAchievements();

    });


/* =========================================================
   PREVIEW
   ========================================================= */

function openPreview(item) {

    previewImage.src =
        getImage(item);

    previewImage.alt =
        item.title;


    previewTitle.textContent =
        item.title;

    previewName.textContent =
        item.name;

    previewCompany.textContent =
        item.company;

    previewType.textContent =
        getTypeLabel(item.type);

    previewDate.textContent =
        item.date;

    previewDuration.textContent =
        item.duration;


    downloadBtn.onclick = () => {

        const link =
            document.createElement("a");

        link.href =
            getImage(item);

        link.download =
            item.image;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    };


    previewOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closePreview() {

    previewOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closePreview
);


previewOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === previewOverlay
        ) {

            closePreview();

        }

    }
);


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            previewOverlay.classList.contains("show")
        ) {

            closePreview();

        }

    }
);


/* =========================================================
   SCROLL
   ========================================================= */

document
    .getElementById("scrollCollection")
    .addEventListener("click", () => {

        document
            .getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================================================
   BACK
   ========================================================= */

document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        window.history.back();

    });


/* =========================================================
   INITIALIZE
   ========================================================= */

function initialize() {

    updateStatistics();

    populateYears();

    renderAchievements();

}


initialize();