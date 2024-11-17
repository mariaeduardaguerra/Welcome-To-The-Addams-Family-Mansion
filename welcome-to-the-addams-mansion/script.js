// // Play background music on load
// window.addEventListener('load', () => {
//     const music = document.getElementById('background-music');
//     music.volume = 0.5; // Adjust volume
//     music.play();
// });

// // Button click interaction
// const enterButton = document.getElementById('enter-button');
// enterButton.addEventListener('click', () => {
//     alert('You have entered the Addams Mansion. Beware!');
// });
// Select elements
const music = document.getElementById('background-music');
const enterButton = document.getElementById('enter-button');

// Button click interaction
enterButton.addEventListener('click', () => {
    // Play music
    music.volume = 0.5; // Adjust volume
    music.play();
    
    // Display alert
    alert('You have entered the Addams Mansion. Beware!');
});
