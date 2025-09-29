document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.open-project').forEach(btn => {
  btn.addEventListener('click', (e)=>{
  const art = e.target.closest('.project');
  const title = art.dataset.title || art.querySelector('h3').textContent;
  const img = art.dataset.img || art.querySelector('img').src;
  const desc = art.dataset.desc || art.querySelector('.muted').textContent;
  const modal = document.getElementById('modal');
  document.getElementById('modal-content').innerHTML = `\n          <h2 style="margin-top:0">${title}</h2>\n          <img src="${img}" alt="${title}" style="width:100%;height:300px;object-fit:cover;border-radius:10px">\n          <p class=\"muted\">${desc}</p>\n        `;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  })
})

document.querySelector('#modal .close').addEventListener('click', ()=>{
  const modal = document.getElementById('modal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
})

document.getElementById('modal').addEventListener('click', (e)=>{ if(e.target === e.currentTarget) { e.currentTarget.classList.remove('open'); e.currentTarget.setAttribute('aria-hidden','true') } })