function operation(num1, num2, op){
    var x = parseInt(num1);
    var y = parseInt(num2);
    var op = op;

    if (op === "+") {
        var result = x + y;
      } else if (op === "-") {
        var result = x - y;
      } else if (op === "/") {
        var result = x / y;
      } else if (op === "*") {
        var result = x * y;
      } else if (op === "%") {
        var result = x % y;
      } else {
        var result = "Error operator not recognized!"
      }

      console.log("Result = " + result);
}

module.exports = {operation};