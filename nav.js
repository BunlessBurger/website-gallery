document.addEventListener('DOMContentLoaded',function(){
    //info for each button that will appear on the navigation bar
    const buttonInfoList = [
        {
            name:"\u{1F5BD} Home",
            link:"index.html"
        },
        {
            name:"\u{1F5D8} Search",
            link:"javascript:toggleSearch()"
        },
        {
            name:"\u{1F5B5} About",
            link:"javascript:showAbout()"
        },
        {
            name:"\u{23E3} Display",
            link:"javascript:toggleTheme()"
        }        
    ];
    //const variable holds the HTML element, appendChild adds the finished element to a div that's already in the website
    
    //nav that's already in the website 
    const navWhere = document.getElementById('navBar');

    const newH = document.createElement('h2');
    newH.textContent = "Menu";
    navWhere.appendChild(newH);
    
    //create and add links
    buttonInfoList.forEach(function(item) {
        const newA = document.createElement('a');
        newA.textContent = item.name;
        newA.href = item.link;
        newA.className = 'interact';

        navWhere.appendChild(newA);
    });

});