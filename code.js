var clickcount = 0; //give click count to handle
var player1_score = 0; //initial value of player 1 score
var player2_score = 0; //initial value of player 2 score
let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];  // initial value of matrix, matrix can have three values like -1, 0, 1
   // 0 means space or empty char
   //1 means 'X' come from player 1 
   // -1 means 'O' come from player 2

/* function show_array_for_debug(arr) { 
    console.log(arr);
} */ 

// use show_array_for_debug function for debug contol 

function check_arr_for_horizantal(arr) { // use for horizontal scores 
    for (let i = 0; i < 3; i++) {

        let matrix_value = 0;

        for (let j = 0; j < 3; j++) {

            matrix_value = matrix_value + parseInt(arr[i][j])
            //console.log(matrix_value) //debug control
            if (matrix_value == 3) {
                player1_score++;
                console.log("player1_score++ -YATAYDA")
            } else if (matrix_value == -3) {
                player2_score++;
                console.log("player2_score++ -YATAYDA")
            }

        }

    }
}
function check_arr_for_vertical(arr) {  // use for vertical scores 
    for (let col_i = 0; col_i < 3; col_i++) {

        let matrix_value = 0;

        for (let row_j = 0; row_j < 3; row_j++) {

            matrix_value = matrix_value + parseInt(arr[row_j][col_i])
            //console.log(matrix_value)
            if (matrix_value == 3) {
                player1_score++;
                console.log("player1_score++ -DIKEYDE")
            } else if (matrix_value == -3) {
                player2_score++;
                console.log("player2_score++ -DIKEYDE")
            }
        }

    }
}

function check_arr_for_diagonal(arr) { //use for diagonal scores
    console.log("check_arr_for_diagonal : ")
    let diagonal_sum_left_to_right = 0;
    let diagonal_sum_right_to_left = 0;
    for (let i = 0; i < 3; i++) {

        diagonal_sum_left_to_right = diagonal_sum_left_to_right + parseInt(arr[i][i]);

        diagonal_sum_right_to_left = diagonal_sum_right_to_left + parseInt(arr[i][(3 - 1) - i]);

    }

     /* console.log("diagonal_sum_left_to_right  : ", diagonal_sum_left_to_right)
    console.log("diagonal_sum_right_to_left  : ", diagonal_sum_right_to_left) */ // use for debug

    if (diagonal_sum_left_to_right == 3) { // if player 1 has score in diagonal left to right
        player1_score++;
        console.log("player1_score++ diagonal_sum_left_to_right-DUZKOSE")
    } else if (diagonal_sum_left_to_right == -3) { // if player 2 has score diagonal left to right
        player2_score++;
        console.log("player2_score++ diagonal_sum_left_to_right-DUZKOSE")
    }

    if (diagonal_sum_right_to_left == 3) { // if player 1 has score  in diagonal left to right
        player1_score++;
        console.log("player1_score++ diagonal_sum_right_to_left -TERSKOSE")
    } else if (diagonal_sum_right_to_left == -3) {  // if player 2 has score diagonal right to left
        player2_score++;
        console.log("player2_score++ diagonal_sum_right_to_left -TERSKOSE")
    }


}

function converter_xo_to_1_1(xo_input_par) { // convert X and O -> 1 and -1
    if (xo_input_par == 'X') {
        return 1;
    } else if (xo_input_par == 'O') {
        return -1;
    }
    return 0;
}
function change(id) { // change X or O when click 


    if (!(document.getElementById(id).value == "X" || document.getElementById(id).value == "O")) {


        clickcount = clickcount + 1;

        if ((clickcount % 2) == 1) {

            document.getElementById(id).value = 'X';

        }
        else {
            document.getElementById(id).value = 'O';
        }
         // console.log("Hesaplıyor.") it is for debug control



        matrix[0][0] = converter_xo_to_1_1(document.getElementById('txtbox1').value) 
        matrix[0][1] = converter_xo_to_1_1(document.getElementById('txtbox2').value)
        matrix[0][2] = converter_xo_to_1_1(document.getElementById('txtbox3').value)
        matrix[1][0] = converter_xo_to_1_1(document.getElementById('txtbox4').value)
        matrix[1][1] = converter_xo_to_1_1(document.getElementById('txtbox5').value)
        matrix[1][2] = converter_xo_to_1_1(document.getElementById('txtbox6').value)
        matrix[2][0] = converter_xo_to_1_1(document.getElementById('txtbox7').value)
        matrix[2][1] = converter_xo_to_1_1(document.getElementById('txtbox8').value)
        matrix[2][2] = converter_xo_to_1_1(document.getElementById('txtbox9').value)

        //show_array_for_debug(matrix);

        player1_score = 0;
        player2_score = 0;
        check_arr_for_horizantal(matrix)
        check_arr_for_vertical(matrix)
        check_arr_for_diagonal(matrix)


        if (clickcount == 9) { //if all box are full 

            // console.log("PUANLAR: ",player1_score,player2_score) //debug control 
            if (player1_score == player2_score) {
                alert(`The Game Result : The Scores are equal.`)
                document.getElementById('game_result').innerHTML = `The Game Result : The Scores are equal.`
            }

            else if (player1_score > player2_score) {
                alert(`The Game Result : Player 1 won`)
                document.getElementById('game_result').innerHTML = `The Game Result : Player 1 won`
            }

            else if (player2_score > player1_score) {
                alert(`The Game Result : Player 2 won`)
                document.getElementById('game_result').innerHTML = `The Game Result : Player 2 won`




            }
        }

        document.getElementById('scores').innerHTML = `Player 1 Score : ${player1_score} , Player 2 Score : ${player2_score}`






    }

}
