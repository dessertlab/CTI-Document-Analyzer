function menutoggle() {
    var x = document.getElementById('top-menu');
    var m = document.getElementsByClassName('ubermenu-responsive');
    if (x.style.right === '0px') {
        x.style.right = '-9999px';
        document.body.style.overflowY = 'scroll';
        } else {
        x.style.right = '0px';
        document.body.style.overflowY = 'hidden';
        }
    }
    
    var list = document.querySelectorAll('.menu-item-has-children');
    
    function accordion(e) {
        e.stopPropagation();
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else
        if (this.parentElement.parentElement.classList.contains('active')) {
            this.classList.add('active');
        } else
        {
            for (i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    }
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener('click', accordion);
    }
    
    let scrollpos = window.scrollY
      const header = document.getElementById('site-header')
      const header_height = header.offsetHeight
    
      const add_class_on_scroll = () => header.classList.add("scrolled")
      const remove_class_on_scroll = () => header.classList.remove("scrolled")
    
      window.addEventListener('scroll', function() {
        scrollpos = window.scrollY;
    
        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    
        console.log(scrollpos)
      })

//number-count-up

class CountUp {
    constructor(triggerEl, counterEl) {
    const counter = document.querySelector(counterEl)
    const trigger = document.querySelector(triggerEl)
    let num = 0
  
    const countUp = () => {
      if (num <= counter.dataset.stop)
        ++num
        counter.textContent = num
    }
    
    const observer = new IntersectionObserver((el) => {
      if (el[0].isIntersecting) {
        const interval = setInterval(() => {
          (num < counter.dataset.stop) ? countUp() : clearInterval(interval)
        }, counter.dataset.speed)
      }
    }, { threshold: [0] })
  
    observer.observe(trigger)
    }
  }
  
  new CountUp('#stats', '#counter1')
  new CountUp('#stats', '#counter2')
  new CountUp('#stats', '#counter3')
  new CountUp('#stats', '#counter4')