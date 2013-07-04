#= require jquery
#= require jquery_ujs
## require turbolinks
#= require bootstrap
#= require bootstrap-wysihtml5/index


$ ->
  $('textarea.editor').wysihtml5('deepExtend', {
    html: true,
    parserRules: {
      tags: {
        strong: {},
        em: {},
        script: {}
      }
    }
  });