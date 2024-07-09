var bulb=0

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="images (1) bulb off.jfif";
        bulb=1
    }
    else{
        document.getElementById("image").src="bulb 0n 1.jfif";
        bulb=0
    }


}