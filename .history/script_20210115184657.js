(function() {
    const NORTH = 0;
    const EAST = 1;
    const WEST = 2;
    const SOUTH = 3;
    let current_direction = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rover = document.getElementById('rover-container');
    rover.style.left = x;
    rover.style.top = y;

})