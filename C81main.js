canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var color = ""

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 10
ctx.arc(200, 200, 50, 0, 2*Math.PI)
color = ""
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.arc(250, 300, 50, 0, 2*Math.PI)
color = ""
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = "black"
ctx.arc(300, 200, 50, 0, 2*Math.PI)
color = ""
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = "green"
ctx.arc(350, 300, 50, 0, 2*Math.PI)
color = ""
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = "red"
ctx.arc(400, 200, 50, 0, 2*Math.PI)
color = ""
ctx.stroke()
ctx.beginPath()
ctx.rect(100, 100, 400, 300)
ctx.strokeStyle = "black"

ctx.stroke();

canvas.addEventListener("mousedown", MyMouseDown)

function MyMouseDown(e){
    color = document.getElementById("MYtext").value
    var mousex = e.clientX - canvas.offsetLeft
    var mousey = e.clientY - canvas.offsetTop
    Circle(mousex , mousey)
}

function Circle(mousex , mousey){
    var widthforline = document.getElementById("MYwidth").value
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = widthforline;
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI)
    ctx.stroke();
}

function ClearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

