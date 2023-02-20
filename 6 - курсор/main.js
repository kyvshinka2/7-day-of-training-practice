document.onmousemove = function() {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="./img/долги.png" id="cat">');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';

    document.onmousemove = function(event) {
        cat.style.left = event.clientX + 20 + 'px';
        cat.style.top = event.clientY + 30 + 'px';
    }
}

// перемещение по блокам
var cell = document.querySelectorAll('.box-cell'),
    cell_active = null;

window.addEventListener('keydown', function(event) {
    if (event.keyCode == "13") {

        if (cell_active !== null) {
            cell[cell_active].classList.remove('box-cell--active');
        };

        cell_active = 0;

        cell[cell_active].classList.add('box-cell--active');

    } else if (event.keyCode == "37") {

        if (cell_active !== null && cell_active !== 0 && cell_active !== 3 && cell_active !== 6) {
            cell[cell_active].classList.remove('box-cell--active');

            cell_active = cell_active - 1;

            cell[cell_active].classList.add('box-cell--active');
        };

    } else if (event.keyCode == "38") {

        if (cell_active !== null && cell_active !== 0 && cell_active !== 1 && cell_active !== 2) {
            cell[cell_active].classList.remove('box-cell--active');

            cell_active = cell_active - 3;

            cell[cell_active].classList.add('box-cell--active');
        };

    } else if (event.keyCode == "39") {

        if (cell_active !== null && cell_active !== 2 && cell_active !== 5 && cell_active !== 8) {
            cell[cell_active].classList.remove('box-cell--active');

            cell_active = cell_active + 1;

            cell[cell_active].classList.add('box-cell--active');
        };

    } else if (event.keyCode == "40") {

        if (cell_active !== null && cell_active !== 6 && cell_active !== 7 && cell_active !== 8) {
            cell[cell_active].classList.remove('box-cell--active');

            cell_active = cell_active + 3;

            cell[cell_active].classList.add('box-cell--active');
        };

    }
});