Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captureimage" src="'+data_uri+'">';  
    });
}

console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n1Ma8KtpZ/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Is Loaded");
}

function check(){
img=document.getElementById("captureimage");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error)
{
    console.log(error);
}
else{
console.log(results);
document.getElementById("objectname").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}