(function(){
  var PHONE='023 8033 8900', TEL='+442380338900', EMAIL='sales@akprecisionengineering.co.uk';
  var SERVICES=[
    {name:'CNC turning',text:'Turned parts on our Mori Seiki SL25 and Hyundai HIT-30M turning centres, including driven tooling.'},
    {name:'CNC milling',text:'Milled components on our Hyundai and Eagle SMT-500 vertical machining centres.'},
    {name:'Manual machining',text:'Conventional manual machining for repairs, modifications and work that does not need a program.'},
    {name:'Tooling, jigs and fixtures',text:'Tooling, jigs and fixtures made to suit your production line or assembly process.'},
    {name:'Replacement parts',text:'Worn or broken parts remade, often from a sample or a sketch when drawings no longer exist.'},
    {name:'Specialist plastics machining',text:'Plastics machined with the same care as metal, for prototypes and production parts.'},
    {name:'Special purpose equipment',text:'One-off equipment designed and built around a specific job.'},
    {name:'Practical advice',text:'Straight answers on materials, tolerances and the most cost-effective way to make a part.'}
  ];
  window.AK_SERVICES=SERVICES;
  var I={
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    burger:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  window.AK_ICONS=I;
  var page=document.body.getAttribute('data-page');
  var links=[['index.html','Home','home'],['capabilities.html','Capabilities','capabilities'],['machines.html','Machines','machines'],['contact.html','Contact','contact']];
  var menu=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active"':'')+'>'+l[1]+'</a></li>';}).join('');
  var banner='<div class="preview-banner">Concept preview by Rebuildery. Not the official A.K. Precision Engineering website.</div>';
  var header=banner+'<header class="site-header"><div class="wrap nav">'+
    '<a class="brand" href="index.html" aria-label="A.K. Precision Engineering home"><span class="brand-mark">AK</span><span class="brand-name">A.K. Precision Engineering<small>CNC machining, Southampton</small></span></a>'+
    '<ul class="menu" id="menu">'+menu+'</ul>'+
    '<div class="nav-cta"><a class="nav-phone" href="tel:'+TEL+'">'+I.phone+'<span>'+PHONE+'</span></a>'+
    '<a class="btn btn-amber" href="contact.html">Request a quote</a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.burger+'</button></div></div></header>';
  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="brand" href="index.html"><span class="brand-mark">AK</span><span class="brand-name">A.K. Precision Engineering</span></a><p style="margin-top:16px;max-width:300px">Precision components, tooling and general engineering for commercial, MOD and aerospace customers. ISO 9001 certified.</p></div>'+
    '<div><h4>Pages</h4><ul>'+links.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Services</h4><ul>'+SERVICES.slice(0,5).map(function(s){return '<li><a href="capabilities.html">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Contact</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li>Unit B3, Liners Industrial Estate, Pitt Road, Freemantle, Southampton SO15 3FQ</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' A.K. Precision Engineering Ltd. Registered in England and Wales, company no. 06116816.</span><span>Fax 023 8033 7102</span></div></div></footer>'+
    '<a class="fab" href="tel:'+TEL+'" aria-label="Call A.K. Precision Engineering">'+I.phone+'</a>';
  document.body.insertAdjacentHTML('afterbegin',header);
  document.body.insertAdjacentHTML('beforeend',footer);
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  var sl=document.getElementById('service-list');
  if(sl){sl.innerHTML=SERVICES.map(function(s,i){return '<div class="card rv"><span class="num">'+(i<9?'0':'')+(i+1)+'</span><h3>'+s.name+'</h3><p>'+s.text+'</p></div>';}).join('');}
  var f=document.querySelector('form.quote');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-ok').style.display='block';f.querySelector('button').disabled=true;});}
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  } else {els.forEach(function(e){e.classList.add('in');});}
})();
