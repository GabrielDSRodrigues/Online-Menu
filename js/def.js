import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = 16999663383; // PHONE NUMBER
item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Lanches", "lanches");
item.add("Lanche Natural de Presunto e Queijo", "lorem ipsum dolor sit amet arcu.", 8.00, "01.jpeg", "lanches");
item.add("Lanche Natural de Frango", "lorem ipsum dolor sit amet arcu.", 8.00, "02.jpeg", "lanches");