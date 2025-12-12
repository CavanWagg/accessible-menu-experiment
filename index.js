import accessibleMenu from "https://esm.sh/accessible-menu@4.2.2";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menuElement = nav.querySelector("#main-nav");
  const controllerElement = nav.querySelector("button");

  const menuInstance = new accessibleMenu.DisclosureMenu({
    menuElement,
    submenuItemSelector: ".dropdown",
    containerElement: nav,
    controllerElement,
    optionalKeySupport: true,
    hoverType: "on",
  });

  console.log("nav:", nav);
  console.log("menuElement:", menuElement);
  console.log("controllerElement:", controllerElement);
});
