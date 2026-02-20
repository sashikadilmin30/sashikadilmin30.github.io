// PASSWORD FUNCTION
var correctPassword = "dilmindinu"; // Change as needed

function checkPassword() {
  var entered = document.getElementById("passwordInput").value;
  if (entered === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("intro").style.display = "flex";
  } else {
    document.getElementById("error").innerHTML = "Wrong password 😢 Try again, Sudu Manika ❤️";
  }
}

// ENTER HEART BUTTON
function enterHeart() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("bgMusic").play();
  startTyping();
}

// TYPING ANIMATION (Singlish Sinhala)
var text = "Dilmin ❤️ Dinuu\n\n2025/02/26…\n\nමේ තමයි මගේ ජීවිතයේ turning point වෙච්ච දවස\nඑදා ඉදන් කොච්චර ප්‍රශ්න ආවත් ඔයා නැතුව ඉන්න බැරි උනා එක දවසක් වත්…\nඔයාට තව කියන්න දෙයක් තියෙනවා…\nඔයා එහෙනම් පල්ලෙහා button එක click කරලා බලන්න 😉";
var i = 0;

function startTyping() {
  if (i < text.length) {
    var typingDiv = document.getElementById("typing");
    if(text.charAt(i) === "\n"){
      typingDiv.innerHTML += "<br>";
    } else {
      typingDiv.innerHTML += text.charAt(i);
    }
    i++;
    setTimeout(startTyping, 70);
  }
}

// FLOATING HEARTS
function createHeart() {
  var heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  var randomDuration = (Math.random() * 3 + 2);
  heart.style.animationDuration = randomDuration + "s";
  var randomSize = Math.random() * 0.8 + 0.7;
  heart.style.fontSize = (20 * randomSize) + "px";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, randomDuration * 1000);
}
setInterval(createHeart, 300);

// FOREVER BUTTON - EMOTIONAL CINEMATIC EFFECT
function forever() {
  // CREATE OVERLAY
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(255,77,166,0.1))";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  overlay.style.animation = "fadeIn 0.8s ease-out";
  overlay.style.color = "#ff4da6";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.style.backdropFilter = "blur(2px)";
  overlay.style.padding = "20px";
  overlay.style.overflowY = "auto";

  overlay.innerHTML = `
    <h1 style="font-size:70px; animation: popIn 1s ease-out, pulse 1.5s ease-in-out 1s infinite; margin-bottom:20px;">She Said YES ❤️</h1>
    <p style="font-size:28px; margin-top:20px; line-height:1.8; animation: fadeInUp 1s ease-out 0.5s backwards; color: #ffccdd; max-width: 90%; text-shadow: 0 0 10px #ff4da6;">
    Sudu Manika…<br>
    මම හිතන්නේ නැහැ මම, ඔයා වගේ කෙනෙක් deserve කරනවා කියලා. මගේ වැරදි දැනගෙනත් ඔයා මට ආදරෙයි නේ. 
    <br>
    ඉතින් ඒක තමයි මගේ වාසනාව.<br><br>
    අපි කොච්චර තරහා උනත්, රන්ඩු උනත් අපි හැමදාම එකට ඉමු.<br>
    හැමදේටම දැන් මට ඉන්නේ ඔයා විතරයි.<br><br>
    මට ඕනේ ජීවිතේ ඉතුරු කාලය ඔයත් එක්ක ආදරෙන් ඉන්න<br>
    ආදරෙයි ඔයාට හැමදාමත් ❤️<br>
    </p>
  `;

  document.body.appendChild(overlay);

  // INCREASE HEART INTENSITY
  setInterval(createHeart, 100);

  // FIREWORKS
  for (let i = 0; i < 50; i++) {
    createFirework();
  }
}

// FIREWORKS FUNCTION
function createFirework() {
  var fire = document.createElement("div");
  fire.style.position = "fixed";
  fire.style.width = "10px";
  fire.style.height = "10px";
  fire.style.background = "#ff4da6";
  fire.style.borderRadius = "50%";
  fire.style.pointerEvents = "none";
  fire.style.boxShadow = "0 0 10px #ff4da6, 0 0 20px #ffccdd";
  
  // Random direction for explosion
  var angle = Math.random() * Math.PI * 2;
  var velocity = Math.random() * 150 + 100;
  var tx = Math.cos(angle) * velocity;
  var ty = Math.sin(angle) * velocity;
  
  fire.style.setProperty('--tx', tx + 'px');
  fire.style.setProperty('--ty', ty + 'px');
  
  // Position at center of screen
  fire.style.top = "50%";
  fire.style.left = "50%";
  fire.style.transform = "translate(-50%, -50%)";
  fire.style.animation = "explode 1.5s ease-out forwards";
  
  document.body.appendChild(fire);
  setTimeout(() => fire.remove(), 1500);
}
