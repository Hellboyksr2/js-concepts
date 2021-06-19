 /**
  * Truthy Statments
  * 
  * boolean - true      ->  True
  * boolean - false     ->  False
  * 
  * String - "kumar"    ->  True
  * String - ""         ->  False
  * 
  * Number - 1          ->  True
  * Number - 0          ->  False
  * Number - +/-        ->  True
  * NaN                 ->  False
  * 
  * Array - []          -> True
  * Object - {}         -> True
  * 
  * Null                -> False
  * undefined           -> False 
  */


 console.log("Shareef" || "Kumar");
 console.log("" || "Kumar");

 console.log("Shareef" && "Kumar2");
 console.log("First Empty", "" && "Kumar");
 console.log("Second Empty", "Shareef" && "");