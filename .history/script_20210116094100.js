(function() {
    const NORTH = 1;
    const WEST = 2;
    const SOUTH = 3;
    const EAST = 4;

    let current_direction = 1;
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
        } else if (e.keyCode == '39') {
            console.log(current_direction * 90)
            rover.style.transform = `rotate(${current_direction*90}deg)`;
            current_direction += 1;
        } else if (e.keyCode == '37') {

            rover.style.transform = `rotate(-${current_direction*90}deg)`;
            current_direction = current_direction == 1 ? 4 : current_direction - 1;
            console.log(current_direction);
        }
    });
    let changeDirection = () => {

    }
    console.log(rover)

})()