const getParentByNode = (el, node) => {
	if (el && el.nodeName !== node) {
		while (el && el.nodeName !== node) el = el.parentNode
	}
	return el?.nodeName === '#document' ? null : el
}

const getParentByClassname = (el, className) => {
	if (el && el.classList && !el.classList.contains(className)) {
		while (el && el.classList && !el.classList.contains(className)) {
			el = el.parentNode
		}
	}
	return el?.nodeName === '#document' ? null : el
}

window.onload = () => {
  // Swipers
  const swiperList = Array.from(document.querySelectorAll('[data-swiper]'))
  window.swipers = {}
  for(let i in swiperList) {
    const type = swiperList[i].getAttribute('data-swiper')
    switch(type) {
      case 'main_s7':
      case 'main_s8':
        window.swipers[type] = new Swiper(swiperList[i], {
          slidesPerView: 1,
          allowTouchMove: false,
          effect: 'fade',
          fadeEffect: { crossFade: true },
          autoHeight: true
        })
        if(type === 'main_s8') {
          window.swipers[type].trigerBtn = window.swipers[type].el.previousElementSibling.previousElementSibling
          window.swipers[type].trigerBtn && window.swipers[type].trigerBtn.addEventListener('click', ({ target }) => {
            target = getParentByNode(target, 'BUTTON')
            target.nextElementSibling.classList.toggle('open')
          })
        }
        window.swipers[type].navs = Array.from(window.swipers[type].el.previousElementSibling.querySelectorAll(`[data-${type}-step]`))
        for(let i in window.swipers[type].navs) {
          window.swipers[type].navs[i].addEventListener('click', ({ target }) => {
            if(!target.classList.contains('active')) {
              const active = window.swipers[type].navs.find(button => button.classList.contains('active'))
              active && active.classList.remove('active')
              target = getParentByNode(target, 'BUTTON')
              target.classList.add('active')
              window.swipers[type].slideTo(parseInt(target.getAttribute(`data-${type}-step`)))
              if(window.swipers[type].trigerBtn) {
                window.swipers[type].trigerBtn.innerHTML = target.innerHTML
                window.swipers[type].trigerBtn.nextElementSibling.classList.remove('open')
              }
            }
          })
        }
        break
      case 'block7':
        new Swiper(swiperList[i], {
          loop: true,
          allowTouchMove: false,
          navigation: { nextEl: '.block7_next', prevEl: '.block7_prev' }
        }) 
        break
      case 'main_s20':
      case 'main_s21':
        new Swiper(swiperList[i], {
          slidesPerView: 1,
          spaceBetween: 0,
          breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1580: { slidesPerView: 4, spaceBetween: 30 }
          },
          navigation: { nextEl: `.${type}_next`, prevEl: `.${type}_prev` }
        }) 
        break
      case 'main_s3':
      case 'main_s4':
      case 'main_s5':
        new Swiper(swiperList[i], {
          slidesPerView: 1,
          spaceBetween: 0,
          breakpoints: {
            425: { slidesPerView: 2, spaceBetween: 15 }
          },
          navigation: { nextEl: `.${type}_next`, prevEl: `.${type}_prev` }
        }) 
        break
      case 'main_s9':
      case 'main_s10':
      case 'main_s11':
      case 'main_s12':
      case 'main_s15':
      case 'main_s17':
      case 'main_s19':
      case 'main_s22':
        new Swiper(swiperList[i], {
          slidesPerView: 'auto',
          spaceBetween: 15,
          navigation: { nextEl: `.${type}_next`, prevEl: `.${type}_prev` }
        }) 
        break
      case 'main_s7_1':
      case 'main_s7_2':
      case 'main_s7_3':
      case 'main_s7_4':
        new Swiper(swiperList[i], {
          slidesPerView: 1,
          navigation: { nextEl: `.${type}_next`, prevEl: `.${type}_prev` }
        }) 
        break
    }
  }
  // Placeholder
  const videoPlaceholdersBtns = Array.from(document.querySelectorAll('[data-video-placeholder]'))
  for(let i in videoPlaceholdersBtns) {
    videoPlaceholdersBtns[i].addEventListener('click',  ({ target }) => {
      target = getParentByClassname(target, 'placeholder')
      target.classList.add('hidden')
    })
  }
  // Galleries
  const galleries = Array.from(document.querySelectorAll('[lightgallery]'))
  galleries.map(gallery => lightGallery(gallery))
}