# Resume

A single-page HTML/CSS resume with interactive features and print support.

**Live:** [keivanzavari.github.io/resume](https://keivanzavari.github.io/resume/)

## Features

- Responsive layout (desktop, tablet, mobile)
- Print / PDF export via built-in print button (A4 optimized)
- Scroll-triggered fade-in animations
- Hover effects on highlight cards and experience entries
- Gradient accents and polished typography

## Structure

```
index.html            Main document
css/
  style.css           Core styles, animations, print rules
  responsive.css      Breakpoint overrides
  font.css            Custom icon font
  pace-theme-flash.css  Loading bar theme
fonts/                Custom icon font files
images/               Avatar, favicon
js/
  common.js           Print, scroll reveal (IntersectionObserver)
  jquery-2.1.1.min.js jQuery core
  jQuery.print.js     Print plugin
  jquery.transit.min.js  CSS transition helpers
  pace.min.js         Page loading progress bar
```

## Usage

Open `index.html` in a browser. Click **print** (top-right) to generate a PDF.

## Credits

Originally forked from an open-source resume template; since heavily rewritten.
