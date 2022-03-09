document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.step__link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click',function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

   // BURGER
  const burgerBtn = document.querySelector ('.navigation__burger')
  const navigationLowRes = document.querySelector('.navigation__low-res')
  burgerBtn.onclick = function() {
    navigationLowRes.classList.toggle('visible')
    burgerBtn.classList.toggle('open')
  }

  // SEARCH
  const navigationMainIconSearch = document.getElementById('main-search')
  const navigationInputContainer = document.querySelector('.navigation__search-input')
  const navigationInputContainerCloseBtn = document.querySelector('.navigation__close-btn')
  const navigationInput = document.querySelector('.navigation__input')

  navigationMainIconSearch.onclick = function(){
    if (navigationInputContainer.classList.contains('visible')) {
      navigationInputContainer.classList.remove('visible')
    }
    else navigationInputContainer.classList.add('visible')

    if (navigationInput.value !== ''){
      navigationInput.value = ''
    }
  }

  navigationInputContainerCloseBtn.onclick = function() {
    navigationInputContainer.classList.remove('visible')
    if (navigationInput.value !== ''){
      navigationInput.value = ''
    }
  }
})

