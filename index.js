const pic = [
  {
    dp: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D',
    story: 'https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww',
    story: 'https://plus.unsplash.com/premium_photo-1664106242816-cf9c4f3150d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1695360373358-54bbf2edd0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1647102208648-5f3175091dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0b3JpZXN8ZW58MHx8MHx8fDA%3D',
  },
]
let storyCont = document.querySelector('#story-cont')
let clutter = ''
pic.forEach(function (item, index) {
  clutter += `<div class="stories">
  <img id="${index}"src="${item.dp}" alt='hlo'>
</div>`
});
storyCont.innerHTML = clutter
storyCont.addEventListener('click', function (e) {
  document.querySelector('#viewstory').style.backgroundImage = `url(${pic[e.target.id].story})`
  document.querySelector('#viewstory').style.display = 'block'
});
setInterval(function () {
  document.querySelector('#viewstory').style.display = 'none'
}, 3000);