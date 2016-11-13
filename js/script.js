/* Useful functions*/

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

/* taken from http://www.jacklmoore.com/notes/rounding-in-javascript/ */

$(document).ready(function () {
    var operand1, operand2, guessedAnswer, operator = null;
    var answer = 0;

    $("#operand1").on("keyup change", function () {
        operand1 = this.value;
        if (operand1 == "") {
            operand1 = null;
        }
        console.log(operand1);
    });
    $("#operand2").on("keyup change", function () {
        operand2 = this.value;
        if (operand2 == "") {
            operand2 = null;
        }
        console.log(operand2);
    });

    $("#plus").click(function () {
        $(".operator").css("background-color", "gold");
        $(this).css("background-color", "crimson");
        operator = "+";
        console.log(operator);
    });
    $("#minus").click(function () {
        $(".operator").css("background-color", "gold");
        $(this).css("background-color", "crimson");
        operator = "-";
        console.log(operator);
    });
    $("#multiply").click(function () {
        $(".operator").css("background-color", "gold");
        $(this).css("background-color", "crimson");
        operator = "*";
        console.log(operator);
    });
    $("#divide").click(function () {
        $(".operator").css("background-color", "gold");
        $(this).css("background-color", "crimson");
        operator = "/";
        console.log(operator);
    });
    $("#your-answer").on("keyup change", function () {
        guessedAnswer = this.value;
        if (guessedAnswer == "") {
            guessedAnswer = null;
        }
        console.log(guessedAnswer);
    });

    $("#continue-button").click(function () {

        //Reset
        if (document.getElementById("continue-button").getAttribute("value") == "Reset") {
            console.log("Its resetting");

            //correct button
            document.getElementById("continue-button").setAttribute("value", "Continue");

            //change colors and update operator
            $(".operator").css("background-color", "gold");
            operator = "";

            //clear operands
            answer = 0;
            operand1 = 0;
            operand2 = 0;
            guessedAnswer = 0;
            $("#operand1").val("");
            $("#operand2").val("");
            $("#your-answer").val("");

            //fix CSS
            $("#message").css("display", "none");
            $("#your-answer").css("display", "block");
            $(".container-images").css("width", "100%");
            $("#start-img").css("display", "block");
            $("#approves-img").css("display", "none");
            $("#disapproves-img").css("display", "none");
            $(".container-answers").css("display", "none");


        } else {
            var error = false;
            document.getElementById("continue-button").setAttribute("value", "Reset");

            if (operand1 == null) {
                document.getElementById("continue-button").setAttribute("value", "Continue");
                alert("Fill the first operand!");
                error = true;
            }
            if (operand2 == null) {
                document.getElementById("continue-button").setAttribute("value", "Continue");
                alert("Fill the second operand!");
                error = true;
            }
            if (guessedAnswer == null) {
                document.getElementById("continue-button").setAttribute("value", "Continue");
                alert("Guess the answer!");
                error = true;
            }
            if (operator == "" || operator == null) {
                document.getElementById("continue-button").setAttribute("value", "Continue");
                alert("Select the operation you want to do!");
                error = true;
            }

            if (error === false) {
                switch (operator) {
                    case "+":
                        answer = Number(operand1) + Number(operand2);
                        break;
                    case "-":
                        answer = Number(operand1) - Number(operand2);
                        break;
                    case "*":
                        answer = Number(operand1) * Number(operand2);
                        break;
                    case "/":
                        answer = Number(operand1) / Number(operand2);
                }

                console.log(answer);


                //Elements that change regardless if it is correct or not
                $("#your-answer").css("display", "none");
                $("#message").css("display", "flex");
                $(".container-images").css("width", "80%");
                $("#start-img").css("display", "none");
                $("#approves-img").css("display", "block");
                $(".container-answers").css("display", "flex");
                $("#answer").css("display", "flex");
                document.getElementById("answer-number").innerHTML = round(guessedAnswer, 1);
                console.log("checking if correct or not...");

                //if correct
                if (answer == Number(guessedAnswer)) {
                    console.log("correct");
                    $("#disapproves-img").css("display", "none");
                    $("#correct-answer").css("display", "none");
                    document.getElementById("message").innerHTML = "Correct!";

                }

                //if incorrect
                else {
                    console.log("incorrect");
                    $("#disapproves-img").css("display", "block");
                    $("#correct-answer").css("display", "flex");
                    document.getElementById("message").innerHTML = "Incorrect!";

                    document.getElementById("correct-answer-number").innerHTML = round(answer, 1);



                }
            }
        }
    });
});
