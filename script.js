document.getElementById("yes").addEventListener("click", function() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);
    
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
