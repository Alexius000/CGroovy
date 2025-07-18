const path = [
    "../Asset Files/Images/Recommendation1.jpg",
    "../Asset Files/Images/Recommendation2.jpg",
    "../Asset Files/Images/Recommendation3.jpg"
]

let Image = 0

$('#setelah').click(function(){
    Image++
    if(Image >= path.length){
        Image = 0
    }
    $('#slider-img').attr("src", path[Image])
})

$('#sebelum').click(function(){
    Image--
    if(Image < 0){
        Image = path.length-1
    }
    $('#slider-img').attr("src", path[Image])
})