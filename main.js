const body = document.querySelector("body");

body.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const span = document.createElement("span");
    span.style.left = xPos + "px";
    span.style.top = yPos + "px";

    body.append(span);

    setTimeout(()=>{
        span.remove();
    },3000);
})