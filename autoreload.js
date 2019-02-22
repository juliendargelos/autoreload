if(window.location.hostname === 'localhost') {
  var script = document.createElement('script')
  script.addEventListener('load', function() {
    AutoReload.watch()
  })
  script.src = 'http://localhost:60000/autoreload.js'
  document.body.appendChild(script)
}
