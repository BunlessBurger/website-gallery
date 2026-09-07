//create the rest of the form elements

document.addEventListener('DOMContentLoaded',function(){    
    const form = document.getElementById('formFilter');
    const labelYear = document.createElement('label');
    labelYear.for = 'formFilter';
    labelYear.textContent = 'Filter by year';
    const brYear = document.createElement('br');
    form.appendChild(labelYear);
    form.appendChild(brYear);

    //create checkboxes for each year
    for (let i=1; i<7; i++){
        const newInput = document.createElement('input');
        newInput.type = 'checkbox';
        newInput.name = 'year';
        newInput.id = 'year'+i;
        newInput.value = '202'+i;
        newInput.checked = true;
        const newLabel = document.createElement('label');
        newLabel.for = 'year'+i;
        newLabel.textContent = '202'+i;
        form.appendChild(newInput);
        form.appendChild(newLabel);
    }
    
    const endBr1 = document.createElement('br');
    const endBr2 = document.createElement('br');
    form.appendChild(endBr1);
    form.appendChild(endBr2);
    
    //add button to submit form (event = start filtering)
    const buttonSearch = document.createElement('button');
    buttonSearch.type = "submit";
    buttonSearch.textContent = 'Search';
    buttonSearch.className = 'interact border';
    buttonSearch.addEventListener('click',showColumns);
    form.appendChild(buttonSearch);

    //add button to reset filter (set all checkboxes to checked)
    const buttonReset = document.createElement('button');
    buttonReset.type = "button";
    buttonReset.textContent = 'Reset filter options';
    buttonReset.className = 'interact border';
    buttonReset.addEventListener('click', function(event){
        event.preventDefault();
        for (const child of form.children){
            if (child.checked == false){
                child.checked = true;
            }
        }
    });
    form.appendChild(buttonReset);
    
});