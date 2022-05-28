function newTab () {
    let parameters = 'scrollbars=yes, location=yes, width=600, height=200';
    tab = window.open('http://lp.edu.ua/', '_blank',parameters);
  }
  
  function closeTab() {
    if (tab != null) {
      tab.close();
    }
  }