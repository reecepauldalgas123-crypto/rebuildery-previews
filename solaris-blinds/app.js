(function(){
  var PHONE='023 8077 2600', TEL='+442380772600';
  var EMAIL='info@solarisblinds.co.uk';
  var ADDRESS='9 Walsingham Gardens, Southampton SO18 2QD';
  var sv=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var I={
    brush:sv('<path d="M18 2l4 4-9 9-4-4z"/><path d="M9 11l-3 1c-2 1-2 4-4 6 3 1 7 1 9-2l1-2"/>'),
    roller:sv('<rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h3v5h-9v3"/><rect x="10" y="14" width="4" height="8" rx="1"/>'),
    spray:sv('<rect x="7" y="9" width="8" height="13" rx="2"/><path d="M9 9V6h4v3M13 6h3M19 4h.01M19 7h.01M21 5.5h.01"/>'),
    wall:sv('<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 15h18M9 4v5M15 9v6M9 15v5"/>'),
    building:sv('<path d="M4 21V5l8-3 8 3v16"/><path d="M9 21v-5h6v5M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01"/>'),
    phone:sv('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    insert:sv('<path d="M12 3 21 19H3z"/><circle cx="12" cy="14" r="2.2"/>'),
    diamond:sv('<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18M15 3l-3 18"/>'),
    square:sv('<rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(8 12 12)"/><circle cx="12" cy="12" r="2.2"/>'),
    groove:sv('<path d="M3 7h18v10H3z"/><path d="M9 7v6h6V7"/>'),
    wheel:sv('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 3v6.5M12 14.5V21M3.5 9l6.2 2.2M14.3 12.8l6.2 2.2M5.5 18.5l4.6-4.7M13.9 10.2l4.6-4.7"/>'),
    cog:sv('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
    pencil:sv('<path d="M3 21l3.5-1 12-12-2.5-2.5-12 12z"/><path d="M14.5 5.5l2.5 2.5M3 17v4h4"/>'),
    box:sv('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>'),
    spark:sv('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
    award:sv('<circle cx="12" cy="8" r="6"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9"/>'),
    factory:sv('<path d="M2 21V10l6 4V10l6 4V6l8 4v11z"/><path d="M6 17h2M11 17h2M16 17h2"/>'),
    blind:sv('<path d="M3 3h18"/><rect x="5" y="3" width="14" height="15" rx="1"/><path d="M5 7h14M5 11h14M5 15h14M12 18v3"/>'),
    vertical:sv('<path d="M3 3h18"/><path d="M6 3v17M10 3v17M14 3v17M18 3v17"/>'),
    roman:sv('<path d="M3 3h18"/><path d="M5 3v8c2 2 12 2 14 0V3M5 11c2 3 12 3 14 0M5 14c2 3 12 3 14 0"/>'),
    pleat:sv('<path d="M3 3h18M3 21h18"/><path d="M5 3 19 7 5 11 19 15 5 19"/>'),
    awning:sv('<path d="M3 4h18l-2 7H5z"/><path d="M5 11c0 2 2 2 2 0 0 2 3 2 3 0 0 2 4 2 4 0 0 2 3 2 3 0 0 2 2 2 2 0M5 11v10M19 11v10"/>'),
    shutter:sv('<rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/><path d="M5 7h4M5 10h4M5 13h4M5 16h4M15 7h4M15 10h4M15 13h4M15 16h4"/>'),
    swatch:sv('<rect x="3" y="3" width="7" height="18" rx="2"/><path d="M10 7l5-3 6 10-11 7"/><circle cx="6.5" cy="17" r="1"/>'),
    sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    ruler:sv('<rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>'),
    home:sv('<path d="M3 11 12 3l9 8"/><path d="M5 10v11h14V10M10 21v-6h4v6"/>'),
    menu:sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    pin:sv('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    mail:sv('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    check:sv('<path d="M20 6 9 17l-5-5"/>'),
    clock:sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    snow:sv('<path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M9 4l3 2 3-2M9 20l3-2 3 2"/>'),
    fan:sv('<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 4-7 2 0 3 2 1.5 4L13.6 10.6M14 12c4 0 7 1 7 4 0 2-2 3-4 1.5l-3.6-3.9M12 14c0 4-1 7-4 7-2 0-3-2-1.5-4l3.9-3.6M10 12c-4 0-7-1-7-4 0-2 2-3 4-1.5l3.6 3.9"/>'),
    flame:sv('<path d="M12 22c4 0 7-3 7-7 0-5-4-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z"/>'),
    pipe:sv('<path d="M3 8h8a3 3 0 0 1 3 3v10M7 8V4M3 4v8M10 21h8M14 21v-3"/>'),
    drop:sv('<path d="M12 2.7 6.3 9.2a7.5 7.5 0 1 0 11.4 0z"/>'),
    shield:sv('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
    bulb:sv('<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/>'),
    network:sv('<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>'),
    bell:sv('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'),
    battery:sv('<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M7 10l-1 2h4l-1 2"/>'),
    gauge:sv('<path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>'),
    grad:sv('<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>'),
    layers:sv('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>')
  };

  var SERVICES=[
    {id:'vertical',icon:'vertical',name:'Vertical blinds',short:'Simple and versatile, ideal for large windows, patio doors, conservatories and offices.'},
    {id:'roller',icon:'blind',name:'Roller blinds',short:'Functional and stylish, fitted on their own or to complement existing curtains.'},
    {id:'venetian',icon:'layers',name:'Venetian blinds',short:'Sleek wood and aluminium designs that give easy control over light and privacy.'},
    {id:'roman',icon:'roman',name:'Roman blinds',short:'A soft, elegant look in bold colours and textures, ideal for bedrooms and lounges.'},
    {id:'pleated',icon:'pleat',name:'Pleated blinds',short:'Perfect for conservatories and skylights, semi-opaque or full blackout.'},
    {id:'awnings',icon:'awning',name:'Awnings and canopies',short:'Motorised or manual shade for the outside of your home or business.'},
    {id:'shutters',icon:'shutter',name:'Shutters',short:'Interior shutters for privacy, light control and a clean, bright look.'}
  ];
  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['products.html','Blinds','products'],['about.html','About','about'],['contact.html','Contact','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="Solaris Blinds home"><span class="logo-mark">'+I.sun+'</span><span class="logo-text">Solaris Blinds<small>Southampton, since 1967</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-oak" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.sun+'</span><span class="logo-text">Solaris Blinds<small>Southampton, since 1967</small></span></a><p style="margin-top:16px;max-width:320px">Blind suppliers and installers in Southampton since 1967, for homes and businesses across Southampton and Portsmouth.</p></div>'+
    '<div><h4>Blinds</h4><ul>'+SERVICES.map(function(s){return '<li><a href="products.html#'+s.id+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Talk to us</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li><a href="contact.html#enquiry">Ask for a free quotation</a></li></ul></div>'+
    '<div><h4>Find us</h4><ul><li>'+ADDRESS+'</li><li>Southampton, Portsmouth and the surrounding area</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' Solaris Blinds Ltd. Company no. 07201339.</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call Solaris Blinds">'+I.phone+'</a>';

  var bn=document.querySelector('.preview-banner');
  if(bn){bn.insertAdjacentHTML('afterend',header);}else{document.body.insertAdjacentHTML('afterbegin',header);}
  document.body.insertAdjacentHTML('beforeend',footer);

  var b=document.querySelector('.burger'),m=document.querySelector('.mobile-menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});

  document.querySelectorAll('[data-services]').forEach(function(el){
    el.innerHTML=SERVICES.map(function(s){
      return '<a class="card reveal" href="products.html#'+s.id+'" style="text-decoration:none"><div class="ic">'+I[s.icon]+'</div><h3>'+s.name+'</h3><p>'+s.short+'</p><span class="more">Find out more</span></a>';
    }).join('');
  });
  document.querySelectorAll('[data-icon]').forEach(function(el){el.innerHTML=I[el.getAttribute('data-icon')]||'';});
  document.querySelectorAll('[data-tel]').forEach(function(el){el.setAttribute('href','tel:'+TEL);});

  var f=document.querySelector('form.quote-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview site. On the live site your enquiry would go straight to Solaris Blinds.';});}

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
})();
