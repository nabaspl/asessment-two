const divs = document.querySelectorAll('.panel');

let parent,sibling;
// Assign event listener with callback to every div card:
divs.forEach((div) => {
    div.addEventListener("click", function() {
        
        //remove all existing expand and shrink
        for (i = 0; i < divs.length; i++){
            divs[i].classList.remove('panel-expand');
            divs[i].classList.remove('shrink');

            parent = divs[i].parentElement;
            parent.classList.remove("col-expand");

            sibling = divs[i].nextSibling;
            sibleDiv = sibling.nextSibling
            if(sibleDiv && sibleDiv.tagName === 'DIV'){
                sibleDiv.classList.remove("panel-expand");
                sibleDiv.classList.remove("shrink");
            }
            
        }
        
    //add expand and shrink classes
    parent = this.parentElement;
    parent.classList.toggle("col-expand");

    this.classList.remove("shrink");
    this.classList.toggle("panel-expand");

    }
    );
});