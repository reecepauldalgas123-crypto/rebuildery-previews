(function(){
  var PHONE='01489 583572', TEL='+441489583572';
  var EMAIL='admin@rkmarine.co.uk';
  var ADDRESS='Hamble River Boatyard, Bridge Road, Swanwick, Southampton SO31 7EB';
  var SHOP='https://shop.rkmarine.co.uk';
  var sv=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var I={
    phone:sv('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    boat:sv('<path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M4 15 3 11h18l-2 4"/><path d="M8 11V6h6l3 5"/>'),
    anchor:sv('<circle cx="12" cy="5" r="2"/><path d="M12 7v14"/><path d="M5 13a7 7 0 0 0 14 0"/><path d="M8 10h8"/>'),
    lift:sv('<path d="M4 21V5h16v16"/><path d="M4 5l3-3h10l3 3"/><path d="M9 5v6M15 5v6"/><path d="M7 14c2 1.5 8 1.5 10 0l-1 3H8z"/>'),
    brush:sv('<path d="M14 4l6 6-8 8-6-6z"/><path d="M6 12l-3 3a2 2 0 0 0 0 3l3 3a2 2 0 0 0 3 0l3-3"/>'),
    store:sv('<path d="M3 21h18"/><path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/>'),
    engine:sv('<rect x="5" y="8" width="12" height="9" rx="1"/><path d="M8 8V5h6v3M17 11h3v4h-3M5 12H2M9 17v3h4v-3"/>'),
    wrench:sv('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),
    search:sv('<circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/>'),
    cog:sv('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
    van:sv('<path d="M2 7h11v9H2zM13 10h5l3 3v3h-8z"/><circle cx="6" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'),
    cart:sv('<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>'),
    menu:sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    pin:sv('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    mail:sv('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    check:sv('<path d="M20 6 9 17l-5-5"/>'),
    clock:sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    award:sv('<circle cx="12" cy="8" r="6"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9"/>'),
    plug:sv('<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>'),
    lock:sv('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>')
  };
  window.RK_ICONS=I;

  var SERVICES=[
    {id:'engineering',icon:'engine',name:'Marine engine servicing and repairs',short:'Servicing, fault diagnosis, repairs, full overhauls and repowering for engines, gearboxes and drives, in our workshop or on your boat.'},
    {id:'lifting',icon:'lift',name:'Boat lifting and transport',short:'Lifting and transportation options for motor boats and yachts at our Swanwick and Warsash boatyards.'},
    {id:'storage',icon:'store',name:'Boat storage ashore',short:'Under cover and hard standing storage, so your boat is safe and ready for maintenance over the winter.'},
    {id:'antifouling',icon:'brush',name:'Antifouling',short:'A competitively priced antifouling service to get your hull ready for the season.'},
    {id:'berthing',icon:'anchor',name:'Berthing on the Hamble',short:'45 deep water berths at Swanwick for motor boats up to 60 foot, with electricity, water, toilets and showers.'},
    {id:'parts',icon:'cog',name:'Parts shop and web shop',short:'Volvo Penta parts and accessories over the counter at Swanwick, or delivered to your door from our web shop.'}
  ];
  window.RK_SERVICES=SERVICES;

  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['services.html','Services','services'],['about.html','Our boatyards','about'],['contact.html','Contact','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="R.K. Marine home"><span class="logo-mark">'+I.anchor+'</span><span class="logo-text">R.K. Marine<small>Boatyards on the River Hamble</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-oak" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="'+SHOP+'" target="_blank" rel="noopener">Web shop</a><a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.anchor+'</span><span class="logo-text">R.K. Marine<small>Swanwick and Warsash</small></span></a><p style="margin-top:16px;max-width:320px">Boatyard services and marine engineering for motor boat and yacht owners on the River Hamble for over 50 years. Open Monday to Friday, 8am to 4.30pm.</p></div>'+
    '<div><h4>Services</h4><ul>'+SERVICES.map(function(s){return '<li><a href="services.html#'+s.id+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Call the right team</h4><ul><li>Boatyard: <a href="tel:+441489556917">01489 556917</a></li><li>Servicing: <a href="tel:+441489556912">01489 556912</a></li><li>Parts and engine sales: <a href="tel:+441489583585">01489 583585</a></li><li>General: <a href="tel:'+TEL+'">'+PHONE+'</a></li></ul></div>'+
    '<div><h4>Head office</h4><ul><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li>'+ADDRESS+'</li><li><a href="'+SHOP+'" target="_blank" rel="noopener">Visit the web shop</a></li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' R.K. Marine Ltd. Registered in England and Wales, company no. 02226134.</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call R.K. Marine">'+I.phone+'</a>';

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
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview site. On the live site your request would go straight to R.K. Marine.';});}

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
})();
