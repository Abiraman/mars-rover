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
        var rect = rover.getBoundingClientRect();
        e = e || window.event;

        if (e.keyCode == '38') {

            switch (current_direction) {
                case 1:
                    var top = parseInt(rover.style.top.replace('px', ""));
                    if (top > 0) {
                        rover.style.top = (top - 1) + 'px';
                    }
                    break;
                case 2:
                    var left = parseInt(rover.style.left.replace('px', ""));
                    if (left > 0) {
                        rover.style.left = (left + 1) + 'px';
                    }
                    break;
                case 3:
                    var top = parseInt(rover.style.top.replace('px', ""));
                    if (top > 0) {
                        rover.style.top = (top + 1) + 'px';
                    }
                    break;
                case 4:
                    var left = parseInt(rover.style.left.replace('px', ""));
                    if (left > 0) {
                        rover.style.left = (left - 1) + 'px';
                    }
                    break;

                default:
                    break;
            }
        } else if (e.keyCode == '40') {
            if (current_direction == 3) {
                var top = parseInt(rover.style.top.replace('px', ""));
                if (top > 0) {
                    rover.style.top = (top + 1) + 'px';
                }
            }
            // down arrow
        } else if (e.keyCode == '39') {
            current_direction = current_direction + 1 > 4 ? 1 : current_direction + 1;
            rover.style.transform = `rotate(${(current_direction-1)*90}deg)`;

        } else if (e.keyCode == '37') {
            current_direction = current_direction == 1 ? 4 : current_direction - 1;
            rover.style.transform = `rotate(${(current_direction-1)*90}deg)`;
        }
    });
    let changeDirection = () => {

    }


})()