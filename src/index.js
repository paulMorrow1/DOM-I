const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const navBar = document.querySelectorAll("nav a");
navBar.forEach((item) => {
  item.classList.add("italic");
});
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

const headerElem = document.querySelector("h1");

headerElem.textContent = "DOM Is Awesome";
headerElem.fontSize = "4rem";

const getStarted = document.querySelector("button");
getStarted.textContent = "Get Started";
getStarted.fontSize = "2rem";

const logoTitle = document.querySelector("#logo-img");
logoTitle.src = "http://localhost:9000/img/logo.png";

const mainImg = document.querySelector("#cta-img");
mainImg.src = "http://localhost:9000/img/cta.png";

const topContent = document.querySelector(".top-content");
const headerTop = topContent.querySelectorAll("h4");
const pTop = topContent.querySelectorAll("p");

headerTop[0].textContent = siteContent["main-content"]["features-h4"];
headerTop[1].textContent = siteContent["main-content"]["about-h4"];

pTop[0].textContent = siteContent["main-content"]["features-content"];
pTop[1].textContent = siteContent["main-content"]["about-content"];

const bottomContent = document.querySelector(".bottom-content");
const headerBottom = bottomContent.querySelectorAll("h4");
const pBottom = bottomContent.querySelectorAll("p");

headerBottom[0].textContent = siteContent["main-content"]["services-h4"];
headerBottom[1].textContent = siteContent["main-content"]["product-h4"];
headerBottom[2].textContent = siteContent["main-content"]["vision-h4"];

pBottom[0].textContent = siteContent["main-content"]["services-content"];
pBottom[1].textContent = siteContent["main-content"]["product-content"];
pBottom[2].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = "http://localhost:9000/img/accent.png";

const contactSect = document.querySelector(".contact");
const contactHeader = contactSect.querySelector("h4");
const contactP = contactSect.querySelectorAll("p");

contactHeader.textContent = siteContent.contact["contact-h4"];
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footerA = document.querySelector("footer a");
footerA.classList.add("bold");
footerA.textContent = "Copyright Great Idea! 2021";

console.log("project wired!");
