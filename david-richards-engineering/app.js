(function(){
  var PHONE='01489 790900', TEL='+441489790900';
  var EMAIL='sales@dreng.co.uk';
  var ADDRESS='Unit 7B Herald Industrial Estate, Hedge End, Southampton SO30 2JW';
  var sv=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var I={
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
    menu:sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    pin:sv('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    mail:sv('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    check:sv('<path d="M20 6 9 17l-5-5"/>'),
    clock:sv('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
    layers:sv('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>')
  };

  var SERVICES=[
    {id:'hard-steel',icon:'insert',name:'Machining hard steel (PCBN)',short:'Low and high CBN content grades for turning hardened steels, from light finishing cuts to heavier hard turning.'},
    {id:'cast-iron',icon:'square',name:'Machining cast iron',short:'PCBN tools as a cost effective, highly productive alternative to hard metal or ceramic tools on abrasive cast irons.'},
    {id:'pcd',icon:'diamond',name:'Polycrystalline diamond (PCD)',short:'DR-PCD and multimodal DR-PCD tools for longer tool life and faster cutting on non-ferrous and abrasive materials.'},
    {id:'grooving',icon:'groove',name:'Grooving and boring',short:'Tools for grooving and boring hardened steel and other demanding materials, standard or made to suit.'},
    {id:'alloy-wheels',icon:'wheel',name:'Alloy wheel machining',short:'PCD tooling for the alloy wheel refurbishment lathes used by wheel repairers, large and small.'},
    {id:'custom',icon:'pencil',name:'Custom tooling and inserts',short:'Special tools, tool holders and inserts designed and made to suit your component, machine and material.'}
  ];

  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['products.html','Products','products'],['about.html','About us','about'],['contact.html','Contact','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="David Richards Engineering home"><span class="logo-mark">'+I.insert+'</span><span class="logo-text">David Richards<small>Ultra hard cutting tools</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-oak" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.insert+'</span><span class="logo-text">David Richards<small>Engineering Ltd</small></span></a><p style="margin-top:16px;max-width:320px">PCBN and PCD cutting tools, inserts and special tooling, designed and made in Hedge End, Southampton since 1989.</p></div>'+
    '<div><h4>Products</h4><ul>'+SERVICES.map(function(s){return '<li><a href="products.html#'+s.id+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Talk to us</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li><a href="contact.html">Send an enquiry</a></li></ul></div>'+
    '<div><h4>Find us</h4><ul><li>'+ADDRESS+'</li><li>Hedge End, close to the M27</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' David Richards Engineering Ltd. Registered in England and Wales, company no. 02340880.</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call David Richards Engineering">'+I.phone+'</a>';

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
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview site. On the live site your enquiry would go straight to David Richards Engineering.';});}

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
})();
