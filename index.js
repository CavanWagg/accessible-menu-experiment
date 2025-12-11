import accessibleMenu from "https://esm.sh/accessible-menu@4.2.0";

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
  });

  console.log("nav:", nav);
  console.log("menuElement:", menuElement);
  console.log("controllerElement:", controllerElement);
});
