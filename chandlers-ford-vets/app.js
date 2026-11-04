(function () {
  var SURGERIES = [
    { id: "chandlers-ford", name: "Chandlers Ford Surgery", phone: "023 8025 2543", tel: "02380252543", email: "reception@chandlersfordvets.co.uk",
      addr: ["47A Winchester Road", "Chandler's Ford, Eastleigh", "SO53 2GF"],
      hours: [["Monday to Friday", "8.30am to 7pm"], ["Saturday", "8.30am to 1pm"], ["Sunday", "Closed"]] },
    { id: "boyatt-wood", name: "Boyatt Wood Surgery", phone: "023 8062 9050", tel: "02380629050", email: "reception@boyattwoodvets.co.uk",
      addr: ["Chesil House, Arrow Close", "Boyatt Wood, Eastleigh", "SO50 4SY"],
      hours: [["Monday to Friday", "8.30am to 6.30pm"], ["Saturday", "Closed"], ["Sunday", "Closed"]] },
    { id: "village-vets", name: "Village Vets", phone: "023 8026 8001", tel: "02380268001", email: "reception@thevillagevets.co.uk",
      addr: ["5 Pilgrims Close", "Chandler's Ford, Eastleigh", "SO53 4ST"],
      hours: [["Monday to Friday", "8am to 6.30pm"], ["Saturday", "Closed"], ["Sunday", "Closed"]] }
  ];
  /* CONFIRM: Saturday hours. The old site showed both 1pm and 3.30pm for Chandlers Ford. */

  var SERVICES = [
    ["Consultations", "Appointments with a vet for illness, injury or any worry about your pet.", "M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z"],
    ["Vaccinations", "Puppy, kitten and booster vaccinations to keep your pet protected all year.", "M18 2l4 4M15 5l4 4M14 6l-8.5 8.5L4 20l5.5-1.5L18 10M9 11l4 4"],
    ["Dental care clinics", "Checks, scale and polish and extractions to deal with a very common problem.", "M7 3c-2 0-4 2-4 5 0 4 2 5 2.5 9 .3 2 1 4 2.5 4 1.2 0 1.5-2 2-4 .3-1 1.7-1 2 0 .5 2 .8 4 2 4 1.5 0 2.2-2 2.5-4C17 13 21 12 21 8c0-3-2-5-4-5-2 0-3 1-5 1S9 3 7 3z"],
    ["Surgery", "Full operating facilities for routine neutering through to more complex procedures.", "M4 20l9-9M14 4l6 6-5 5-6-6zM9 15l-3 3"],
    ["Radiology and lab", "In-house X-ray and laboratory facilities for quicker answers.", "M4 4h16v16H4zM8 8h8M8 12h8M8 16h5"],
    ["Microchipping", "Quick microchipping so a lost pet can be traced straight back to you.", "M6 6h12v12H6zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"],
    ["Pet passports", "Paperwork and health checks for pets travelling abroad.", "M5 3h12a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 0-2zM9 8h6M9 12h6"],
    ["Puppy parties", "Get the basics right from day one with friendly advice for new owners.", "M5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 11c-3 0-6 4-6 7 0 2 2 3 3 3 1.5 0 2-1 3-1s1.5 1 3 1c1 0 3-1 3-3 0-3-3-7-6-7z"],
    ["Weight clinics", "Support and a plan to help your pet reach a healthy weight.", "M4 7h16l-2 13H6zM9 7a3 3 0 0 1 6 0"]
  ];
  window.CFV = { SURGERIES: SURGERIES, SERVICES: SERVICES };

  var page = document.body.getAttribute("data-page");
  var NAV = [["index.html", "Home", "home"], ["services.html", "Services and prices", "services"], ["about.html", "About and team", "about"], ["contact.html", "Contact and register", "contact"]];

  var mark = '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" rx="12" fill="#1d4a3c"/><g fill="#f4c7ba"><ellipse cx="14" cy="17" rx="3.2" ry="4"/><ellipse cx="22" cy="13.5" rx="3.2" ry="4"/><ellipse cx="30" cy="17" rx="3.2" ry="4"/></g><path d="M22 21c-4.6 0-8.5 5-8.5 8.6 0 2.6 2.2 3.6 4 3.6 2 0 2.7-1.2 4.5-1.2s2.5 1.2 4.5 1.2c1.8 0 4-1 4-3.6C30.5 26 26.6 21 22 21z" fill="#e2725b"/></svg>';
  var brand = '<a class="brand" href="index.html" aria-label="Chandlers Ford Vets home">' + mark + '<span><b>Chandlers Ford Vets</b><small>Chandlers Ford, Boyatt Wood and Village Vets</small></span></a>';
  var banner = '<div class="preview-banner">Concept preview by Rebuildery. Not the official Chandlers Ford Vets website.</div>';
  var top = '<div class="topbar"><div class="wrap">' + SURGERIES.map(function (s) {
    return '<a href="tel:' + s.tel + '">' + s.name.replace(" Surgery", "") + ': <b>' + s.phone + '</b></a>';
  }).join("") + '</div></div>';
  var links = NAV.map(function (n) { return '<li><a href="' + n[0] + '"' + (n[2] === page ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a></li>"; }).join("");
  var header = banner + top + '<header class="site-header"><div class="wrap nav">' + brand +
    '<ul class="menu" id="menu">' + links + '</ul>' +
    '<div class="nav-cta"><a class="btn btn-primary" href="contact.html#register">Join the waiting list</a>' +
    '<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button></div></div></header>';

  var footer = '<footer><div class="wrap"><div class="foot">' +
    '<div>' + brand + '<p style="margin-top:16px;max-width:36ch">An independent, family run practice caring for pets in Eastleigh since 1958, owned and run by Clare and Beyers van Niekerk.</p></div>' +
    SURGERIES.map(function (s) {
      return '<div><h4>' + s.name + '</h4><ul><li>' + s.addr.join("<br>") + '</li><li><a href="tel:' + s.tel + '">' + s.phone + '</a></li><li><a href="mailto:' + s.email + '">Email reception</a></li></ul></div>';
    }).join("") +
    '</div><div class="foot-base"><span>&copy; ' + new Date().getFullYear() + ' BCVN Ltd, trading as Chandlers Ford Vets. Company no. 09973996.</span><span>Out of hours: Vets Now <a href="tel:01962808306">01962 808306</a></span></div></div></footer>' +
    '<a class="float-call" href="tel:02380252543" aria-label="Call Chandlers Ford Vets">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg> Call us</a>';

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  var burger = document.querySelector(".burger"), menu = document.getElementById("menu");
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  function icon(d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="#1d4a3c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>'; }

  document.querySelectorAll("[data-services]").forEach(function (el) {
    var n = parseInt(el.getAttribute("data-services"), 10) || SERVICES.length;
    el.innerHTML = SERVICES.slice(0, n).map(function (s) {
      return '<article class="svc reveal"><div class="ico">' + icon(s[2]) + '</div><h3>' + s[0] + '</h3><p>' + s[1] + '</p></article>';
    }).join("");
  });

  document.querySelectorAll("[data-surgeries]").forEach(function (el) {
    el.innerHTML = SURGERIES.map(function (s, i) {
      return '<article class="card surgery reveal" id="' + s.id + '">' + (i === 0 ? '<span class="pill">Open Saturday mornings</span>' : '') +
        '<h3>' + s.name + '</h3><p class="addr">' + s.addr.join(", ") + '</p><ul class="hours">' +
        s.hours.map(function (h) { return '<li><span>' + h[0] + '</span><span>' + h[1] + '</span></li>'; }).join("") + '</ul>' +
        '<div class="actions"><a class="btn btn-green" href="tel:' + s.tel + '">Call ' + s.phone + '</a>' +
        '<a class="btn btn-ghost" style="color:var(--green)" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.addr.join(", ")) + '" target="_blank" rel="noopener">Directions</a></div></article>';
    }).join("");
  });

  var form = document.querySelector("form[data-demo]");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    document.querySelector(".form-ok").style.display = "block";
  });

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: .12 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
