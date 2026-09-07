//info for each image in the carousel
const progressList = [
    {
        date: "August 24 and 25",
        desc: "- vertical nav bar and grid with images",
        srcList: ["assets/progress/20260825_wip.png","progress/20260826_wip1.png"]},
    {
        date: "August 26",
        desc: "- replaced images with buttons and created an about-image div",
        srcList: ["assets/progress/20260826_wip2.png","progress/20260826_wip3.png"]},
    {
        date: "August 27",
        desc: "- form to filter by year",
        srcList: ["assets/progress/20260827_wip.png"]},
    {
        date: "August 29",
        desc: "- display the filtered images and added options to filter by content",
        srcList: ["assets/progress/20260829_wip1.png","progress/20260829_wip2.png"]},
    {
        date: "September 5",
        desc: "- edited the about-image info, dark mode with css and js, and started the about-website div",
        srcList: ["assets/progress/20260905_wip1.png","progress/20260905_wip3.png","progress/20260905_wip2.png"]},
    {
        date: "September 6",
        desc: "redid the about-website by creating buttons and radio input",
        srcList: ["assets/progress/20260906_wip1.png","progress/20260906_wip2.png"]},
    {
        date: "September 7",
        desc: "- created functions for the buttons and radio input in the about-website div",
        srcList: ["assets/progress/20260907_wip1.png","progress/20260907_wip2.png"]}
        //date: "",
        //desc: "",
        //srcList: ["","",""]}, //add/remove commma
];

//document.addEventListener('DOMContentLoaded',function(){    
//    displayImg(0);
//});

function aboutDay(index){
    const hDate = document.getElementById('aboutDate');
    const pDesc = document.getElementById('aboutDesc');
    const pProgress = document.getElementById('aboutProgressIndex');
    const pImg = document.getElementById('aboutImgIndex');
    const img = document.getElementById('aboutImg');
    hDate.textContent = progressList[index].date;
    pDesc.textContent = progressList[index].desc;
    pProgress.textContent = index;
    pImg.textContent = 0;
    img.src = progressList[index].srcList[0];

    const div = document.getElementById('carouselDiv');
    for (const child of div.children){
        child.style.display = "none";
    }
    for (let i=0; i<progressList[index].srcList.length; i++){
        document.getElementById('carousel'+i).style.display = "inline-block"; //means visible
    }
    document.getElementById('carousel0').checked = true;

    const btnPrev = document.getElementById('aboutPrev');
    const btnNext = document.getElementById('aboutNext');
    if (index == 0){
        if (!btnPrev.className.includes('inactive')){
            btnPrev.className = btnPrev.className+' inactive';
        }
        btnNext.classList.remove('inactive');
    } else if (index >= progressList.length-1){
        if (!btnNext.className.includes('inactive')){
            btnNext.className = btnNext.className+' inactive';
        }
        btnPrev.classList.remove('inactive');
    } else {
        btnNext.classList.remove('inactive');
        btnPrev.classList.remove('inactive');
    }
}

function aboutImg(index){
    const img = document.getElementById('aboutImg');
    const imgIndex = document.getElementById('aboutImgIndex');
    const progressIndex = document.getElementById('aboutProgressIndex').textContent;
    
    img.src = progressList[progressIndex].srcList[index];
    imgIndex.textContent = index;
}

function aboutNextImg(){
    const img = document.getElementById('aboutImg');
    const imgIndex = document.getElementById('aboutImgIndex');
    const progressIndex = document.getElementById('aboutProgressIndex').textContent;

    const carouselLength = progressList[progressIndex].srcList.length;
    //use Number() and +0 to really make sure it's an int
    const currentIndex = Number(imgIndex.textContent)+0;
    if ((currentIndex+1) >= carouselLength){
        aboutImg(0);
        document.getElementById('carousel0').checked = true;
    } else {
        const nextIndex = Number(currentIndex)+1;
        aboutImg(nextIndex);
        imgIndex.textContent = nextIndex;
        document.getElementById('carousel'+nextIndex).checked = true;
    }
}

function nextProgress(){
    const progressIndex = document.getElementById('aboutProgressIndex');
    const index = Number(progressIndex.textContent);
    if ((index+1) < progressList.length){
        aboutDay(index+1);
    }
}
function prevProgress(){
    const progressIndex = document.getElementById('aboutProgressIndex');
    const index = Number(progressIndex.textContent);
    if ((index-1) >= 0){
        aboutDay(index-1);
    }
}
