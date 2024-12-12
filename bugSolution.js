function myFunction() {
  let x = 10; // Outer scope variable
  console.log("Outer x: ",x); // Output: 10
  if (true) {
    let x = 20; // Inner scope variable, shadows outer x
    console.log("Inner x: ",x); // Output: 20
  }
  console.log("Outer x after inner block: ",x); // Output: 10

  //Demonstrating how to avoid shadowing
  let y = 30;
  if (true) {
    y = 40; // Modifies the outer y directly because it's not redeclared with let
    console.log("Modified outer y inside block: ",y); //Output: 40
  }
  console.log("Modified outer y after inner block: ",y); //Output: 40
} 
myFunction();