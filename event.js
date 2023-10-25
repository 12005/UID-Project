// event.js

document.addEventListener('DOMContentLoaded', function () {

    
    // Elements to apply mouse events
    const elementsToHover = document.querySelectorAll('.hover-effect');
    const buttons = document.querySelectorAll('.cta-button');

    // Function to change text color on hover
    function handleMouseOver(event) {
        event.target.style.color = '#fac52d';
    }

    // Function to reset text color after hover
    function handleMouseOut(event) {
        event.target.style.color = '#333';
    }

    // Function to show a message on button click
    function handleClick(event) {
        alert('You clicked the button!');
    }

    // Add mouseover and mouseout events to elements
    elementsToHover.forEach(function (element) {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
    });

    // Add click event to buttons
    buttons.forEach(function (button) {
        button.addEventListener('click', handleClick);

        // Reset text color after the message is closed
        button.addEventListener('mouseup', function (event) {
            setTimeout(function () {
                event.target.style.color = '#333';
            }, 500); // Reset after 0.5 seconds
        });
    });
});
