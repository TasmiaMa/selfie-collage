var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
console.log(event);
var content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content;
}

function Webcam_set(){
    width=360
    height=250
}




function speak(){
    var synth = window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam_set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");



function speak(){
    var synth = window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam_set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");





function speak(){
    var synth = window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam_set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

