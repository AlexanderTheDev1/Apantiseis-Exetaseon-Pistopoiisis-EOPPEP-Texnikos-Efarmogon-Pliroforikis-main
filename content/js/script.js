document.querySelectorAll('.selected').forEach(function(element) {
    
    element.addEventListener('click', function() {
      
        this.classList.toggle('active');
    }); 
});



document.querySelectorAll('.active').forEach(function(element) {
if ('Q-1 active' && 'A-1 active') {
    element.addEventListener('click', function() {
        this.classList.toggle('correct');
    });
} element.addEventListener('click', function() {
    this.classList.toggle('wrong');
});
});