(function () {
  var PHONE = "023 8069 4030", TEL = "02380694030", EMAIL = "fairoakdental@hotmail.co.uk";
  var page = document.body.getAttribute("data-page");
  var NAV = [
    ["index.html", "Home", "home"],
    ["treatments.html", "Treatments & fees", "treatments"],
    ["team.html", "Our team", "team"],
    ["contact.html", "Contact", "contact"]
  ];
  var leaf = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#4a1d3f"/><path d="M20 9c5 4 7 9 5 15-1 3-3 5-5 7-2-2-4-4-5-7-2-6 0-11 5-15z" fill="#b9d0bf"/><path d="M20 12v19" stroke="#4a1d3f" stroke-width="1.6"/></svg>';
  var brand = '<a class="brand" href="index.html" aria-label="Fair Oak Dental Practice home">' + leaf + '<span><b>Fair Oak Dental</b><small>Practice, Fair Oak</small></span></a>';

  var banner = '<div class="preview-banner">Concept preview by Rebuildery. Not the official Fair Oak Dental Practice website.</div>';
  var links = NAV.map(function (n) { return '<li><a href="' + n[0] + '"' + (n[2] === page ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a></li>"; }).join("");
  var header = banner + '<header class="site-header"><div class="wrap nav">' + brand +
    '<ul class="menu" id="menu">' + links + '</ul>' +
    '<div class="nav-cta"><a class="nav-phone" href="tel:' + TEL + '">' + PHONE + '</a><a class="btn btn-primary" href="contact.html">Book an appointment</a>' +
    '<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button></div></div></header>';

  var footer = '<footer><div class="wrap"><div class="foot">' +
    '<div>' + brand + '<p style="margin-top:16px;font-size:.92rem;max-width:34ch">Caring, modern dentistry in the heart of Fair Oak village for over thirty years.</p></div>' +
    '<div><h4>Visit</h4><ul><li>1 Campbell Way</li><li>Fair Oak, Eastleigh</li><li>SO50 7AX</li></ul></div>' +
    '<div><h4>Contact</h4><ul><li><a href="tel:' + TEL + '">' + PHONE + '</a></li><li><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></li></ul></div>' +
    '<div><h4>Practice</h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") + '</ul></div>' +
    '</div><div class="foot-base"><span>&copy; ' + new Date().getFullYear() + ' Fair Oak Dental Practice. Regulated by the Care Quality Commission.</span><span>Privacy notice available at the practice</span></div></div></footer>' +
    '<a class="float-call" href="tel:' + TEL + '">Call the practice</a>';

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  var burger = document.querySelector(".burger"), menu = document.getElementById("menu");
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  var form = document.querySelector("form.contact");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = form.querySelector(".form-ok");
    ok.style.display = "block";
    ok.textContent = "Thank you. This is a preview, so nothing was sent. On the live site your request goes straight to the practice.";
  });

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add("in"); }); }
})();
