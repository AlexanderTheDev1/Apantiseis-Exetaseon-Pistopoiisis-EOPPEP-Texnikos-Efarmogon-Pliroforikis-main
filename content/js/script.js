document.querySelectorAll('.selected').forEach(function(element) {
    
    element.addEventListener('click', function() {
      
        this.classList.toggle('active');
    });
});