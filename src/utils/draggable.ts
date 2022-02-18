const drag = () => {
  const draggable = document.getElementById('draggable')
  const topBar = document.getElementById('top-bar')

  let isMouseDown = false
  let initX = 0
  let initY = 0
  let height = draggable ? draggable.offsetHeight : 0
  let width = draggable ? draggable.offsetWidth : 0

  if (draggable && topBar) {
    topBar.addEventListener('mousedown', function (e) {
      document.body.classList.add('no-select')
      isMouseDown = true
      initX = e.offsetX
      initY = e.offsetY
    })
  }

  document.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
      var cx = e.clientX - initX,
        cy = e.clientY - initY
      if (cx < 0) {
        cx = 0
      }
      if (cy < 0) {
        cy = 0
      }
      if (window.innerWidth - e.clientX + initX < width) {
        cx = window.innerWidth - width
      }
      if (e.clientY > window.innerHeight - height + initY) {
        cy = window.innerHeight - height
      }

      if (draggable) {
        draggable.style.left = cx + 'px'
        draggable.style.top = cy + 'px'
      }
    }
  })

  if (topBar) {
    topBar.addEventListener('mouseup', function () {
      document.body.classList.remove('no-select')
      isMouseDown = false
    })
  }
}

export default drag
