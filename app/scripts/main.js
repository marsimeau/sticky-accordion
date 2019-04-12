$(function () {
  Stickyfill.add(document.querySelectorAll('.sticky'))

  $('.accordion__content').on('hide.bs.collapse', function () {
    const $this = $(this)
    const $item = $this.parents('.accordion__item')

    $('body, html').animate({ scrollTop: $item.offset().top }, 100)
  })
})
