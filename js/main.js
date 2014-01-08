$(function() {

  // FUNCTIONS
  // ======================================================
  
  function setContentOffset(navSelector, contentSelector) {
    var offsetRef   = $(navSelector)
        , offsetObj = $(contentSelector)
        , refHeight = offsetRef.outerHeight();

    offsetObj.css({ marginTop: refHeight + 'px' });
  }

  function switchTab(tabsSelector, clickedTabId) {
    var activeTab           = $(tabsSelector).find('li.active')
        , activeTabContent  = $('.tab-content.active')
        , clickedTab        = $('#' + clickedTabId)
        , clickedTabContent = $('#' + clickedTabId + '-content');

    activeTab.removeClass('active');
    activeTabContent.removeClass('active');

    clickedTab.addClass('active');
    clickedTabContent.addClass('active');
  }

  function setBoomCounters(counterObject) {
    $.each(counterObject, function(k,v) {
      var counter = $(v)
          , base  = $(v).find('.boom-counter-base')
          , fill  = $(v).find('.boom-counter-fill')
          , goal  = parseInt(counter.attr('data-goal-amount'))
          , prog  = parseInt(counter.attr('data-progress-amount'))
          , pct   = (prog / goal) * 100;

      fill.animate(
        { width: pct + '%' },
        {
          duration: 800
        }
      );      
    });
  }

  function updateBoomCounters(counterObject) {
    $.each(counterObject, function(k,v) {
      var counter = $(v)
          , base  = $(v).find('.boom-counter-base')
          , fill  = $(v).find('.boom-counter-fill')
          , goal  = parseInt(counter.attr('data-goal-amount'))
          , prog  = parseInt(counter.attr('data-progress-amount'))
          , pct   = (prog / goal) * 100;

      fill.css({ width: pct + '%' });      
    });
  }


  // DOCUMENT READY
  // ======================================================

  $(document).ready(function() {
    // setContentOffset('.nav-bar', '.feature');

    setTimeout(function() {
      setBoomCounters($('.boom-counter'));
    }, 400);
  });


  // WINDOW RESIZE
  // ======================================================

  $(window).resize(function() {
    // setContentOffset('.nav-bar', '.feature');
    updateBoomCounters($('.boom-counter'));
  });


  // TAB CONTROLS
  // ======================================================

  $('.tabs li').on('click', function() {
    var tabsSelector = $(this).parents('.tabs')
        , clickedTabId = $(this).attr('id');

    switchTab(tabsSelector, clickedTabId);
  });

});