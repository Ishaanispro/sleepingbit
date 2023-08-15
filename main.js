function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
Canvas = createCanvas(300, 300);
Canvas.center();
background("white");
Canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function draw(){
       strokeWeight(10);
       stroke(0);
       if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clearcanvas(){
    background("white");
}

function classifyCanvas(){
    classifier.classify(Canvas, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("label").innerHTML = "label :" + results[0].label;
    document.getElementById("confidence").innerHTML = "confidence :" + Math.round(results[0].confidence)*100 + "%";
    utterThis = new SpeechSynthesisUtterance;
    synth.speak(utterThis);
 }

}