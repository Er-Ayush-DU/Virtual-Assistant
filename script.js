let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice=document.querySelector('#voice')

function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="hi-IN-female"
  window.speechSynthesis.speak(text_speak)
}

function wishMe(){
  let day = new Date()
  let hour= day.getHours()
  // console.log(hour)
  if(hour>=0 && hour<12){
    speak("Good Morning Sir")}
  else if(hour>=12 && hour<16){
    speak("Good After Noon Sir")}
  else if(hour>=16 && hour<19){
    speak("Good Evening Sir")}
  else{
    speak("Good Night Sir")}
}

window.addEventListener('load',()=>{
  wishMe()
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
let currentIndex= event.resultIndex
let transcript= event.results[currentIndex][0].transcript
transcript = transcript.toLowerCase();
content.innerHTML=transcript
takeCommand(transcript)

// console.log(event)
}

btn.addEventListener("click",()=>{
  recognition.start()
  btn.style.display='none'
  voice.style.display='block'
})


function takeCommand(message){
   btn.style.display='flex'
  voice.style.display='none'
if(message.includes("hello")||message.includes("hello siri") ||message.includes("hi siri")){
  speak("Hello Sir,What can i help You?")
}
else if(message.includes("who are you")||message.includes("hu r u")){
  speak("I am Virtual Assistant, created by Ayush Tiwari Sir")
}
else if(message.includes("who is ayush")||message.includes("hu is ayush")||message.includes("who is ayush tiwari")){
  speak("ayush is my father who has created me.")
}
else if(message.includes("open Youtube")||message.includes("Hey siri open the Youtube")||message.includes("open D Youtube")||message.includes("Hello siri open Youtube")){
  speak("opening Youtube...")
  window.open("https://youtube.com/","_blank")
}
else if(message.includes("open facebook")||message.includes("Hey siri open facebook")){
  speak("opening facebook...")
  window.open("https://facebook.com/","_blank")
}
else if(message.includes("open instagram")||message.includes("Hey siri open instagram")){
  speak("opening instagram...")
  window.open("https://instagram.com/","_blank")
}
else if(message.includes("open calculator")||message.includes("Hey siri open calculator")){
  speak("opening calculator...")
  window.open("calculator://")
}
else if(message.includes("open whatsapp")||message.includes("Hey siri open whatsapp")){
  speak("opening whatsapp...")
  window.open("whatsapp://")
}
else if(message.includes("open Figma")||message.includes("Hey siri open Figma")){
  speak("opening Figma...")
  window.open("Figma://")
}
else if(message.includes("what is time")){
 let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
 speak(time)
}
else if(message.includes("what is date")){
  let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
  speak(date)
}
else if(message.includes("open mysql") || message.includes("open phpmyadmin") || message.includes("open php my admin")|| message.includes("open my sequel")){
  speak("Opening MySQL...");
  window.open("http://localhost/phpmyadmin", "_blank");
}

else{
  let finalresult = `this is what i found on internet regarding ${message.replace('siri','')}`
  speak(finalresult)
  window.open(`https://www.google.com/search?q=${message.replace('siri','')}`,"_blank")
}












}
