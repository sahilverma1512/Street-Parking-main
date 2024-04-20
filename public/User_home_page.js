let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Show the first slide initially
showSlide(currentSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);


    

     // Get the modal element
     var modal = document.getElementById('myModal');
     // Get the body element
     var body = document.body;
 
     // Get the close button element
     var closeBtn = document.querySelector('.close-btn');
 
     // Function to open modal
     function openModal() {
         modal.style.display = 'flex';
         // Disable scrolling
         body.style.overflow = 'hidden';
     }
 
     // Function to close modal
     function closeModal() {
         modal.style.display = 'none';
         // Enable scrolling
         body.style.overflow = 'auto';
     }
 
     // Open modal after 5 seconds
     setTimeout(openModal, 1000);
 
     // Close modal when close button is clicked
     closeBtn.addEventListener('click', closeModal);
 
     // Close modal when clicking outside the modal content
     window.addEventListener('click', function(event) {
         if (event.target === modal) {
             closeModal();
         }
     });
 






     document.getElementById('menu-icon').addEventListener('click', function() {
        const menuOptions = document.getElementById('menu-options');
    
        if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
            menuOptions.style.display = 'block';
        } else {
            menuOptions.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(event) {
        const menuOptions = document.getElementById('menu-options');
        const menuIcon = document.getElementById('menu-icon');
    
        if (!menuOptions.contains(event.target) && event.target !== menuIcon) {
            menuOptions.style.display = 'none';
        }
    });