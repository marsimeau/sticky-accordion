$(function () {
  Stickyfill.add(document.querySelectorAll('.sticky'))

  $('.accordion__content').on('hide.bs.collapse', function () {
    const $this = $(this)
    const $item = $this.parents('.accordion__item')
    const itemPosition = $item.offset().top

    if (itemPosition < $(window).scrollTop()) {
      $('body, html').animate({ scrollTop: itemPosition }, 100)
    }
  })
})
