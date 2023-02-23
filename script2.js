// Tasks 1.0 - 1.3
let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

// Tasks 2.0 - 2.3
let topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Tasks 3.0 - 3.1
// Menu data structure
let menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((link) => {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", link.href);
  anchor.innerText = link.text;
  topMenuEl.appendChild(anchor);
});

//Tasks 4.0 - 4.5
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

// Tasks 5.0 - 5.8
// 5.0
menuLinks = [
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

// 5.1
let topMenuLinks = document.querySelectorAll("#top-menu > a");
console.log(topMenuLinks);
let showingSubMenu = false;

topMenuEl.addEventListener("click", (e) => {
  // 5.2
  e.preventDefault();
  if (e.target.tagName.toLowerCase() !== "a") return;

  console.log("Main menu target of click:");
  console.log(e.target);

  // 5.3
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }

  // 5.4
  topMenuLinks.forEach((el) => {
    console.log(el);
    el.classList.remove("active");
  });

  // 5.5
  e.target.classList.add("active");

  // 5.6
  let text = e.target.textContent;
  let menuLink = menuLinks.find(
    (link) => text.toLowerCase() === link.text.toLowerCase()
  );

  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  // 5.7
  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }
});

// 5.8
function buildSubMenu(subLinksArr) {
  subMenuEl.innerHTML = "";
  subLinksArr.forEach((subLink) => {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", subLink.href);
    anchor.textContent = subLink.text;
    subMenuEl.append(anchor);
  });
}

// 6.0 - 6.4
subMenuEl.addEventListener("click", (e) => {
  // 6.0
  e.preventDefault();
  if (e.target.tagName.toLowerCase() !== "a") return;

  console.log("Submenu target of click:");
  console.log(e.target);

  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  // 6.2
  topMenuLinks.forEach((el) => {
    console.log(el);
    el.classList.remove("active");
  });

  // 6.3
  mainEl.innerHTML = "<h1>" + e.target.textContent + "</h1>";

  // 6.4 - verify contents of main element change when clicking submenu item
});
