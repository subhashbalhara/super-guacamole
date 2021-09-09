var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
fabric.image.fromURL('BirthdayImage.jpg', function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(1200);
        block_image_object.scaleToheight(1010);
        block_image_object.set({
            top: 0,
            left: 0
        });

        canvas.add(block_image_object);
    });
}



function playSound() {
    x.play();
}
    fabric.Image.fromURL('BirthdayImage.jpg', function (Img) {
        block_image_object = Img;

        block_image_object.set({
            top: 0,
            left: 0
    });
    canvas.add(block_image_object);
})