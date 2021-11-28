import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false; // PHONE NUMBER
item.currency = "R$"; // CURRENCY

category.add("Lanches", "lanches");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", "10,00", "xSalada.jpeg", "lanches");
item.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", "18,00", "xSalada.jpeg", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", "20,00", "xSalada.jpeg", "lanches");

category.add("Lanches", "lanches2");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", "10,00", "xSalada.jpeg", "lanches2");
item.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", "18,00", "xSalada.jpeg", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", "20,00", "xSalada.jpeg", "lanches2");