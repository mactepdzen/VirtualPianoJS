document.addEventListener("keydown", function (event) {
   if(event.code == "KeyA") {
       console.log("The 'A' key is pressed.");
       let audioA = new Audio("white_keys/A.mp3");
       audioA.play();
   }
    else if(event.code == "KeyS") {
       console.log("The 'S' key is pressed.");
       let audioS = new Audio("white_keys/S.mp3");
       audioS.play();
   }
   else if(event.code == "KeyD"){
       console.log("The 'D' key is pressed.");
       let audioD = new Audio("white_keys/D.mp3");
       audioD.play();
   }
   else if(event.code == "KeyF"){
       console.log("The 'F' key is pressed.");
       let audioF = new Audio("white_keys/F.mp3");
       audioF.play();
   }
   else if(event.code == "KeyG"){
       console.log("The 'G' key is pressed.");
       let audioG = new Audio("white_keys/G.mp3");
       audioG.play();
   }
   else if(event.code == "KeyH"){
       console.log("The 'H' key is pressed.");
       let audioH = new Audio("white_keys/H.mp3");
       audioH.play();
   }
   else if(event.code == "KeyJ"){
       console.log("The 'J' key is pressed.");
       let audioJ = new Audio("white_keys/J.mp3");
       audioJ.play();
   }
   else if(event.code == "KeyW"){
       console.log("The 'W' key is pressed.");
       let audioW = new Audio("white_keys/J.mp3");
       audioW.play();
   }
   else if(event.code == "KeyE"){
       console.log("The 'E' key is pressed.");
       let audioE = new Audio("white_keys/J.mp3");
       audioE.play();
   }
   else if(event.code == "KeyT"){
       console.log("The 'J' key is pressed.");
       let audioT = new Audio("white_keys/J.mp3");
       audioT.play();
   }
   else if(event.code == "KeyY"){
       console.log("The 'Y' key is pressed.");
       let audioY = new Audio("white_keys/J.mp3");
       audioY.play();
   }   else if(event.code == "KeyU"){
       console.log("The 'U' key is pressed.");
       let audioU = new Audio("white_keys/J.mp3");
       audioU.play();
   }
   else console.log("No key.")
});