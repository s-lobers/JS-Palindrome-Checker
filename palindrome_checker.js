var Eingabe = prompt ("Bitte Text eingeben, um auf Palindrome zu testen!");

var Checker = Eingabe.split("").reverse().join("");

if (Checker === Eingabe){
window.alert (Eingabe +" ist ein Palindrome!");
}
else{
window.alert (Eingabe +" ist kein Palindrome!");
}
