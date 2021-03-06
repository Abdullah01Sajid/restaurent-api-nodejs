const pizzas = [
  {
    name: "Margarita",
    id: "p001",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Oregano",
    size: "33cm x 33cm",
    price: 6,
  },
  {
    name: "Prosciutto",
    id: "p002",
    category: "pizza",
    ingredients: "Tomate, mozzarella, Jamon Dulce, Oregano",
    size: "33cm x 33cm",
    price: 8,
  },
  {
    name: "Diavola",
    id: "p003",
    category: "pizza",
    ingredients:
      "Tomate ,mozzarella, Bacon,Jamon dulce ,Chorizo Picante ,Oliva negra ,Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Regina",
    id: "p004",
    category: "pizza",
    ingredients: "Tomate, Mozarella, Jamon dulce, Championes, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Caprcciosa",
    id: "p005",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella ,Championes, Jamon dulce, Alcapara,Oliva negra, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Tono",
    id: "p006",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Atun, Alcaparras, Cebolla, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Siciliana",
    id: "p007",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Berenjena, Loncha Permisano, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "4 Formaggi",
    id: "p008",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Gorgonzola, Roquefort, Loncha Permisano, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Del Chef",
    id: "p009",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Salmon, Gamba Pelada, Rucula, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Made In Italy",
    id: "p010",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Mozzarella de Bufala, Tomate Cherry, Albahaca, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Etna",
    id: "p011",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Cebolla, Berenjena, Loncha Permisano, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "America",
    id: "p012",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, FrankFurt, Patata Fritas, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Vegetariana",
    id: "p013",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Calabacin, Berenjena, Championes, Pimiento Rojo, Pimiento Verde, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Picante",
    id: "p014",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Chorizo Picante, Oregano",
    size: "33cm x 33cm",
    price: 8.5,
  },
  {
    name: "Montanara",
    id: "p015",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Jamon Serrano, Rucula,Lonchas de Parmisano, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Napolitana",
    id: "p016",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Anchoas, Alcaparras, Olivas Negras, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Maite",
    id: "p017",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Pechuga de Pollo, Maiz, Cebolla, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Hawaina",
    id: "p018",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Jamon dulce, Pi??a, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Frutti Di Mare",
    id: "p019",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Almejas, Mejillones, Gambas, Calamares, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Calzone",
    id: "p020",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Jamon Dulce, Champio??es, Huevos,Parmisano, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Genovesa",
    id: "p021",
    category: "pizza",
    ingredients: "Tomate, Mozzarella, Pesto, Parmisano, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "4 Stagioni",
    id: "p022",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Jamon dulce, Bacon,Champio??es, Huevos,Anchoas, Cuatro Queso, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Peperoni",
    id: "p023",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Cebolla, Bacon, Pemiento Rojo, Chorizo Picante, Olivas, Oregano",
    size: "33cm x 33cm",

    price: 9,
  },
  {
    name: "Carbonara",
    id: "p024",
    category: "pizza",
    ingredients: "Mozzarella, Huevos, Nata, Bacon, Cebolla, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Bolognesa",
    id: "p025",
    category: "pizza",
    ingredients:
      "Tomate Mozzarella, Carne de Tenera Picada, Salsa Bolognesa, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Barbacoa",
    id: "p026",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Pollo, Bacon, Carne de Tenera Picada, Salsa Barbacoa, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Biancaneve",
    id: "p027",
    category: "pizza",
    ingredients:
      "Mozzarella, Goraganzola, Champio??es, Rucula, Tomate cherry, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Caprese",
    id: "p028",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Lonchas de Tomate, Mozarella de Bufala, Albahaca, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "FrankFurt",
    id: "p029",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Frankfurt, Jamon dulce, Olivas Negras, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Calzone Verde",
    id: "p030",
    category: "pizza",
    ingredients:
      "Tomate, Mozzarella, Atun, Cebolla, Espinacas, Huevo, Parmisano, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
  {
    name: "Special",
    id: "p031",
    category: "pizza",
    ingredients: "Tomate, Gambas, Calamares, Salmon, Bacon, Oregano",
    size: "33cm x 33cm",
    price: 9,
  },
];
module.exports = pizzas;
