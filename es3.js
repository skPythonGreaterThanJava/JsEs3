var tablet = "<tr> <th>N1</th> <th>Sign</th> <th>N2</th> <th>Result</th> </tr>" + storage.getItem("1");

$("#tab").append(tablet);

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
        tablet += string;
        $('#tab').append(string);
        storage.setItem("1", storage.getItem("1") + string);
        
        input1.val("");
        input2.val("");
    }
});