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

  }
  numeric_slider: ->
    $('.numeric-slider').each( ->
      item_count = 1
      item = $(this).find('.mini_slider_item')
      view = $(this).find('.mini_slider_view')
      box_couns = $(this).find('.btn-ellips_span')
      item_size = item.size()
      item_size_width = item.width()
      box_couns.html( item_count + ' / ' + item_size )
      view.width( item_size * item_size_width )
      n_s_action = (act) ->
        console.log( item_count, item_size )
        if act == 'minus'
          if item_count == 1
              item_count = item_size
          else
            item_count = item_count - 1
        if act == 'plus'
          if item_count == item_size
            item_count = 1
          else
            item_count = item_count + 1
        view.stop().animate({marginLeft: (-1)*item_size_width*(item_count-1)}, 300)
        box_couns.html( item_count + ' / ' + item_size )

      $(this).find('.btn-ellips-left').on('click', ->
        n_s_action('minus')
      )
      $(this).find('.btn-ellips-right').on('click', ->
        n_s_action('plus')
      )
    )

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
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  }
  $.datepicker.setDefaults( $.datepicker.regional['ru'] )


  $('#calendar').datepicker({
    numberOfMonths: 3
    showButtonPanel: false
    showOtherMonths: false
    dateFormat: 'dd.mm.yy'
    beforeShowDay: (date) ->
      enabled = true
      classes = ""
      title = null
      $.each events, ->
        if this.Date.valueOf() is $.datepicker.formatDate( "dd.mm.yy", date).valueOf()
          classes = this.clss+' has_event'
      [enabled, classes, title]

    onSelect: (dateText, cal) ->
      console.log($('#calendar').delay(300).find('.ui-state-active').parent())

  })



