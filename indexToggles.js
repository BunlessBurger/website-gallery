//change image details
function updFocusImg(imgSrc,imgTags,imgDesc){
    document.getElementById('focusImg').src = imgSrc;
    document.getElementById('focusTags').textContent = imgTags;
    document.getElementById('focusDesc').textContent = imgDesc;
}


//hide or show the three image columns
function toggleColumns(){
    const visible = document.getElementById('grid').style.display;
    
    if (visible == "") {// "" means it's visible
        //so HIDE
        document.getElementById('grid').style.display = "none";
        document.getElementById('gridP').style.display = "none";
        document.getElementById('focus').style.display = "";
        document.getElementById('formFilter').style.display = "none";
        document.getElementById('about').style.display = "none";
    } else {
        //SHOW
        document.getElementById('grid').style.display = "";
        document.getElementById('gridP').style.display = "";
        document.getElementById('focus').style.display = "none";
        document.getElementById('about').style.display = "none";
    }
}
//show the columns
function showColumns(){
    document.getElementById('grid').style.display = "";
    document.getElementById('gridP').style.display = "";
    document.getElementById('focus').style.display = "none";
    document.getElementById('about').style.display = "none";
}

//show the about-this div
function showAbout(){
    document.getElementById('about').style.display = "";
    document.getElementById('focus').style.display = "none";
    document.getElementById('grid').style.display = "none";
    document.getElementById('gridP').style.display = "none";
    document.getElementById('formFilter').style.display = "none";
}

//hide or show the search form
function toggleSearch(){
    const visible = document.getElementById('formFilter').style.display;
    
    if (visible == "") {// "" means it's visible
        //hide
        document.getElementById('formFilter').style.display = "none";
    } else {
        //show
        document.getElementById('formFilter').style.display = "";
    }
}

//change theme color by adding/removing css class
function toggleTheme(){
    const body = document.body;
    if (body.className == ""){
        body.className = "dark";
    } else {
        body.className = "";
    }
}