document.addEventListener("mousemove", (e) => {
    const unblur = document.querySelector(".unblur");
    const maskSize = 700; // Adjust this value to change the area of unblur
    
    unblur.style.webkitMaskImage = `radial-gradient(circle ${maskSize}px at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`;
    unblur.style.maskImage = `radial-gradient(circle ${maskSize}px at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)`;
});