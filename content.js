function addTargetBlank() {
    document.querySelectorAll('a[href]').forEach(a => a.setAttribute('target', '_blank'));
  }
  
  // Apply initially
  addTargetBlank();
  
  // Observe for dynamic content changes
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      addTargetBlank();
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });