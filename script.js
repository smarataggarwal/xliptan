const messages = ["WHY DID YOU COME HERE","XLIPTAN REMEMBERS YOU","YOU WERE NOT SUPPOSED TO SEE THIS","YOU ARE BEING OBSERVED","THIS IS NOT A WEBSITE","YOU CANNOT LEAVE NOW","THE CODE KNOWS"];
let i = 0;
const whisper = document.getElementById("whisper");
setInterval(() => { whisper.innerText = messages[i % messages.length]; whisper.style.opacity = 1; setTimeout(()=>whisper.style.opacity=0,2000); i++; },3000);
setInterval(()=>{ document.body.style.transform=`translate(${Math.random()*6-3}px,${Math.random()*6-3}px)`; setTimeout(()=>document.body.style.transform="translate(0,0)",100); },4000);
