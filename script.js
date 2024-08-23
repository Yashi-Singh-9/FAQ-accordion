document.addEventListener('DOMContentLoaded', () => {
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    const accordionDescriptions = document.querySelectorAll('.accordion-description');

    // Function to hide all accordion descriptions
    function hideAllDescriptions() {
        accordionDescriptions.forEach(description => {
            description.style.maxHeight = null;
            description.previousElementSibling.setAttribute('aria-expanded', 'false');
            description.previousElementSibling.querySelector('.plus-icon').style.display = 'block';
            description.previousElementSibling.querySelector('.minus-icon').style.display = 'none';
        });
    }

    // Function to show the specific accordion description
    function showDescription(description) {
        description.style.maxHeight = description.scrollHeight + 'px';
        description.previousElementSibling.setAttribute('aria-expanded', 'true');
        description.previousElementSibling.querySelector('.plus-icon').style.display = 'none';
        description.previousElementSibling.querySelector('.minus-icon').style.display = 'block';
    }

    // Expand the first accordion item by default
    if (accordionDescriptions.length > 0) {
        showDescription(accordionDescriptions[0]);
    }

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const accordionDescription = this.nextElementSibling;

            // Toggle the clicked accordion item
            if (accordionDescription.style.maxHeight) {
                // If the description is already open, close it
                hideAllDescriptions();
            } else {
                // Hide all other descriptions and show the clicked one
                hideAllDescriptions();
                showDescription(accordionDescription);
            }
        });
    });
});
