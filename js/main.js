// Get Slider Items | Array.form [ES6 Feature]
var SliderImages= Array.from(document.querySelectorAll(".slider-container img"));
// console.table(SliderImages)

// Get Number of Slides
var slidesCount = SliderImages.length;
// console.log(slidesCount );

//Set Current Slide 
var CurrentSlide = 1;

//Slide Number String Element 
var slideNumberElement = document.getElementById("slide-number")

//Previous and Next Buttons 
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev')


// Handle Click on Previous and Next Buttons 
nextButton.onclick=nextSlide;
prevButton.onclick=prevSlide;

//Create the main UL Element 
var paginationElement= document.createElement('ul');

//Set ID On Created Ul Element
paginationElement.setAttribute('id','pagination-ul');

//Create List Items Based On Slides Count
for (var i=1; i<= slidesCount; i++){

    // Create The li
    var paginationItem = document.createElement('li');

    //Set Custom Attribute
    paginationItem.setAttribute('data-index', i)

    //Set Item Content 
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the Main Ul List 
    paginationElement.appendChild(paginationItem)

}

// Add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement)

// Get The New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets= Array.from(document.querySelectorAll("#pagination-ul li"));

//loop through all bullets items
for(i=0; i<paginationsBullets.length;i++){
    paginationsBullets[i].onclick = function(){
        CurrentSlide = parseInt(this.getAttribute('data-index'));

        theChecker()
    }
}


//Trigger The Checker Function 
theChecker();

// Next Slide Function 
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        //do nothing
        return false;
    }else{
        CurrentSlide++;

        theChecker()
    }
}


// Previous Slide Function 
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        //do nothing
        return false;
    }else{
        CurrentSlide--;
    
        theChecker()
    }
   
}

// Create The Checker Function 
function theChecker(){

    // Set The Slide Number 
    slideNumberElement.textContent = 'Slide #'+(CurrentSlide) + ' of '+(slidesCount);


    //Remove All Active classes
    removeAllActive();


    // Set Active Class On Current Slide
    SliderImages[CurrentSlide - 1].classList.add('active');

    // Set Active Class on Class On Current Pagination Item 
    paginationCreatedUl.children[CurrentSlide -1].classList.add('active');

    // Check if current slide is the first 
    if(CurrentSlide==1){

        //Add Disabled class on previous button 
        prevButton.classList.add('disabled');
    }else{
        //remove Disabled class on previous button 
        prevButton.classList.remove('disabled')
    }


    // Check if current slide is the last 
    if(CurrentSlide==slidesCount){

        //Add Disabled class on previous button 
        nextButton.classList.add('disabled');
    }else{
        //remove Disabled class on previous button 
        nextButton.classList.remove('disabled')
    }

}

// Remove All Active Classes From Images and  Pagination Bullets
function removeAllActive(){

    // loop Through Images
    SliderImages.forEach(function(img){
        img.classList.remove('active');
    })

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove('active')
    });
}