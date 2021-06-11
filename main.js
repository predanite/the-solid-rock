var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() 
{
    document.getElementById("textbox").innerHTML = "" ;
    recognition.start();
}
recognition.onresult = function run(event) 
{
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").value = Content ;
    if(Content == "take my selfie")
    {
        speak() ;
    }
}
    
    
    
function speak ()
{
var synth = window.SpeechSynthesis;
speakdata = "taking your selfie in 5 seconds";
var utterThis =new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{
    takesnapshot();
},5000);
}


Webcam.set({
    width:320,
    height:240,
    image_format : 'png',
        png_quality :100
});
camera = document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="self" src="'+data_uri+'">';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("myselfie.png").src;
}