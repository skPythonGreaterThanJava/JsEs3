var vals = [];

$("button").click(function() {
    var input1 = $('#num1');
    var input2 = $('#num2');
    var sign = $(this).val();
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

        vals.push(input1.val() + "; " + sign + "; " + input2.val() + "; " + result);
        storage.setItem("1", vals);
        console.log(storage.getItem("1"));
        input1.val("");
        input2.val("");
    }
});