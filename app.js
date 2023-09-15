const canvas = document.querySelector("#canvas")
const tools = document.querySelectorAll("input[name='tool']")
const brushSize = document.querySelector("#brushSize")
const color = document.querySelector("#color")
const clearCanvasBtn = document.querySelector("#clearCanvasBtn")
const saveImgBtn = document.querySelector("#saveImgBtn")

let prevMouseY, prevMouseX, snap,
isDrawing = false,
selectedTool = "brush",
brushWidth = 5,
brushColor = "#000"

const ctx = canvas.getContext("2d")

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = brushColor
}

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
  setCanvasBackground()
})

const drawRect = (e) => {
  ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY) 
}

const drawCircle = (e) => {
  ctx.beginPath();
  let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI)
  ctx.fill()
}

const drawTriangle = (e) => {
  ctx.beginPath()
  ctx.moveTo(prevMouseX, prevMouseY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY)
  ctx.fill()
}

const drawing = (e) => {
  if (!isDrawing) return;

  ctx.putImageData(snap, 0, 0);

  if (selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : brushColor
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
  } else if (selectedTool === "rectangle") {
    drawRect(e)
  } else if (selectedTool === "circle") {
    drawCircle(e)
  } else if (selectedTool === "triangle") {
    drawTriangle(e)
  } else {
    return
  }
}

tools.forEach(tool => {
  tool.addEventListener("click", () => {
    selectedTool = tool.value
  })
})

brushSize.addEventListener("change", () => {
  brushWidth = brushSize.value
})

color.addEventListener("change", () => {
  brushColor = color.value
})

const startDraw = (e) => {
  isDrawing = true
  prevMouseX = e.offsetX
  prevMouseY = e.offsetY
  ctx.beginPath()
  ctx.lineWidth = brushWidth
  ctx.strokeStyle = brushColor
  ctx.fillStyle = brushColor

  snap = ctx.getImageData(0, 0, canvas.width, canvas.height)
}

canvas.addEventListener("mousedown", startDraw)
canvas.addEventListener("mousemove", drawing)
canvas.addEventListener("mouseup", () => isDrawing = false)

clearCanvasBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  setCanvasBackground()
})

saveImgBtn.addEventListener("click", () => {
  const link = document.createElement("a")
  link.download = `${Date.now()}.jpg`
  link.href = canvas.toDataURL()
  link.click()
})