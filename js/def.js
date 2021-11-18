import { categories, items, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false;


categories.add("Lanches", "lanches");
items.add("X-Salada", "lorem ipsum dolor sit amet arcu.", "10,00", "xSalada.jpeg", "lanches");
items.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", "18,00", "xSalada.jpeg", "lanches");
items.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", "20,00", "xSalada.jpeg", "lanches");

categories.add("Lanches", "lanches2");
items.add("X-Salada", "lorem ipsum dolor sit amet arcu.", "10,00", "xSalada.jpeg", "lanches2");
items.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", "18,00", "xSalada.jpeg", "lanches2");
items.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", "20,00", "xSalada.jpeg", "lanches2");