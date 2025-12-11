# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Simple HTML/CSS/JS demo of an accessible navigation menu using the `accessible-menu` library (v4.2.0). No build system or package manager - all dependencies loaded via CDN/ESM.

## Architecture

- **index.html**: Single-page structure with nested navigation (`#main-nav`)
  - Uses semantic nav structure with `ul/li` dropdowns
  - Grid layout: logo (col 1), "Apply Now" button (col 2), hamburger trigger (col 3)
  - Main nav spans full width on mobile (row 2)

- **index.js**: Initializes `DisclosureMenu` from accessible-menu library
  - Uses ESM import from esm.sh CDN
  - Key selectors: `#example-menu` (container), `#main-nav` (menu), `#trigger` (controller)
  - `.dropdown` class marks submenu items

- **index.css**: Mobile-first responsive styles
  - CSS Grid for nav layout (90px header row + auto content row)
  - Three menu depth levels with distinct styling (`.menu-depth-2`, `.menu-depth-3`)
  - ARIA-aware styles: `a[aria-expanded="true"]` toggles arrow icons
  - Desktop styles commented out

## Running the Project

Open `index.html` directly in a browser (no build/dev server required).

## Key Implementation Details

- Font Awesome 5.9.0 used for icons (angle-right/angle-down)
- Montserrat Google Font
- Color scheme: Primary `#3b4c58`, Accent `#a30721`
- Accessible menu handles keyboard navigation and ARIA attributes automatically
