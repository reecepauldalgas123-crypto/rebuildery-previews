(function(){
  var PHONE='023 8022 8939', TEL='+442380228939';
  var EMAIL='enquiries@thedeskcentre.co.uk';
  var ADDRESS='74 to 76 Northam Road, Southampton SO14 0PB';
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
    bed:sv('<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M2 16h20M6 10V6h5v4"/>'),
    pool:sv('<path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1 4-1M2 14c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1 4-1M8 12V5a2 2 0 0 1 4 0M16 12V5a2 2 0 0 0-4 0M8 8h8"/>'),
    food:sv('<path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18M17 3c-2 2-3 4-3 7h3v11"/>'),
    cup:sv('<path d="M3 8h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6zM17 10h2a2 2 0 0 1 0 4h-2M7 3v2M11 3v2"/>'),
    dog:sv('<path d="M10 5 8 3 4 5v5l2 2v8h4v-5h4v5h4v-9l2-3-3-3h-3l-2 2z"/>'),
    star:sv('<path d="m12 2 3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.3l7-.8z"/>'),
    sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    family:sv('<circle cx="8" cy="6" r="2.5"/><circle cx="16" cy="6" r="2.5"/><circle cx="12" cy="13" r="2"/><path d="M4 21v-6a4 4 0 0 1 8 0M12 21v-6a4 4 0 0 1 8 0"/>'),
    key:sv('<circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 9-9M17 6l3 3M14 9l2 2"/>'),
    desk:sv('<path d="M2 8h20M4 8v12M20 8v12M4 13h6v7M14 13h6"/><path d="M6 16h2M16 16h2"/>'),
    chair:sv('<path d="M7 3h10v8H7zM5 11h14v4H5zM7 15v6M17 15v6"/>'),
    book:sv('<path d="M4 4h4v16H4zM9 4h4v16H9zM14 5l4-1 3 15-4 1z"/>'),
    tools:sv('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),
    truck:sv('<path d="M1 6h13v10H1zM14 10h4l3 3v3h-7z"/><circle cx="5.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>'),
    layers:sv('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>')
  };

  var SERVICES=[
    {id:'desks',href:'furniture.html#desks',icon:'desk',name:'Pedestal and partners desks',short:'Premier Range pedestal, kneehole and partners desks with hand tooled leather tops, made in our own workshops.'},
    {id:'chairs',href:'furniture.html#chairs',icon:'chair',name:'Leather desk chairs',short:'Captains, Gainsborough, Regency and Viscount swivel chairs, hand upholstered here in the UK.'},
    {id:'storage',href:'furniture.html#storage',icon:'book',name:'Bookcases and filing cabinets',short:'Locking filing cabinets, library bookcases and low cupboards in eight wood finishes.'},
    {id:'sofas',href:'furniture.html#sofas',icon:'star',name:'Chesterfields and wing chairs',short:'Traditional deep buttoned Chesterfield sofas and high back wing chairs in antique style leather.'},
    {id:'contemporary',href:'furniture.html#contemporary',icon:'layers',name:'Contemporary study range',short:'Crisp, modern desks and chairs, designed, made and hand finished by us in the UK.'},
    {id:'workshop',href:'workshop.html',icon:'tools',name:'Restoration and re-leathering',short:'French polishing, cabinet repairs, upholstery and new leather desk tops from our repair workshop.'}
  ];

  var page=document.body.getAttribute('data-page')||'';
  var links=[['index.html','Home','home'],['furniture.html','Furniture','furniture'],['workshop.html','Workshop','workshop'],['contact.html','Visit and delivery','contact']];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' class="active" aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join('');

  var header='<header class="site-header"><div class="wrap nav">'+
    '<a class="logo" href="index.html" aria-label="The Desk Centre home"><span class="logo-mark">'+I.desk+'</span><span class="logo-text">The Desk Centre<small>Southampton, since 1965</small></span></a>'+
    '<ul class="menu">'+nav+'</ul>'+
    '<div class="nav-call"><a class="btn btn-oak" href="tel:'+TEL+'">'+I.phone+'<span class="num">'+PHONE+'</span><span style="position:absolute;left:-9999px">Call</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">'+I.menu+'</button></div></div>'+
    '<nav class="mobile-menu" aria-label="Mobile">'+links.map(function(l){return '<a href="'+l[0]+'">'+l[1]+'</a>';}).join('')+'<a href="tel:'+TEL+'">Call '+PHONE+'</a></nav></header>';

  var footer='<footer class="site-footer"><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="index.html"><span class="logo-mark">'+I.desk+'</span><span class="logo-text">The Desk Centre<small>Southampton, since 1965</small></span></a><p style="margin-top:16px;max-width:320px">A family business making traditional English furniture for the home, study and office. A. E. Worley &amp; Son Ltd.</p></div>'+
    '<div><h4>Our furniture</h4><ul>'+SERVICES.map(function(s){return '<li><a href="'+s.href+'">'+s.name+'</a></li>';}).join('')+'</ul></div>'+
    '<div><h4>Talk to us</h4><ul><li><a href="tel:'+TEL+'">'+PHONE+'</a></li><li><a href="mailto:'+EMAIL+'">'+EMAIL+'</a></li><li><a href="contact.html#enquiry">Send an enquiry</a></li></ul></div>'+
    '<div><h4>Find us</h4><ul><li>'+ADDRESS+'</li><li>Showrooms open Tue to Thu, 9am to 4pm, by appointment</li></ul></div>'+
    '</div><div class="foot-bottom"><span>&copy; '+new Date().getFullYear()+' The Desk Centre (A. E. Worley &amp; Son Ltd).</span><span>Website preview by Rebuildery</span></div></div></footer>'+
    '<a class="float-call" href="tel:'+TEL+'" aria-label="Call The Desk Centre">'+I.phone+'</a>';

  var bn=document.querySelector('.preview-banner');
  if(bn){bn.insertAdjacentHTML('afterend',header);}else{document.body.insertAdjacentHTML('afterbegin',header);}
  document.body.insertAdjacentHTML('beforeend',footer);

  var b=document.querySelector('.burger'),m=document.querySelector('.mobile-menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);});

  document.querySelectorAll('[data-services]').forEach(function(el){
    el.innerHTML=SERVICES.map(function(s){
      return '<a class="card reveal" href="'+s.href+'" style="text-decoration:none"><div class="ic">'+I[s.icon]+'</div><h3>'+s.name+'</h3><p>'+s.short+'</p><span class="more">Find out more</span></a>';
    }).join('');
  });
  document.querySelectorAll('[data-icon]').forEach(function(el){el.innerHTML=I[el.getAttribute('data-icon')]||'';});
  document.querySelectorAll('[data-tel]').forEach(function(el){el.setAttribute('href','tel:'+TEL);});

  var f=document.querySelector('form.quote-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=f.querySelector('.form-ok');ok.style.display='block';ok.textContent='Thanks, this is a demo form on the preview site. On the live site your enquiry would go straight to The Desk Centre.';});}

  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
})();
