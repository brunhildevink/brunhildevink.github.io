const drag = () => {
  const draggable = document.getElementById('draggable')

  let isMouseDown = false
  let initX = 0
  let initY = 0
  let height = draggable ? draggable.offsetHeight : 0
  let width = draggable ? draggable.offsetWidth : 0

  if (draggable) {
    draggable.addEventListener('mousedown', function (e) {
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

  if (draggable) {
    draggable.addEventListener('mouseup', function () {
      isMouseDown = false
    })
  }
}

export default drag
