(function(){
  var PHONE='023 8044 8468', TEL='+442380448468';
  var PHONE2='023 8043 4382', TEL2='+442380434382';
  var EMAIL='info@thestationgarage.co.uk';
  var I={
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>'
  };
  window.SM_ICONS=I;

  var SERVICES=[
    {id:'mot',name:'MOT testing',short:'Annual MOTs carried out at our Woolston garage, with any repairs explained before we start.'},
    {id:'diagnostics',name:'Computer diagnostics',short:'Warning light on? We plug in, read the fault codes and tell you what they mean in plain English.'},
    {id:'brakes',name:'Brake repair',short:'Pads, discs and brake checks so your car stops the way it should.'},
    {id:'clutch',name:'Clutch replacement',short:'Slipping or heavy clutch? We replace clutches and get you back on the road.'},
    {id:'exhaust',name:'Exhaust systems',short:'Blowing, rattling or failed on emissions: we repair and replace exhausts.'},
    {id:'steering',name:'Steering and suspension',short:'Knocks, pulling and uneven tyre wear looked at and put right.'},
    {id:'oil',name:'Oil changes and tune-ups',short:'Routine oil changes and tune-ups to keep your car running smoothly.'},
    {id:'safety',name:'Safety checks',short:'A thorough safety check before a long trip, or before you buy.'},
    {id:'drivability',name:'Drivability problems',short:'Hesitation, rough running or poor starting tracked down and fixed.'}
  ];
  window.SM_SERVICES=SERVICES;

  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['services.html','Services','services'],['about.html','About us','about'],['contact.html','Contact','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var banner='<div class="preview-banner">Concept preview by Rebuildery. Not the official Station Motors website.</div>';
  var header=banner+'<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="Station Motors home"><span class="logo-mark">'+I.wrench+'</span><span class="logo-text">Station Motors<small>MOT and vehicle repair, Woolston</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-y" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span class="sr" style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.wrench+'</span><span class="logo-text" style="color:#fff">Station Motors<small>MOT and vehicle repair</small></span></a><p style="margin-top:16px;max-width:300px">A small, friendly garage in Woolston, owned by Iain Gilroy. Reliable, honest work, finished in a day whenever possible.</p></div>'+
    '<div><h4>Services</h4><ul>'+SERVICES.slice(0,6).map(function(s){return '<li><a href="services.html#'+s.id+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Opening hours</h4><ul><li>Mon to Fri: 8.30am to 5.30pm</li><li>Saturday: 8.30am to noon<!-- CONFIRM: Saturday hours (old site says noon, other listings differ) --></li><li>Sunday: closed</li></ul></div>'+
    '<div><h4>Get in touch</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="tel:'+TEL2+'">'+PHONE2+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li>48 Portsmouth Road, Woolston, Southampton SO19 9AF</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' Station Motors. The Station Garage Service Centre Ltd.</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call Station Motors">'+I.phone+'</a>';

  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);

  var b=document.querySelector('.burger'),m=document.querySelector('.mobile-menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});

  document.querySelectorAll('[data-services]').forEach(function(el){
    var n=parseInt(el.getAttribute('data-services'),10)||SERVICES.length;
    el.innerHTML=SERVICES.slice(0,n).map(function(s,i){
      return '<a class="card reveal'+(i===0?' feature':'')+'" href="services.html#'+s.id+'" style="text-decoration:none"><div class="ic">'+I.wrench+'</div><h3>'+s.name+'</h3><p>'+s.short+'</p></a>';
    }).join('');
  });
  document.querySelectorAll('[data-icon]').forEach(function(el){el.innerHTML=I[el.getAttribute('data-icon')]||'';});

  document.querySelectorAll('form.quote-form').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview. On the live site your message would go straight to the garage.';});
  });

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  } else { els.forEach(function(e){e.classList.add('in');}); }
})();
