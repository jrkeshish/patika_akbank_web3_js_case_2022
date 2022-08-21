function oddishOrEvenish(num) 
{
    var sum = 0;
    while (num >= 1) // if number greater than 0, find the additon of digits
    { 
        sum = sum + (num % 10); // most right digit goes to summation
        num = Math.floor(num / 10); // cursor change to left until num == 0
    }
return ((sum % 2) ? "Odd" : "Even"); // Returns depend on the result
}

oddishOrEvenish(742); // 7+4+2 = 13 => 13%2 = 1 => "Odd"
alert(oddishOrEvenish(prompt("Please give a number:"))); // takes input from user and displays
