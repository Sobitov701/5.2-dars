//1-misol
//Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

const obj = { abc: 1, 123: 2, d: 5 };

//2-misol
//Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

const obj2 = { a: false, b: 12, c: true, d: 0 };

//3-misol
//Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)

const obj3 = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];

//4-misol
//Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

const obj4 = "8945472985629";

//5-misol
//Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

//6-misol
//Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];

//7-misol
//Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

const obj7 = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};

//8-misol
//GPA ni hisoblovchi dastur tuzing.

const grades = [
  { name: "Fizika", grade: 4, kredit: 6 },
  { name: "Matematika", grade: 5, kredit: 6 },
  { name: "Tarix", grade: 4, kredit: 4 },
  { name: "Dasturlash", grade: 5, kredit: 8 },
  { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
];

//9-misol
//Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

const rightAnswers = {
  1: "B",
  2: "A",
  3: "C",
  4: "D",
  5: "B",
  6: "C",
  7: "A",
  8: "D",
  9: "A",
  10: "B",
};
const myAnswers = {
  1: "C",
  2: "A",
  3: "D",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "C",
  9: "A",
  10: "C",
};

//10-misol
// Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.

let n = 3;
const obj10 = { a: 2, b: 3, c: 4, d: 6 };

//11-misol
//Quyidagi obyektdan destructing orqali barcha qiymatlarini oling.

const product = {
  name: "Iphone 14",
  company: {
    name: "Apple",
    price: "200 mlrd",
    founder: {
      firstName: "Steve",
      lastName: "Jobs",
      birthDate: 1950,
    },
  },
};

//12-misol
//Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring.

const pupils12 = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

//13-misol
//grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.

const pupils13 = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

//14-misol
//isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.

const pupils14 = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

//15-misol
//Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.
const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
