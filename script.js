// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//Task1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

//Task2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Task3
menuLinks.forEach((link) => {
    const myLink = document.createElement("a");
    myLink.setAttribute("href", link.href);
    myLink.textContent = link.text;
    topMenuEl.appendChild(myLink);
    // console.log(link)
})

//Task4
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

//Task5
const topMenuLinks = document.querySelectorAll("#top-menu > a")
let showingSubMenu = false;

topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e)
  // console.log(e.target.tagName);
  if (e.target.tagName !== "A") {
    return;
  }

  console.log(e.target.textContent);

//5.3

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  } 
  // console.log(topMenuLinks)

  //5.4

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  
//5.5
  e.target.classList.add("active");


  //5.6
  menuLinks.forEach((link) => {
    // console.log(link.subLinks)
    if (link.subLinks) {
      showingSubMenu = true;
    } else showingSubMenu = false;
  });

  //5.8
 let subText = e.target.textContent;
 let myLink = menuLinks.find(link => link.text === subText)
//  console.log(myLink)
//  console.log(subText)

  const buildSubMenu = (obj) => {
    subMenuEl.innerHTML = " ";
    obj.forEach(subLink => {
        const anchor = document.createElement("a");
        anchor.setAttribute("href", subLink.href);
        anchor.textContent = subLink.text;
        subMenuEl.append(anchor);
    }) 
    };
  

  //5.7

  if (showingSubMenu) {
    buildSubMenu(myLink.subLinks);
    subMenuEl.style.top = "100%";
  } else subMenuEl.style.top = "0";
})

//Task6