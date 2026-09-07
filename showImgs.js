//info for each image
const imagesList = [
    { //0-1, index-count
        path: "assets/20210622_fantasyplants.webp",
        alt: "orange and blue mushrooms and trees",
        tags: ["traditional","2021","doodle"],
        desc: "2021-06-22\nI like mushrooms"},
    {
        path: "assets/20230422_masquerade.webp",
        alt: "red, green, and blue feathered masquerade masks",
        tags: ["traditional","2023","doodle"],
        desc: "2023-04-22\nI wanted to use a multicolored pencil for something"},
    {
        path: "assets/20240402_fantasycreatures.webp",
        alt: "small red fictional creatures",
        tags: ["traditional","2024","doodle"],
        desc: "2024-04-02\nBrainstorming small creature designs that never got used again"},
    {
        path: "assets/20240403_takeout.webp",
        alt: "green and red take out food",
        tags: ["traditional","2024","wallpaper"],
        desc: "2024-04-03\nUsed a Pinterest image as reference"},
    {
        path: "assets/20240824_food.webp",
        alt: "drinks, desserts, and dumplings",
        tags: ["traditional","2024","doodle"],
        desc: "2024-08-24\nI want to get better at drawing food"},
    {
        path: "assets/20240925_pastries.webp",
        alt: "blue and green desserts on a tray",
        tags: ["traditional","2024","wallpaper"],
        desc: "2024-09-25\nUsed a Pinterest image as reference"},
    {
        path: "assets/20241214_banana.webp",
        alt: "red and blue peeled banana",
        tags: ["traditional","2024","doodle"],
        desc: "2024-12-14\nDoing something colorful"},
    {
        path: "assets/20241214_beetle.webp",
        alt: "blue and orange beetle",
        tags: ["traditional","2024","doodle"],
        desc: "2024-12-14\nI like animals with shells"},
    {
        path: "assets/20241214_friedegg.webp",
        alt: "green and orange fried egg on a blue table",
        tags: ["traditional","2024","wallpaper"],
        desc: "2024-12-14\nDrawing something colorful"},
    {
        path: "assets/20250109_lemoncrab.webp",
        alt: "hermit crab with a lemon shell",
        tags: ["traditional","2025","character"],
        desc: "2025-01-09\nCombining a crustacean with a lemon theme"},
    {
        path: "assets/20250415_mushrooms.webp",
        alt: "red mushrooms",
        tags: ["traditional","2025","doodle"],
        desc: "2025-04-15\nI just like mushrooms"},
    {
        path: "assets/20250423_person.webp",
        alt: "purple human with angle wings",
        tags: ["traditional","2025","character"],
        desc: "2025-04-23\nSince so many people draw humans, I gave it a shot"},
    {
        path: "assets/20250617_flowers.webp",
        alt: "purple flowers with green leaves",
        tags: ["traditional","2025","wallpaper"],
        desc: "2025-06-17\nDrawing something with white accents because the paper is brown"},
    {
        path: "assets/20250617_octopus.webp",
        alt: "red and orange octopus with blue suckers",
        tags: ["traditional","2025","character","wallpaper"],
        desc: "2025-06-17\nI like octopus"},
    {
        path: "assets/20250619_pufferfish.webp",
        alt: "yellow and orange puffer fish",
        tags: ["traditional","2025","character","doodle"],
        desc: "2025-06-19\nI wanted to practice drawing fish"},
    {
        path: "assets/20260314_beach.webp",
        alt: "blue and red waves with purple and green clouds",
        tags: ["traditional","2026","wallpaper"],
        desc: "2026-03-14\nTrying to draw with stylized colors"},
    {
        path: "assets/20260722_strawberrydesserts.webp",
        alt: "strawberry desserts",
        tags: ["traditional","2026","wallpaper","doodle"],
        desc: "2026-07-22\nUsed Pinterest images as reference"},
];
//empty lists for filtering
var filteredImagesList = [];
var filteredTempList = [];


//when website loaded: give form eventListener so it works
document.addEventListener('DOMContentLoaded',function(){    
    //find form(since submit button might not exist yet), give it eventListener to submit the right data for filter to work
    const form = document.getElementById('formFilter');
    form.addEventListener('submit', function(event){
        //these lines are given to the button
        event.preventDefault();
        const data = new FormData(form);
        filter(data.getAll('year'),imagesList,false);
        filter(data.getAll('content'),filteredImagesList,true);
    });
    
    //elements(columns) that are already in the website 
    const col1 = document.getElementById('column1');
    const col2 = document.getElementById('column2');
    const col3 = document.getElementById('column3');
    //add images to the columns
    addImg(col1,0,imagesList);
    addImg(col2,1,imagesList);
    addImg(col3,2,imagesList);
});

//create list with filtered elements, then optionally: add those images to website
//filter has a done parameter to allow compounded searching
function filter(values,list,done){
    //create filtered list with images that match
    filteredTempList = [];
    for (let j=0; j<list.length; j++){
        for(let k=0; k<values.length; k++){
            if (list[j].tags.includes(values[k])){
                filteredTempList.push(list[j]);
                break;
            }
        }
    }
    filteredImagesList = filteredTempList;

    //done is set to true when it's ready to add images to website
    if (done) {
        //elements(columns) that are already in the website
        const col1 = document.getElementById('column1');
        const col2 = document.getElementById('column2');
        const col3 = document.getElementById('column3');
        const pText = document.getElementById('gridP');
    
        //remove existing images
        col1.replaceChildren();
        col2.replaceChildren();
        col3.replaceChildren();
    
        if (filteredImagesList.length > 0){
            //update text to say how many images the filter found
            pText.textContent = 'Found '+filteredImagesList.length;
            //add filtered images
            addImg(col1,0,filteredImagesList);
            addImg(col2,1,filteredImagesList);
            addImg(col3,2,filteredImagesList);
        } else {
            pText.textContent = 'No images match';
        }
    }
}

//create images for a whole column
function addImg(col,startIndex,list){
    //since three columns, i+=3 to add every third item
    for (let i=startIndex; i<list.length; i+=3){
        //use button so images can be clicked
        const button = document.createElement('button');
        //addEventListener gives button the functions to change what's visible on website and show image's details
        button.addEventListener('click',() => updFocusImg(list[i].path,list[i].tags,list[i].desc));
        button.id = 'button'+i;
        button.addEventListener('click',toggleColumns);
        //add the actual image
        const buttonImg = document.createElement('img');
        buttonImg.src = list[i].path;
        buttonImg.alt = list[i].alt;
        button.appendChild(buttonImg);
        col.appendChild(button);
    }
}
