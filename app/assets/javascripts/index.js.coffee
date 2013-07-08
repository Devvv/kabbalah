# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$ ->

  $(".nano").nanoScroller({
    preventPageScrolling: false
    iOSNativeScrolling: true
    alwaysVisible: true
  })

  $('#select').each ->
    $(this).find('select').on 'change', ->
      $(this).parent().find('span').html( $(this).find(':selected').text() )
  checkbox_callback = () ->

  $('.checkbox').each ->
    $(this).on 'click', (e) ->
      $(this).toggleClass 'checked'
      checkbox_callback(e)
  $('.checked_el').each ->
    $(this).on 'click', (e) ->
      if e.target.nodeName != 'A'
        $(this).find('.checkbox').toggleClass 'checked'
        checkbox_callback(e)
  $('.header-menu > li, .header-menu li ul').on 'mouseenter', ->
    $(this).addClass 'hover'
  $('.header-menu > li, .header-menu li ul').on 'mouseleave', ->
    $(this).removeClass 'hover'
  today = new Date();
  y = today.getFullYear();


  your_dates = [
    new Date(2013, 6, 27),
    new Date(2013, 6, 29)
  ]

  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '',
    nextText: '',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентбрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Февр','Март','Апр','Май','Июн', 'Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','суббота'],
    dayNamesShort: ['Вос','Пон','Втр','Срд','Чет','Пят','Суб'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  }
  $.datepicker.setDefaults( $.datepicker.regional['ru'] )
  $('#calendar').datepicker({
    numberOfMonths: 3,
    showButtonPanel: false,
    showOtherMonths: false,
    beforeShowDay: (date) ->
      $.each(your_dates, (i, n) ->
#        if n.getTime() == date.getTime()
#        return [false,"ui-state-active","Event Name"];
      )





  })

