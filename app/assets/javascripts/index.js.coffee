# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

window.Kabbalah = {
  menu_hover: ->
    $('.header-menu > li, .header-menu li ul').on 'mouseenter', ->
      $(this).addClass 'hover'
    $('.header-menu > li, .header-menu li ul').on 'mouseleave', ->
      $(this).removeClass 'hover'

  popup: {
    hide: (act) ->
      if act == 'fast'
        $('#popup').css({marginTop: '-1000px'})
        $('#popup').find('.popup_inner').html('')
      else
        $('#back_bg').fadeOut()
        $('#popup').animate( {marginTop: '-1000px'}, 300, ->
          $(this).find('.popup_inner').html('')
        )
    show: (el_id) ->
      window.Kabbalah.popup.hide('fast')
      $('#back_bg').fadeIn()
      $('#popup')
        .find('.popup_inner')
        .load( "/popup/index "+el_id, -> $('#popup').animate({marginTop: ((-1)*($('#popup').innerHeight()/2)) + 'px' }, 200) )
      console.log(   )
  }
  checkbox: (el) ->
    if !el
      $('.checkbox').on 'click', (e) ->
        $(this).toggleClass 'checked'
      $('.checked_el').each ->
        $(this).on 'click', (e) ->
          if e.target.nodeName != 'A'
            $(this).find('.checkbox').toggleClass 'checked'
    else
      $(el).toggleClass 'checked'
  input_file: (el) ->
    el_val = $(el).val().split('\\')
    el_size = el_val.length
    $(el).parent().find('span:first').html( '<span><i class="icon-attached-black"></i>'+el_val[el_size-1]+'</span>' );
  select: (el) ->
    if !el
      $('#select').each ->
        $(this).find('select')
          .on 'focus', ->
              $(this).parent().css {background: '#ffffff'}
          .on 'blur', ->
              $(this).parent().css {background: '#f5f5f5'}
          .on 'change', ->
              $(this).parent().find('span').html( $(this).find(':selected').text() )
              $(this).parent().css {background: '#f5f5f5'}
    else

      $(el).find('select')
        .on 'focus', ->
            $(this).parent().css {background: '#ffffff'}
        .on 'blur', ->
            $(this).parent().css {background: '#f5f5f5'}
        .on 'change', ->
            $(this).parent().find('span').html( $(this).find(':selected').text() )
            $(this).parent().css {background: '#f5f5f5'}
}

$ ->
  Kabbalah.select()
  Kabbalah.menu_hover()
  Kabbalah.checkbox()

  $(".nano").mCustomScrollbar({
    mouseWheel: true
    scrollButtons:{
      enable: false
    }
    advanced:{
      updateOnContentResize: true
    }
    scrollInertia: 0
    contentTouchScroll: 0
  })
#  $(".nano").nanoScroller({
#    preventPageScrolling: false
#    iOSNativeScrolling: true
#    alwaysVisible: true
#  })



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

