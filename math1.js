// Homework 1


// class Natural {
//     constructor(value) {
//       this.value = Math.abs(Math.floor(value));
//     }
  
//     toString() {
//       return this.value.toString();
//     }
//   }
  

//   class Integer {
//     constructor(value) {
//       this.value = Math.floor(value);
//     }
  
//     toString() {
//       return this.value.toString();
//     }
//   }
  

//   class Rational {
//     constructor(numerator, denominator) {
//       this.numerator = numerator;
//       this.denominator = denominator;
//     }
  
//     toString() {
//       return `${this.numerator}/${this.denominator}`;
//     }
  
//     simplify() {
//       const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//       const commonFactor = gcd(this.numerator, this.denominator);
//       this.numerator /= commonFactor;
//       this.denominator /= commonFactor;
//     }
//   }
  

//   class Irrational {
//     constructor(value) {
//       this.value = value;
//     }
  
//     toString() {
//       return this.value.toString();
//     }
//   }
  

//   class Real {
//     constructor(value) {
//       this.value = value;
//     }
  
//     toString() {
//       return this.value.toString();
//     }
//   }
  

//   class Imaginary {
//     constructor(value) {
//       this.value = value;
//     }
  
//     toString() {
//       return `${this.value}i`;
//     }
//   }
  

//   class Complex {
//     constructor(real, imaginary) {
//       this.real = real;
//       this.imaginary = imaginary;
//     }
  
//     toString() {
//       return `${this.real} + ${this.imaginary}i`;
//     }
  
//     add(other) {
//       return new Complex(this.real + other.real, this.imaginary + other.imaginary);
//     }
  
//     subtract(other) {
//       return new Complex(this.real - other.real, this.imaginary - other.imaginary);
//     }
  
//     multiply(other) {
//       return new Complex(
//         this.real * other.real - this.imaginary * other.imaginary,
//         this.real * other.imaginary + this.imaginary * other.real
//       );
//     }
//   }
  

  
//   const nat = new Natural(5);
//   const integer = new Integer(-3);
//   const rational = new Rational(2, 4);
//   rational.simplify();
//   const irrational = new Irrational(Math.sqrt(2));
//   const real = new Real(3.14);
//   const imaginary = new Imaginary(2);
//   const complex1 = new Complex(1, 2);
//   const complex2 = new Complex(3, 4);
//   const complexSum = complex1.add(complex2);
//   const complexDifference = complex1.subtract(complex2);
//   const complexProduct = complex1.multiply(complex2);
  
//   console.log("Natural: " + nat.toString());
//   console.log("Integer: " + integer.toString());
//   console.log("Rational: " + rational.toString());
//   console.log("Irrational: " + irrational.toString());
//   console.log("Real: " + real.toString());
//   console.log("Imaginary: " + imaginary.toString());
//   console.log("Complex Addition: " + complexSum.toString());
//   console.log("Complex Subtraction: " + complexDifference.toString());
//   console.log("Complex Multiplication: " + complexProduct.toString());



// homework 2



class Languages {
  constructor() {
    this.languages = [];
  }

  addLanguage(name, creator, year, description) {
    const language = { name, creator, year, description };
    this.languages.push(language);
  }

  getLanguageByName(name) {
    const language = this.languages.find((lang) => lang.name === name);
    return language;
  }

  listLanguagesAlphabetically() {
    const sortedLanguages = this.languages.slice().sort((a, b) => a.name.localeCompare(b.name));
    return sortedLanguages.map((lang) => lang.name);
  }
}


const languagesDB = new Languages();

languagesDB.addLanguage("JavaScript", "Brendan Eich", 1995, "A versatile scripting language.");
languagesDB.addLanguage("Python", "Guido van Rossum", 1991, "Known for its readability and simplicity.");
languagesDB.addLanguage("Java", "James Gosling", 1995, "Popular for its platform independence.");
languagesDB.addLanguage("C++", "Bjarne Stroustrup", 1983, "An extension of the C language.");
languagesDB.addLanguage("Ruby", "Yukihiro Matsumoto", 1995, "Designed for developer happiness.");

console.log(languagesDB.getLanguageByName("JavaScript"));
console.log(languagesDB.listLanguagesAlphabetically());
