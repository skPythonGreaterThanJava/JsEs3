$("#btn1").click(function() {
    operate("+");
});

$("#btn2").click(function() {
    operate("-");
});

$("#btn3").click(function() {
    operate("*");
});

$("#btn4").click(function() {
    operate("/");
});

function operate(sign) {
    var input1 = $('#num1');
    var input2 = $('#num2');
    if(input1.val() && input2.val()) {
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var result;
        switch (sign) {
            case "+":
                result = n1 + n2;
                break;
            
            case "-":
                result = n1 - n2;
                break;

            case "*":
                result = n1 * n2;
                break;

            case "/":
                result = n1 / n2;
                break;
        };
        var string = "<tr><td>" + n1 + "</td><td>" + sign + "</td><td>" + n2 + "</td><td>" + result + "</td></tr>";
        $('#tab').append(string);
        input1.val("");
        input2.val("");
    }
};