(function(){
  var PHONE='023 9260 1110', TEL='+442392601110';
  var EMAIL='farehamglass@hotmail.co.uk';
  var ADDRESS='Unit D1, Heritage Business Park, Heritage Way, Gosport, Hampshire PO12 4BG';
  var sv=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var I={
    phone:sv('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    plane:sv('<path d="M3 17l10-10 4 4-10 10H3z"/><path d="M13 7l2-2a2 2 0 0 1 3 0l1 1a2 2 0 0 1 0 3l-2 2"/><path d="M6 14l4 4"/>'),
    shop:sv('<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v8h14v-8"/><path d="M10 21v-5h4v5"/>'),
    door:sv('<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M8 5h8v6H8zM8 14h8v5H8"/><circle cx="15.5" cy="12.5" r=".6"/>'),
    window:sv('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/>'),
    kitchen:sv('<rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 14h18M9 10v11M15 10v11M5 3h14v4H5z"/>'),
    shelf:sv('<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M4 8h16M4 14h16M8 4v3M11 10v3M15 16v4"/>'),
    cad:sv('<path d="M3 21h18"/><path d="M6 21V8l6-5 6 5v13"/><path d="M10 21v-6h4v6"/><path d="M3 3l3 3"/>'),
    menu:sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    pin:sv('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    mail:sv('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    check:sv('<path d="M20 6 9 17l-5-5"/>'),
    award:sv('<circle cx="12" cy="8" r="6"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9"/>'),
    clock:sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    ruler:sv('<path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"/><path d="m7.5 10.5 2-2M10.5 13.5l2-2M13.5 16.5l2-2"/>'),
    pane:sv('<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M7 7l4-2M7 11l7-4M14 17l3-2"/>'),
    mirror:sv('<ellipse cx="12" cy="10" rx="6" ry="8"/><path d="M9 7l3-2M9 10l5-3M12 18v3M8 21h8"/>'),
    bolt:sv('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    roof:sv('<path d="M2 12 12 4l10 8"/><path d="M4 11v9h16v-9"/><path d="M2 20h20"/>'),
    star:sv('<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'),
    card:sv('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>'),
    build:sv('<path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M9 20v-6h6v6"/>')
  };
  window.FG_ICONS=I;

  var SERVICES=[
    {id:'repairs',icon:'bolt',name:'Glass repairs and emergency glazing',short:'Broken or damaged glass in windows and doors replaced, using safety and toughened glass where it is needed.'},
    {id:'misted',icon:'pane',name:'Misted and fogged double glazing',short:'Replacement double glazed units for misted or fogged windows, so you keep your frames and lose the condensation.'},
    {id:'windows',icon:'window',name:'uPVC windows, doors and conservatories',short:'Supply and installation of uPVC windows and doors, patio and sliding doors, conservatories and orangeries.'},
    {id:'timber',icon:'door',name:'Wooden and sash windows',short:'Installation and repair of wooden windows, including traditional wooden sash windows.'},
    {id:'cut',icon:'mirror',name:'Mirrors, splashbacks and cut glass',short:'Mirrors, glass shelving, table tops, kitchen and bathroom splashbacks, balustrades and greenhouse glass, all cut to size.'},
    {id:'roofline',icon:'roof',name:'Fascias, soffits and guttering',short:'uPVC fascias, soffits, guttering and cladding, plus a full carpentry service so you do not need another trade.'}
  ];
  window.FG_SERVICES=SERVICES;

  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['services.html','Glazing services','services'],['reviews.html','Reviews','reviews'],['contact.html','Contact','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="Fareham Glass home"><span class="logo-mark">'+I.pane+'</span><span class="logo-text">Fareham Glass<small>Glass and glazing, Gosport</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-oak" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.pane+'</span><span class="logo-text">Fareham Glass<small>Heritage Business Park, Gosport</small></span></a><p style="margin-top:16px;max-width:320px">Traditional glass and glazing for homes and businesses across Fareham, Gosport, Havant and Southampton. Open Monday to Friday, 8am to 4pm.</p></div>'+
    '<div><h4>Glazing services</h4><ul>'+SERVICES.map(function(s){return '<li><a href="services.html#'+s.id+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Pages</h4><ul>'+links.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Get in touch</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li>'+ADDRESS+'</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' Fareham Glass Ltd. Registered in England and Wales, company no. 07800475. Part of the Richardson Group.</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call Fareham Glass">'+I.phone+'</a>';

  var bn=document.querySelector('.preview-banner');
  if(bn){bn.insertAdjacentHTML('afterend',header);}else{document.body.insertAdjacentHTML('afterbegin',header);}
  document.body.insertAdjacentHTML('beforeend',footer);

  var b=document.querySelector('.burger'),m=document.querySelector('.mobile-menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});

  document.querySelectorAll('[data-services]').forEach(function(el){
    el.innerHTML=SERVICES.map(function(s){
      return '<a class="card reveal" href="services.html#'+s.id+'" style="text-decoration:none"><div class="ic">'+I[s.icon]+'</div><h3>'+s.name+'</h3><p>'+s.short+'</p><span class="more">Find out more</span></a>';
    }).join('');
  });
  document.querySelectorAll('[data-icon]').forEach(function(el){el.innerHTML=I[el.getAttribute('data-icon')]||'';});
  document.querySelectorAll('[data-tel]').forEach(function(el){el.setAttribute('href','tel:'+TEL);});

  var f=document.querySelector('form.quote-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview site. On the live site your message would go straight to Fareham Glass.';});}

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
})();
