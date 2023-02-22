function setup()
{
    canvas = createCanvas( 550, 500);
    canvas.center();

    cocossd = ml5.objectDetector("cocossd", modelready);   
}

function modelready()
{
    console.log("model is working")
}


function preload()
{

}

function draw()
{

}