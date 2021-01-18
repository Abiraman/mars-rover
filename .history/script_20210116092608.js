(function() {
    const NORTH = 0;
    const EAST = 1;
    const WEST = 2;
    const SOUTH = 3;
    let current_direction = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rover = document.getElementById('rover-container');
    rover.style.left = x + 'px';
    rover.style.top = y + 'px';
    window.addEventListener("keydown", function(e) {
        console.log(e.keyCode)
        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        } else if (e.keyCode == '40') {
            // down arrow
        } else if (e.keyCode == '37') {
            console.log('right')
            rover.style.transform = 'rotate(90deg)';
        } else if (e.keyCode == '39') {
            console.log('left')
            rover.style.transform = 'rotate(-90deg)';
        }
    });
    let changeDirection = () => {

    }
    console.log(rover)

})()