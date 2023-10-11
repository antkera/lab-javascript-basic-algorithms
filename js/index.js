console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pablo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters. `
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log("error desconocido");
}

// Iteration 3: Loops
// 3.1
let resultado = "";
for (let i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i].toUpperCase() + " ";
}
console.log(resultado);
resultado = "";
// 3.2
for (let i = hacker2.length - 1; i >= 0; i--) {
  resultado += hacker2[i];
}
console.log(resultado);
// 3.3
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] === hacker2[i]) {
    continue;
  } else if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else {
    console.log("Error inesperado");
  }
}
// BONUS

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam malesuada purus ut dictum. Nullam at velit ligula. Ut libero nibh, fermentum eget quam malesuada, ultricies consequat orci. Morbi auctor, mi ac congue auctor, nisi sem aliquet erat, quis egestas ante tellus auctor purus. Pellentesque maximus rhoncus libero. Mauris interdum, odio sit amet fringilla bibendum, mauris nisl commodo turpis, nec rhoncus neque libero sit amet odio. In ultricies, velit a dignissim semper, quam justo bibendum enim, at finibus mauris massa vel turpis. Fusce venenatis risus sed est interdum bibendum. Praesent suscipit, eros a pellentesque ornare, neque risus scelerisque mauris, scelerisque fermentum diam massa sit amet dolor. Donec et venenatis erat, non pretium mi. Fusce eros nisl, imperdiet et semper et, eleifend id turpis. Mauris lorem metus, convallis sed ligula suscipit, sollicitudin vulputate mi. Pellentesque ac eros et tortor pellentesque euismod eu sit amet eros.

Ut et pharetra tortor. Ut nec aliquam libero. Sed placerat, felis nec rhoncus ullamcorper, odio urna ultricies libero, quis varius orci arcu vel tellus. Ut eu ornare risus. Donec interdum pellentesque ante et malesuada. Phasellus lobortis lacus at faucibus tincidunt. Etiam a metus eu orci pretium rhoncus sit amet eget dolor. Sed consequat quam ut erat porttitor, sit amet scelerisque dui fermentum. Mauris fermentum mi ac euismod tincidunt. Nunc neque magna, lobortis lacinia vestibulum eu, dapibus sed arcu. Aliquam quis tellus vel eros ornare tempor ac vel sapien. Donec vel volutpat erat, et porta neque.

Quisque id sem nec nunc semper convallis in eget urna. Morbi rhoncus ut risus eu sagittis. Vestibulum lacinia aliquam cursus. Ut vel iaculis felis. Sed in mattis urna. Vivamus quis massa faucibus, fermentum quam at, lobortis est. Vivamus mattis enim elit.`;

let counter = 1;
let counterEt = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    counter++;
  }
  if (longText[i] === "\n") {
    counter += 0.5;
  }
  if (longText[i] + longText[i + 1] === "et") {
    counterEt++;
  }
}

console.log(`En el texto hay ${counter} palabras`);
console.log(`En el texto, la palabra "et" aparece ${counterEt} veces`);

//  BONUS 2

let phraseToCheck = "step on no pets";

console.log(palindrome(phraseToCheck));

function palindrome(phraseToCheck) {
  let lowedPhrase = phraseToCheck.toLowerCase();
  let CleanPhrase = "";
  let CleanMiddlePhrase = "";
  let InvertedPhrase = "";

  for (let i = 0; i < lowedPhrase.length; i++) {
    switch (lowedPhrase[i]) {
      case ",":
      case " ":
      case "!":
      case "'":
      case "`":
      case "?":
      case "¿":
      case "¡":
        break;

      default:
        CleanPhrase += lowedPhrase[i];
        break;
    }
  }
  let middle = CleanPhrase.length / 2;
  for (let i = 0; i < CleanPhrase.length - middle; i++) {
    CleanMiddlePhrase += CleanPhrase[i];
  }
  for (let i = CleanPhrase.length - 1; i >= middle; i--) {
    InvertedPhrase += CleanPhrase[i];
  }
  if (CleanMiddlePhrase === InvertedPhrase) {
    return `La frase "${phraseToCheck}" es un palindromo!`;
  } else {
    return `La frase "${phraseToCheck}" no es un palindromo!`;
  }
}
