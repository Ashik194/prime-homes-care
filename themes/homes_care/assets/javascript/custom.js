
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});


var tacker = document.querySelector("#careTackerDiv");
var giver = document.querySelector("#careGoverDiv");
tacker.addEventListener('click', function(){
    giver.style.backgroundColor= "transparent";
    giver.style.color = "#004a65";
    giver.style.border = "2px solid #004a65";
    this.style.backgroundColor= "#004a65";
    this.style.color = "#FFFFFF";
})

giver.addEventListener('click', function(){
    tacker.style.backgroundColor= "transparent";
    tacker.style.color = "#004a65";
    tacker.style.border = "2px solid #004a65";
    this.style.backgroundColor= "#004a65";
    this.style.color = "#FFFFFF";
})