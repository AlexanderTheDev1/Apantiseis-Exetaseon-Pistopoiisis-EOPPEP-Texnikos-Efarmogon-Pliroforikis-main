

document.querySelectorAll('.question, .answer').forEach(function(element) {
    
    element.addEventListener('click', function() {
      
        this.classList.toggle('active');
    }); 
});
