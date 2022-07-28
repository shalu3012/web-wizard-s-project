let inpImg=document.getElementById('inpImg');
let imgContainer=document.getElementById('imgContainer');
var imgElement = document.getElementById('image');
let imgText=document.getElementById('imgText')

var canvas = new fabric.Canvas('c',{
    width: "800",
    height: '500',
    backgroundColor:'#F5F5F5'
});
canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });
inpImg.addEventListener('change',function(){
    const file=this.files[0]
    if(file){
        let reader=new FileReader();
        reader.addEventListener('load',function(){
            new fabric.Image.fromURL(reader.result, (Img) => {
                Img.set({
                    width:500,
                    height:500,
                    left: 150,
                  })
                canvas.add(Img)
                });
                
        })
        reader.readAsDataURL(file)
    }
    
})

