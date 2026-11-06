(function(){
  var TEL='01202 601600', TEL_HREF='tel:+441202601600', EMAIL='sales@wessexfabrications.co.uk';

  var SERVICES=[
    {id:'staircases',name:'Metal staircases and fire escapes',short:'Steel stairs, spiral stairs and fire escapes for flats, schools, shops and homes.',art:'stair'},
    {id:'gates',name:'Gates',short:'Single, side, bi-fold and double gates, made to suit your property and budget.',art:'gate'},
    {id:'railings',name:'Railings',short:'Traditional, contemporary and park railings, made and finished in our own workshop.',art:'railing'},
    {id:'handrails',name:'Handrails',short:'Handrails for steps, ramps and paths, including DDA compliant designs.',art:'handrail'},
    {id:'balustrades',name:'Balustrades',short:'Balcony, stair and decking balustrades, galvanised or powder coated.',art:'balustrade'},
    {id:'security',name:'Security grilles and barriers',short:'Window grilles, security gates, barriers, bollards and guard rails.',art:'grille'},
    {id:'garden',name:'Garden items',short:'Pergolas, rose arches, planters, benches, trellis screens and pond covers.',art:'garden'},
    {id:'structural',name:'Structural steelwork',short:'Structural steel and I-beams for small building projects.',art:'beam'}
  ];
  window.WF_SERVICES=SERVICES;

  var S='fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
  var ART={
    gate:'<svg viewBox="0 0 200 150" '+S+'><path d="M20 150V40M180 150V40"/><path d="M14 40h12M174 40h12"/><path d="M28 140h144M28 62q72-44 144 0"/>'+bars(36,164,16,'62','140',true)+'<path d="M100 32v108"/><circle cx="100" cy="98" r="9"/></svg>',
    railing:'<svg viewBox="0 0 200 150" '+S+'><path d="M8 52h184M8 138h184"/>'+bars(16,184,14,'52','138')+'<path d="M0 146h200" stroke-width="2"/></svg>',
    stair:'<svg viewBox="0 0 200 150" '+S+'><path d="M20 140h32v-22h28v-22h28v-22h28v-22h28V30h16"/><path d="M36 118l140-104M36 118v-30M66 96v-30M94 75v-30M122 54v-30M150 34v-24"/><path d="M180 30v110M20 140v4"/></svg>',
    handrail:'<svg viewBox="0 0 200 150" '+S+'><path d="M10 138h60l120-60"/><path d="M14 98h56l116-58"/><path d="M24 98v40M60 98v40M100 80v40M140 60v40M178 42v40"/></svg>',
    balustrade:'<svg viewBox="0 0 200 150" '+S+'><path d="M6 46h188M6 56h188M6 138h188"/>'+bars(18,184,12,'56','138')+'<path d="M6 46v92M194 46v92"/></svg>',
    grille:'<svg viewBox="0 0 200 150" '+S+'><rect x="40" y="16" width="120" height="124" rx="2"/><path d="M40 56h120M40 98h120"/>'+bars(58,144,14,'16','140')+'</svg>',
    garden:'<svg viewBox="0 0 200 150" '+S+'><path d="M40 150V58M160 150V58"/><path d="M28 58q72-70 144 0"/><path d="M40 70q60-50 120 0"/><path d="M60 52v98M80 40v110M100 36v114M120 40v110M140 52v98" stroke-width="2"/><path d="M40 92h120M40 120h120" stroke-width="2"/></svg>',
    beam:'<svg viewBox="0 0 200 150" '+S+'><path d="M30 40h140M30 52h140M30 98h140M30 110h140"/><path d="M30 40v12M170 40v12M30 98v12M170 98v12"/><path d="M94 52v46M106 52v46"/><path d="M40 130h120" stroke-width="2"/></svg>'
  };
  function bars(x0,x1,step,y0,y1,spear){var o='';for(var x=x0;x<=x1;x+=step){o+='<path d="M'+x+' '+y0+'V'+y1+'"/>';if(spear)o+='<path d="M'+(x-3)+' '+(+y0+5)+'l3-6l3 6"/>';}return o}

  function fillArt(root){
    (root||document).querySelectorAll('.art[data-art]').forEach(function(el){
      if(el.dataset.done)return;el.dataset.done=1;
      el.insertAdjacentHTML('afterbegin',ART[el.dataset.art]||ART.railing);
      el.setAttribute('role','img');
      if(!el.getAttribute('aria-label'))el.setAttribute('aria-label','Illustration of '+el.dataset.art+' work');
    });
  }

  var page=document.body.getAttribute('data-page');
  var links=[['index.html','Home','home'],['services.html','Services','services'],['gallery.html','Our work','gallery'],['contact.html','Contact','contact']];
  var phoneIcon='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>';
  var mark='<svg class="brand-mark" viewBox="0 0 42 42" aria-hidden="true"><rect width="42" height="42" rx="8" fill="#e8762b"/><path d="M9 31V15q12-9 24 0v16M15 31V16M21 31V13M27 31V16M9 31h24" fill="none" stroke="#0e1c33" stroke-width="2.6" stroke-linecap="round"/></svg>';

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="brand" href="index.html" aria-label="Wessex Fabrications home">'+mark+'<span class="brand-name">Wessex Fabrications<small>Metalwork in Poole since 1988</small></span></a>'+
    '<nav aria-label="Main"><ul class="menu" id="menu">'+links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' aria-current="page"':'')+'>'+l[1]+'</a></li>'}).join('')+'</ul></nav>'+
    '<div style="display:flex;gap:10px;align-items:center"><a class="nav-call" href="'+TEL_HREF+'">'+phoneIcon+'<span class="num">'+TEL+'</span><span class="sr" style="position:absolute;left:-9999px">Call us</span></a>'+
    '<button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button></div>'+
    '</div></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><h4>Wessex Fabrications</h4><p>Design, fabrication and fitting of gates, railings, stairs, balustrades and bespoke metalwork across Poole, Bournemouth and Dorset since 1988. A corporate member of the Guild of Master Craftsmen.</p></div>'+
    '<div><h4>Services</h4><ul>'+SERVICES.slice(0,6).map(function(s){return '<li><a href="services.html#'+s.id+'">'+s.name+'</a></li>'}).join('')+'</ul></div>'+
    '<div><h4>Contact</h4><ul><li><a href="'+TEL_HREF+'">'+TEL+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li>33 Balena Close, Creekmoor<br>Poole BH17 7EB</li></ul></div>'+
    '</div><div class="legal"><span>&copy; '+new Date().getFullYear()+' Wessex Fabrications (Poole) Ltd. Registered in England and Wales, no. 04303934. Registered office: 33 Balena Close, Poole BH17 7EB.</span><span><a href="contact.html">Get a free quote</a></span></div></div></footer>'+
    '<a class="fab" href="'+TEL_HREF+'" aria-label="Call Wessex Fabrications on '+TEL+'">'+phoneIcon+' Call now</a>';

  var h=document.getElementById('site-header');if(h)h.outerHTML=header;
  var f=document.getElementById('site-footer');if(f)f.outerHTML=footer;

  // service cards
  var grid=document.getElementById('service-grid');
  if(grid){grid.innerHTML=SERVICES.slice(0,6).map(function(s){return '<a class="card reveal" href="services.html#'+s.id+'"><div class="art" data-art="'+s.art+'"><span class="tag">Photo to come</span></div><div class="card-body"><h3>'+s.name+'</h3><p>'+s.short+'</p><span class="card-link">Find out more</span></div></a>'}).join('')}

  fillArt();

  // menu
  var btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
  if(btn&&menu)btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o)});

  // gallery filter
  var fb=document.querySelectorAll('.filter button');
  fb.forEach(function(b){b.addEventListener('click',function(){
    fb.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');
    var c=b.dataset.f;document.querySelectorAll('.gallery figure').forEach(function(fig){fig.style.display=(c==='all'||fig.dataset.c===c)?'':'none'});
  })});

  // demo form
  var form=document.querySelector('form[data-demo]');
  if(form)form.addEventListener('submit',function(e){e.preventDefault();var ok=form.querySelector('.form-ok');ok.style.display='block';ok.focus();form.reset()});

  // reveal
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(e){io.observe(e)});
  }else els.forEach(function(e){e.classList.add('in')});
})();
