/* ============================================================================
   SLEEK — IMAGE & CONTENT MANAGER
   ----------------------------------------------------------------------------
   This is the ONLY file you edit to add / remove / reorder images.
   You do NOT need to touch Sleek.html.

   HOW TO ADD IMAGES
   1. Put your image files in the  images/  folder.
        • Export them web-sized: about 2000–2500px on the long edge, JPG.
        • Keep file names simple and lowercase, e.g.  desert-convoy.jpg
   2. Add a line to the list below (copy an existing line, change the values).
   3. Save. The site updates automatically — order here = order on the page.

   CATEGORY CODES (used by the filter buttons):
        env  = Environments
        veh  = Vehicles
        char = Characters
        key  = Keyframes
   ========================================================================== */


/* ----------------------------------------------------------------------------
   HERO SLIDESHOW
   The big full-bleed images that cycle at the top of the page.
   • An entry that looks like a file path (e.g. "images/foo.jpg") shows that image.
   • An entry that's plain text shows a placeholder slot with that label —
     handy to keep the slideshow cycling until you've added the real image.
   List them in the order you want them to appear. Add as many as you like.
   Leave the list empty [] to hide the slideshow.
---------------------------------------------------------------------------- */
window.HERO_SLIDES = [
  "images/Futurist_PS INAUGURA.png",
  "images/project-formula-1/Formula 1.png",
  "images/project-temple/project-temple.jpg",
];


/* ----------------------------------------------------------------------------
   GALLERY GRID
   Each { ... } block is one image card. Copy a block to add another.
     title    : the piece name shown on hover
     project  : the project / client it belongs to
     category : the label shown on the card (free text)
     cat      : the filter code — one of: env / veh / char / key
     year     : the year
     thumb    : the image file shown in the grid (web-sized JPG)
     full     : (optional) a higher-res file shown when the card is clicked.
                If you omit "full", the thumb image is used.
---------------------------------------------------------------------------- */
window.GALLERY = [
  /* ---- Placeholder cards below. Replace these with your own images,
          or delete the ones you don't need. ---- */
  { title: "Formula 1 Wind Tunnel", project: "Futurist", category: "Environment", cat: "env", year: "2026", thumb: "images/project-formula-1/Formula 1.png", full: "images/project-formula-1/Formula 1.png",
    series: [
      { thumb: "images/project-formula-1/Formula 2.png", full: "images/project-formula-1/Formula 2.png" },
      { thumb: "images/project-formula-1/Formula 3.png", full: "images/project-formula-1/Formula 3.png" },
    ]
  },
  { title: "PS Inaugura", project: "Futurist", category: "Keyframe", cat: "key", year: "2026", thumb: "images/Futurist_PS INAUGURA.png", full: "images/Futurist_PS INAUGURA.png" },
  { title: "Temple", project: "Futurist", category: "Environment", cat: "env", year: "2026", thumb: "images/project-temple/project-temple.jpg", full: "images/project-temple/project-temple.jpg" },
  { title: "Drowned Cathedral", project: "Project Tidewall", category: "Environment", cat: "env", year: "2025" },
  { title: "Hauler Class-VII",  project: "Orbital",          category: "Vehicle",     cat: "veh", year: "2025" },
  { title: "Ash Pilgrim",       project: "Emberfall",        category: "Character",   cat: "char", year: "2024" },
  { title: "Skybridge — Dawn",  project: "Project Tidewall", category: "Keyframe",    cat: "key", year: "2025" },
  { title: "Foundry District",  project: "Orbital",          category: "Environment", cat: "env", year: "2024" },
  { title: "Scout Drone Mk.II", project: "Emberfall",        category: "Vehicle",     cat: "veh", year: "2024" },
  { title: "Glass Wastes",      project: "Untitled Feature", category: "Environment", cat: "env", year: "2026" },
  { title: "The Cartographer",  project: "Emberfall",        category: "Character",   cat: "char", year: "2025" },
  { title: "Last Light Convoy", project: "Untitled Feature", category: "Keyframe",    cat: "key", year: "2026" },
  { title: "Reactor Spine",     project: "Orbital",          category: "Environment", cat: "env", year: "2024" },
  { title: "Tidewall Breach",   project: "Project Tidewall", category: "Keyframe",    cat: "key", year: "2025" },
];
