import accessibleMenu from "https://esm.sh/accessible-menu@4.2.2";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menuElement = nav.querySelector("ul");
  const controllerElement = nav.querySelector("button");

  const menu = new accessibleMenu.DisclosureMenu({
    menuElement,
    submenuItemSelector: ".dropdown",
    containerElement: nav,
    controllerElement,
    optionalKeySupport: true,
    hoverType: "on", // "on", "off"
  });
});
