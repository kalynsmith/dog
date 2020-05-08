window.onload = () => {
  let pic = document.querySelector('#pic');
  let bitch = document.querySelector('#asap');
  let title = document.querySelector('#title')
  let reset = document.querySelector('#reset')

  reset.addEventListener('click', ()=> {
    pic.src = 'cat.jpg'
  })

  pic.addEventListener('click', () => {
    title.style.fontSize = '3em'
    title.style.fontFamily = 'Bangers, cursive'
    title.innerHTML = "BITCH IMMA DOG"
    bitch.play()
    setTimeout(()=> {
      pic.src = 'dog.png';
      setTimeout(()=> {
        title.style.fontSize = '2em'
        title.style.fontFamily = 'Montserrat, sans-serif'
        title.innerHTML = "This is very smol cat"
        pic.src = 'cat.jpg';
      }, 1000)
    }, 1000)
  });
};
