function swap(id1, id2){
    var image1 = document.getElementById(id1);
    var image2 = document.getElementById(id2);
    var source1 = image1.src;
    var source2 = image2.src;
    image1.src = source2;
    image2.src = source1;
}
