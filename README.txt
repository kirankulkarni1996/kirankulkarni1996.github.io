KIRAN KULKARNI — Personal website
=================================
Open index.html in any modern browser. No build step, no dependencies, no internet needed.

Structure
  index.html          Page content (semantic HTML)
  assets/style.css    Single design system (colour tokens at top of file)
  assets/main.js      Reveals, ticker, cursor, mobile menu, Engineering View
  assets/fonts.css    Local @font-face rules
  assets/fonts/       Bricolage Grotesque, Inter + DM Mono (OFL licence), bundled locally
  assets/hero-e9.jpg  Hero image: your E9 photograph, cropped and colour-graded
                      to the forest palette (used in hero and Engineering View)

Notes
- The 8+ and 4 are the only numerical claims. Email is set in the Contact section (index.html, id="mail",
  data-u / data-d attributes) and assembled by main.js to reduce spam scraping.
- Brand names (BMW, ŠKODA, MG, TVS) are typographic wordmarks shown as
  domain experience only, with a disclaimer. No logos are reproduced.
- To edit colours, change the variables in :root at the top of assets/style.css.
- Engineering View: EXPLORE THE CAR opens it; Esc or the close button exits.
  Zones can be tapped on the drawing or selected from the list.
