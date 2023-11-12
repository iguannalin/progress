window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  for(let i=0;i<window.innerWidth*window.innerHeight;i+=250) { 
    if (Math.random() > 0.3) {
      let meter=document.createElement("meter");
      meter.src="meter.mp3";
      meter.style.marginLeft = getRandomInt(1,15)+"%";
      container.appendChild(meter);
    } else {
      let progress=document.createElement("progress");
      progress.src="progress.mp3";
      progress.style.marginLeft = getRandomInt(1,15)+"%";
      container.appendChild(progress);
    }
  }
  // setTimeout(()=>{location.reload()}, 1000);
});