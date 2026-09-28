function mkMods(name, base, opts){
  opts = opts || {};

  const withVariant = opts.variant !== false;
  const withCarne = opts.carne !== false;

  const ad = [
    ["COCA/COCA ZERO/SPRITE 600cc.", 3500]
  ];

  if(withCarne){
    ad.push(
      ["Carne Con Cheddar", 3000],
      ["Doble Carne con Cheddar", 5000]
    );
  }

  ad.push(
    ["Panceta", 1800],
    ["Feta de Cheddar", 1500],
    ["Huevo", 1500],
    ["Cebolla Caramelizada", 1500],
    ["Pepinos Agridulces", 1500],
    ["Cebolla Morada", 1500],
    ["Lechuga", 1000],
    ["Tomate", 1000]
  );

  const mods = {
    adicionales: ad,
    opcionales: [
      "Mayonesa",
      "Mostaza",
      "BBQ",
      "Ketchup",
      "Ninguna de las anteriores"
    ]
  };

  if(withVariant){
    mods.variantes = [
      [name + " Simple", base],
      [name + " Doble", base + 1500],
      [name + " Triple", base + 4500]
    ];
  }

  return mods;
}


/* =========================================================
   IMÁGENES
   ========================================================= */

const PRODUCT_IMAGES = {

  "PROMO ONION POINT + PAPAS FRITAS":
    "./img/Burguers + Fritas/Promos/Promo Sábado.png",

  "CHEESE BURGER": {
    variants: [
      "./img/Burguers + Fritas/Simples/Chesse Burger Simple.png",
      "./img/Burguers + Fritas/Dobles/Chesse Burger Doble.png",
      "./img/Burguers + Fritas/Triples/Chesse Burger Triple.png"
    ]
  },

  "CAJITA FELIZ (CHEESE BURGER)":
    "./img/Burguers + Fritas/Simples/Cajita Feliz Simple.png",

  "GRAND TASTY POINT": {
    variants: [
      "./img/Burguers + Fritas/Simples/Grand Tasty Point Simple.png",
      "./img/Burguers + Fritas/Dobles/Grand Tasty Point Doble.png",
      "./img/Burguers + Fritas/Triples/Grand Tasty Point Triple.png"
    ]
  },

  "Burger ANGUS":
    "./img/Burguers + Fritas/Burger Angus.png",

  "Burger POINT":
    "./img/Burguers + Fritas/Burger Point.png",

  "Burger HOUSE":
    "./img/Burguers + Fritas/Burger House.png",

  "Burger KID":
    "./img/Burguers + Fritas/Burguer Kid.png",

  "ONION POINT": {
    variants: [
      "./img/Burguers + Fritas/Dobles/Onion Point Doble.png",
      null
    ]
  },

  "BOMB TASTY": {
    variants: [
      "./img/Burguers + Fritas/Dobles/Bomb Tasty Doble.png",
      "./img/Burguers + Fritas/Triples/Bomb Tasty Triple.png"
    ]
  },

  "TEN POINT":
    "./img/Burguers + Fritas/Triples/Ten Point.png",

  "OKLAHOMA": {
    variants: [
      "./img/Burguers + Fritas/Simples/Oklahoma Simple.png",
      "./img/Burguers + Fritas/Dobles/Oklahoma Doble.png",
      "./img/Burguers + Fritas/Triples/Oklahoma Triple.png"
    ]
  },

  "IMPLOSIVE BURGER": {
    variants: [
      "./img/Burguers + Fritas/Simples/Implosive Burger.png",
      "./img/Burguers + Fritas/Dobles/Implosive Burger Doble.png",
      "./img/Burguers + Fritas/Triples/Implosive Burger Triple.png"
    ]
  },

  "Adicional Cheddar, Panceta y Verdeo (papas)":
    "./img/Burguers + Fritas/Cheddar, Panceta y Verdeo (adicional en las papas de la hamburguesa).png",


  /* VEGGIES */

  "NOT CHICKEN":
    "./img/Burguers Veggies + Fritas/Not Chicken.png",

  "BURGANA DE LENTEJAS Y ESPECIAS":
    "./img/Burguers Veggies + Fritas/Burgana de Lentejas y Especias.png",

  "NOT LIBRA": {
    variants: [
      "./img/Burguers Veggies + Fritas/Simples/Not Libra Simple.png",
      "./img/Burguers Veggies + Fritas/Dobles/Not Libra Doble.png",
      null
    ]
  },

  "Adicional cheddar y verdeo (papas)":
    "./img/Burguers Veggies + Fritas/Adicional cheddar y verdeo (para las papas).png",


  /* ACOMPAÑAMIENTOS */

  "TOSTADOS CON CHEDDAR (MC QUESO)":
    "./img/Acompañamientos/Tostato.png",

  "PAPAS FRITAS SOLAS":
    "./img/Acompañamientos/Papas Fritas/Porcion de Fritas Chicas.png",

  "PAPAS CERVECERAS":
    "./img/Acompañamientos/Papas Fritas/Papas Cerveceras Grandes.png",

  "BASTONES DE MUZZARELLA":
    "./img/Acompañamientos/Bastones de Muzzarela 6.Unidades+Ketchup.png",

  "NUGGETS: 10u + BBQ":
    "./img/Acompañamientos/Nuggets 10.Unidades+BBQ.png",

  "AROS DE CEBOLLA: 10u + KETCHUP":
    "./img/Acompañamientos/Aros de Cebolla 10.Unidades+Ketchup.png",

  "PICADA CALIENTE":
    "./img/Acompañamientos/Picada Caliente.png",

  "PICADA NUGGETS":
    "./img/Acompañamientos/Picada Nuggets.png",

  "Dip de Cheddar Líquido":
    "./img/Acompañamientos/Dips/Dip de Cheddar.png",

  "Dip de BBQ":
    "./img/Acompañamientos/Dips/Dip de BBQ.png",

  "Dip de Ketchup":
    "./img/Acompañamientos/Dips/Dip de Ketchup.png",

  "Dip de Mayonesa":
    "./img/Acompañamientos/Dips/Dip de Mayonesa.png",


  /* BEBIDAS */

  "Coca Cola 600ml":
    "./img/Bebidas/Coca Cola 600ml.png",

  "Coca Zero 600ml":
    "./img/Bebidas/Coca Cola Zero 600ml.png",

  "Sprite 600ml":
    "./img/Bebidas/Sprite 600ml.png",

  "Coca Cola 1.75L":
    "./img/Bebidas/Coca Cola 1.75L.png",

  "Andes Rubia":
    "./img/Bebidas/Andes Rubia.png"
};


/*
  Obtiene la imagen correspondiente.

  Soporta:
  - una ruta directa
  - varias variantes
  - imágenes inexistentes/null
*/

const dailyPhotoCache = new Map();
const pendingPhotoLoads = new Map();

function localDateKey(date = new Date()){
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  return `${year}-${month}-${day}`;
}

function photoKey(name,variantIdx){
  return `${name}|${variantIdx}`;
}

function getDefaultProductImage(name, variantIdx = 0){

  const product = PRODUCT_IMAGES[name];

  if(!product){
    return null;
  }

  // Producto con una sola imagen
  if(typeof product === "string"){
    return product;
  }

  // Producto con variantes
  if(product.variants){

    if(product.variants[variantIdx]){
      return product.variants[variantIdx];
    }

    return null;
  }

  return null;
}

function getProductImage(name, variantIdx = 0){
  const todaysPhotos = dailyPhotoCache.get(localDateKey());
  const scheduledPhoto = todaysPhotos?.get(photoKey(name,variantIdx));

  return scheduledPhoto || getDefaultProductImage(name,variantIdx);
}

function loadDailyPhotos(date){
  if(dailyPhotoCache.has(date)){
    return Promise.resolve(dailyPhotoCache.get(date));
  }

  if(pendingPhotoLoads.has(date)){
    return pendingPhotoLoads.get(date);
  }

  const loading = fetch(`/api/photos?date=${encodeURIComponent(date)}`)
    .then(response => {
      if(!response.ok) throw new Error("No se pudieron cargar las fotos del menú.");
      return response.json();
    })
    .then(result => {
      const photos = new Map(Object.entries(result.photos || {}));
      dailyPhotoCache.set(date,photos);
      return photos;
    })
    .finally(() => pendingPhotoLoads.delete(date));

  pendingPhotoLoads.set(date,loading);
  return loading;
}

/* =========================================================
   MENÚ
   ========================================================= */

let MENU = {

"Burgers + papas fritas":[

["🍔","PROMO ONION POINT + PAPAS FRITAS",
"Doble carne, doble queso cheddar, doble panceta y cebolla crispy, bbq, pan brioche de papa + papas fritas.",
14999],

["🧀","CHEESE BURGER",
"Carne, Queso Cheddar, Pan de Papa y Papas Fritas.",
15500,{
  variantes:[
    ["Cheese Burger Simple",15500],
    ["Cheese Burger DOBLE",17000],
    ["Cheese Burger TRIPLE",20000]
  ],
  adicionales:[
    ["COCA/COCA ZERO/SPRITE 600cc.",3500],
    ["Carne Con Cheddar",3000],
    ["Doble Carne con Cheddar",5000],
    ["Panceta",1800],
    ["Feta de Cheddar",1500],
    ["Huevo",1500],
    ["Cebolla Caramelizada",1500],
    ["Pepinos Agridulces",1500],
    ["Cebolla Morada",1500],
    ["Lechuga",1000],
    ["Tomate",1000]
  ],
  opcionales:[
    "Mayonesa",
    "Mostaza",
    "BBQ",
    "Ketchup",
    "Ninguna de las anteriores"
  ]
}],

["🎁","CAJITA FELIZ (CHEESE BURGER)",
"Incluye 1 Cheese Burger, Papas Fritas, 3 Nuggets de pollo, 1 Baston de Muzzarella.",
20000],

["🍔","GRAND TASTY POINT",
"Carne + Cheddar, Salsa Libra, Salsa Tasty, Pan de papa y Papas Fritas.",
16000,
mkMods("Grand Tasty Point",16000)],

["🍔","Burger ANGUS",
"Carne, Cheddar, Cebolla Morada, Pepinos agridulces, Panceta, Pan de Papa y Papas Fritas.",
16000,
mkMods("Burger Angus",16000)],

["🍔","Burger POINT",
"Carne, Cheddar, Panceta, cebolla caramelizada, Pan de Papa y Papas Fritas.",
16000,
mkMods("Burger Point",16000)],

["🍔","Burger HOUSE",
"Carne, Cheddar, Huevo, Tomate, Lechuga, Pan de Papa y Papas Fritas.",
16000,
mkMods("Burger House",16000)],

["🍔","Burger KID",
"Carne, Cheddar, Salsa Big Mac, Tomate, Lechuga y Cebolla, Pan de Papa y Papas Fritas.",
16000,
mkMods("Burger Kid",16000)],

["🧅","ONION POINT",
"Carne, Cheddar, Panceta, Cebolla Crispy, BBQ, Pan de Papa y papas fritas.",
18000,
{
  ...mkMods("Onion Point",18000),
  variantes:[
    ["Onion Point Doble",19500],
    ["Onion Point Triple",22500]
  ]
}],

["💣","BOMB TASTY",
"Carne, Cheddar, Panceta, Muzzarella Rebozada frita, Salsa Napolitana, Pan de Papa y Papas Fritas.",
18000,
{
  ...mkMods("Bomb Tasty",18000),
  variantes:[
    ["Bomb Tasty Doble",19500],
    ["Bomb Tasty Triple",22500]
  ]
}],

["🍔","TEN POINT",
"Triple carne, triple queso cheddar, triple panceta, huevo y cebolla caramelizada, pan brioche de papa + papas fritas.",
20000,
mkMods("Ten Point",20000,{variant:false})],

["🍔","OKLAHOMA",
"Carne, Cheddar, Cebolla aplastada junto con la carne y pan brioche de papa y Papas Fritas.",
16000,
mkMods("Oklahoma",16000)],

["💥","IMPLOSIVE BURGER",
"Carne, Cheddar, Carne deshilachada (cocción de 5hs), salsa a elección, Pan de Papa y Papas Fritas.",
17000,
mkMods("Implosive Burger",17000)],

["➕","Adicional Cheddar, Panceta y Verdeo (papas)",
"Adicional para las papas de la hamburguesa. No se puede sacar ningún ingrediente.",
4000]

],

"Burgers veggies + papas fritas":[

["🥬","NOT CHICKEN",
"Medallón NOT CHICKEN (Veggie), Cheddar, Tomate, Lechuga, Cebolla, Salsa Big Mac, Pan de papa y Papas Fritas.",
16500,
mkMods("Not Chicken",16500,{carne:false})],

["🌱","BURGANA DE LENTEJAS Y ESPECIAS",
"Medallón de Lentejón, queso cheddar, tomate, cebolla caramelizada y huevo + Pan brioche de papa + Porción de papas fritas.",
17000,
mkMods("Burgana de Lentejas",17000,{carne:false})],

["🥬","NOT LIBRA",
"Medallón NOT Co, Cheddar, Salsa libra y cebolla picada, Pan de Papa y Papas Fritas.",
16000,
mkMods("Not Libra",16000,{carne:false})],

["➕","Adicional cheddar y verdeo (papas)",
"Item adicional para la porción de papas. No se puede sumar ni quitar ingredientes.",
3500]

],

"Acompañamientos":[

["🥪","TOSTADOS CON CHEDDAR (MC QUESO)",
"Tostados con cheddar y mostaza, al mejor estilo.",
4000,{
  variantes:[
    ["TOSTADO C/CHEDDAR",4000],
    ["TOSTADO C/CHEDDAR Y HUEVO",4300],
    ["TOSTADO C/CHEDDAR Y PANCETA",4500],
    ["TOSTADO C/ CHEDDAR, PANCETA Y HUEVO",5000]
  ],
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🍟","PAPAS FRITAS SOLAS",
"Porción chica de papas fritas (la misma que acompañan la burger).",
4000,{
  variantes:[
    ["PAPAS FRITAS: Porcion Chica",4000],
    ["PAPAS FRITAS: Porcion Grande",10000]
  ],
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🍟","PAPAS CERVECERAS",
"Porción grande de papas fritas, con cheddar, panceta y verdeo.",
15000,{
  variantes:[
    ["PAPAS CERVECERAS (CHICAS)",12000],
    ["PAPAS CERVECERAS (GRANDES)",15000]
  ],
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🧀","BASTONES DE MUZZARELLA",
"Acompañados de dip de ketchup.",
17000,{
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🍗","NUGGETS: 10u + BBQ",
"10 nuggets de pollo rebozados y fritos + 1 dip de BBQ.",
9000,{
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🧅","AROS DE CEBOLLA: 10u + KETCHUP",
"10 aros de cebolla rebozados y fritos + dip de ketchup.",
9000,{
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🍽️","PICADA CALIENTE",
"4 bastones de muzzarella + 5 aros de cebolla + 2 porciones de papas fritas c/ketchup o cheddar.",
18000,{
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🍽️","PICADA NUGGETS",
"10 nuggets + 5 aros de cebolla + 2 porción de papas fritas c/ketchup.",
18000,{
  adicionales:[
    ["Dip de Cheddar Liquido",3000],
    ["Dip de BBQ",2000],
    ["Dip de Ketchup",2000]
  ]
}],

["🧡","Dip de Cheddar Líquido","",3000],
["🔴","Dip de BBQ","",2000],
["🔴","Dip de Ketchup","",2000],
["⚪","Dip de Mayonesa","",2000]

],

"Bebidas":[

["🥤","Coca Cola 600ml","",3500],
["🥤","Coca Zero 600ml","",3500],
["🥤","Sprite 600ml","",3500],
["🍾","Coca Cola 1.75L","",6000],
["🍺","Andes Rubia","SIN STOCK",null]

]

};


/* =========================================================
   ESTADO
   ========================================================= */

let cats = Object.keys(MENU);

let active = cats[0];

let cart = {};

let modalCtx = null;

let PRODUCT_STOCK = {};
let HIDDEN_PRODUCTS = new Set();

function inventoryKey(category,name){
  return `${category}|${name}`;
}

function isProductInStock(category,name,price){
  if(price === null) return false;
  const id = inventoryKey(category,name);
  return Object.prototype.hasOwnProperty.call(PRODUCT_STOCK,id)
    ? PRODUCT_STOCK[id]
    : true;
}

async function loadSavedCatalog(){
  const response = await fetch("/api/catalog");
  if(!response.ok) throw new Error("No se pudo cargar el catálogo guardado.");
  const saved = await response.json();

  if(saved.menu){
    MENU = saved.menu;
    cats = Object.keys(MENU);
    if(!MENU[active]) active = cats[0];
  }

  PRODUCT_STOCK = saved.stock || {};
  HIDDEN_PRODUCTS = new Set(saved.hiddenProducts || []);
}

function fmt(n){
  return "$ " + n.toLocaleString("es-AR");
}


function key(cat,i){
  return cat + "|" + i;
}


/* =========================================================
   IMAGEN SEGURA
   ========================================================= */

function createProductImage(name, variantIdx = 0, emoji = "🍔"){

  const src = getProductImage(name, variantIdx);

  if(!src){
    return emoji;
  }

  const img = document.createElement("img");

  img.className = "product-img";

  img.src = src;

  img.alt = name;

  /*
    Si la imagen no existe, no rompe el diseño.
    Vuelve automáticamente al emoji.
  */
  img.onerror = function(){

    const fallback = document.createElement("span");

    fallback.className = "image-fallback";

    fallback.textContent = emoji;

    this.replaceWith(fallback);
  };

  return img;
}


/* =========================================================
   TABS
   ========================================================= */

function renderTabs(){

  const nav = document.getElementById("tabs");

  nav.innerHTML = "";

  cats.forEach(c => {

    const b = document.createElement("button");

    b.textContent = c.toUpperCase();

    if(c === active){
      b.className = "active";
    }

    b.onclick = () => {
      active = c;
      renderTabs();
      renderMenu();
    };

    nav.appendChild(b);

  });
}


/* =========================================================
   CANTIDADES
   ========================================================= */

function changeQty(cat,i,delta){

  const item = MENU[cat][i];
  if(!isProductInStock(cat,item[1],item[3]) || HIDDEN_PRODUCTS.has(inventoryKey(cat,item[1]))) return;

  const k = key(cat,i);

  const cur = cart[k] ? cart[k].qty : 0;

  const next = Math.max(0,cur + delta);

  if(next === 0){

    delete cart[k];

  }else{

    cart[k] = {
      qty: next,
      label: MENU[cat][i][1],
      price: MENU[cat][i][3]
    };

  }

  renderMenu();

  updateCartCount();
}


/* =========================================================
   MENÚ
   ========================================================= */

function renderMenu(){

  const m = document.getElementById("menu");

  m.innerHTML = "";

  MENU[active].forEach((it,i) => {

    const [emoji,name,desc,price,mods] = it;

    if(HIDDEN_PRODUCTS.has(inventoryKey(active,name))) return;

    const k = key(active,i);

    const qty = cart[k] ? cart[k].qty : 0;

    const div = document.createElement("div");

    div.className = "item";


    /* -------------------------
       IMAGEN
       ------------------------- */

    const imageBox = document.createElement("div");

    imageBox.className = "emoji";

    const image = createProductImage(name,0,emoji);

    if(typeof image === "string"){

      imageBox.textContent = image;

    }else{

      imageBox.appendChild(image);

    }


    /* -------------------------
       INFORMACIÓN
       ------------------------- */

    const info = document.createElement("div");

    info.className = "info";

    const title = document.createElement("h3");

    title.textContent = name;

    info.appendChild(title);


    if(desc){

      const p = document.createElement("p");

      p.textContent = desc;

      info.appendChild(p);

    }


    /* -------------------------
       CONTROLES
       ------------------------- */

    if(!isProductInStock(active,name,price)){

      const stock = document.createElement("span");

      stock.className = "stockoff";

      stock.textContent = "SIN STOCK";

      info.appendChild(stock);

    }

    else if(mods){

      const priceDiv = document.createElement("div");

      priceDiv.className = "price";

      priceDiv.textContent = "Desde: " + fmt(price);

      info.appendChild(priceDiv);


      const qtyDiv = document.createElement("div");

      qtyDiv.className = "qty";


      const minus = document.createElement("button");

      minus.textContent = "-";

      minus.onclick = event => {

        event.stopPropagation();

        changeQty(active,i,-1);

      };


      const quantity = document.createElement("span");

      quantity.textContent = qty;


      const plus = document.createElement("button");

      plus.textContent = "+";

      plus.onclick = event => {

        event.stopPropagation();

        changeQty(active,i,1);

      };


      qtyDiv.appendChild(minus);

      qtyDiv.appendChild(quantity);

      qtyDiv.appendChild(plus);

      info.appendChild(qtyDiv);


      div.style.cursor = "pointer";

      div.onclick = () => openModal(active,i);

    }

    else{

      const priceDiv = document.createElement("div");

      priceDiv.className = "price";

      priceDiv.textContent = fmt(price);

      info.appendChild(priceDiv);


      const qtyDiv = document.createElement("div");

      qtyDiv.className = "qty";


      const minus = document.createElement("button");

      minus.textContent = "-";

      minus.onclick = event => {

        event.stopPropagation();

        changeQty(active,i,-1);

      };


      const quantity = document.createElement("span");

      quantity.textContent = qty;


      const plus = document.createElement("button");

      plus.textContent = "+";

      plus.onclick = event => {

        event.stopPropagation();

        changeQty(active,i,1);

      };


      qtyDiv.appendChild(minus);

      qtyDiv.appendChild(quantity);

      qtyDiv.appendChild(plus);

      info.appendChild(qtyDiv);

    }


    div.appendChild(imageBox);

    div.appendChild(info);

    m.appendChild(div);

  });

}


/* =========================================================
   CARRITO
   ========================================================= */

function updateCartCount(){

  const total = Object.values(cart)
    .reduce((a,e) => a + e.qty,0);

  document.getElementById("cartCount").textContent = total;
}


function cartItems(){

  return Object.values(cart).map(e => ({
    name:e.label,
    price:e.price,
    qty:e.qty
  }));

}


function renderCart(){

  const lines = document.getElementById("cartLines");

  const items = Object.entries(cart);

  lines.replaceChildren();


  if(items.length === 0){

    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Todavía no agregaste productos.";
    lines.appendChild(emptyMessage);

  }

  else{

    items.forEach(([k,item]) => {
      const row = document.createElement("div");
      row.className = "cartline";

      const label = document.createElement("span");
      label.className = "l";
      label.append(document.createTextNode(`${item.qty}x ${item.label}`));
      label.appendChild(document.createElement("br"));

      const price = document.createElement("b");
      price.textContent = fmt(item.price * item.qty);
      label.appendChild(price);

      const removeButton = document.createElement("button");
      removeButton.className = "remove-line";
      removeButton.type = "button";
      removeButton.textContent = "🗑️";
      removeButton.setAttribute("aria-label",`Quitar ${item.label}`);
      removeButton.addEventListener("click",() => removeLine(k));

      row.append(label,removeButton);
      lines.appendChild(row);
    });

  }


  const total = items.reduce(
    (a,[k,e]) => a + e.price * e.qty,
    0
  );

  document.getElementById("cartTotal").textContent = fmt(total);

  document.getElementById("checkoutForm").style.display = "none";

  document.getElementById("checkoutBtn").style.display =
    items.length ? "block" : "none";

  document.getElementById("clearWrap").style.display =
    items.length ? "block" : "none";

}


function removeLine(k){

  delete cart[k];

  renderCart();

  renderMenu();

  updateCartCount();

}


function clearCart(){

  if(!confirm("¿Vaciar todo el carrito?")){
    return;
  }

  cart = {};

  renderCart();

  renderMenu();

  updateCartCount();

}


function openCart(){

  renderCart();

  document.getElementById("cartPanel").classList.add("open");

}


function closeCart(){

  document.getElementById("cartPanel").classList.remove("open");

}


function showCheckout(){

  document.getElementById("checkoutForm").style.display = "block";

  document.getElementById("checkoutBtn").style.display = "none";

}


function toggleDir(){

  document.getElementById("dirWrap").style.display =
    document.getElementById("fTipo").value === "Delivery"
      ? "block"
      : "none";

}


/* =========================================================
   IMAGEN DEL MODAL
   ========================================================= */

function updateModalImage(variantIdx = 0){

  if(!modalCtx){
    return;
  }

  const item = MENU[modalCtx.cat][modalCtx.idx];

  const name = item[1];

  const emoji = item[0];

  const imageBox = document.getElementById("modalProductImage");

  const image = document.getElementById("modalImage");

  if(!imageBox || !image){
    return;
  }

  const src = getProductImage(name,variantIdx);


  if(!src){

    imageBox.style.display = "flex";

    image.style.display = "none";

    image.removeAttribute("src");

    imageBox.dataset.fallback = emoji;

    return;

  }


  image.style.display = "block";

  image.src = src;

  image.alt = name;

  imageBox.style.display = "flex";

  /*
    Si falla la imagen del modal,
    mostramos el emoji en vez de dejar
    un cuadro roto.
  */

  image.onerror = function(){

    this.style.display = "none";

    imageBox.dataset.fallback = emoji;

  };

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(cat,i){

  modalCtx = {
    cat,
    idx:i
  };

  const item = MENU[cat][i];

  if(!isProductInStock(cat,item[1],item[3]) || HIDDEN_PRODUCTS.has(inventoryKey(cat,item[1]))) return;

  const mods = item[4];

  document.getElementById("modalTitle").textContent =
    item[1];


  const imageBox =
    document.getElementById("modalProductImage");

  const image =
    document.getElementById("modalImage");

  image.style.display = "block";

  imageBox.style.display = "none";

  image.removeAttribute("src");

  image.removeAttribute("alt");


  let html = "";


  /* VARIANTES */

  if(mods.variantes){

    html += '<div class="modH2">VARIANTES</div>';

    mods.variantes.forEach((v,vi) => {

      html += `

        <label class="optrow">

          <input
            type="radio"
            name="mvariant"
            value="${vi}"
            ${vi === 0 ? "checked" : ""}
          >

          <span>${v[0]}</span>

          <b>${fmt(v[1])}</b>

        </label>

      `;

    });

  }


  /* ADICIONALES */

  if(mods.adicionales){

    html += '<div class="modH2">ADICIONALES</div>';

    mods.adicionales.forEach((a,ai) => {

      html += `

        <label class="optrow">

          <input
            type="checkbox"
            data-add="${ai}"
          >

          <span>${a[0]}</span>

          <b>${fmt(a[1])}</b>

        </label>

      `;

    });

  }


  /* OPCIONALES */

  if(mods.opcionales){

    html += '<div class="modH2">OPCIONALES</div>';

    mods.opcionales.forEach((o,oi) => {

      html += `

        <label class="optrow">

          <input
            type="radio"
            name="mopcional"
            value="${oi}"
            ${oi === mods.opcionales.length - 1 ? "checked" : ""}
          >

          <span>${o}</span>

        </label>

      `;

    });

  }


  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = html;

  modalBody.querySelectorAll('input[name="mvariant"]').forEach(input => {
    input.addEventListener("change",() => {
      updateModalImage(Number(input.value));
      updateModalTotal();
    });
  });

  modalBody.querySelectorAll("input[data-add]").forEach(input => {
    input.addEventListener("change",updateModalTotal);
  });


  /*
    IMPORTANTE:
    antes solamente se mostraban imágenes
    cuando existía "variants".

    Ahora funciona tanto para:
    "./imagen.png"

    como para:

    {
      variants: [...]
    }
  */

  updateModalImage(0);

  updateModalTotal();

  document.getElementById("modalPanel")
    .classList.add("open");

}


function closeModal(){

  document.getElementById("modalPanel")
    .classList.remove("open");

  modalCtx = null;

}


function readModalSelection(){

  const item = MENU[modalCtx.cat][modalCtx.idx];

  const mods = item[4];

  let variantIdx = 0;

  let price = item[3];


  if(mods.variantes){

    const r =
      document.querySelector(
        'input[name="mvariant"]:checked'
      );

    variantIdx = r ? +r.value : 0;

    price =
      mods.variantes[variantIdx][1];

  }


  const addIdxs = [];


  if(mods.adicionales){

    document
      .querySelectorAll('input[data-add]:checked')
      .forEach(cb => {

        const ai = +cb.dataset.add;

        addIdxs.push(ai);

        price += mods.adicionales[ai][1];

      });

  }


  let opIdx = null;


  if(mods.opcionales){

    const r =
      document.querySelector(
        'input[name="mopcional"]:checked'
      );

    opIdx =
      r
        ? +r.value
        : mods.opcionales.length - 1;

  }


  return {
    variantIdx,
    addIdxs,
    opIdx,
    price
  };

}


function updateModalTotal(){

  const sel = readModalSelection();

  document.getElementById("modalTotal")
    .textContent = fmt(sel.price);

}


function addCustomToCart(){

  if(!modalCtx){
    return;
  }

  const {cat,idx} = modalCtx;

  const item = MENU[cat][idx];

  if(!isProductInStock(cat,item[1],item[3]) || HIDDEN_PRODUCTS.has(inventoryKey(cat,item[1]))) return;

  const mods = item[4];

  const sel = readModalSelection();


  let label =
    mods.variantes
      ? mods.variantes[sel.variantIdx][0]
      : item[1];


  const extras =
    sel.addIdxs.map(
      ai => mods.adicionales[ai][0]
    );


  if(extras.length){
    label += " + " + extras.join(", ");
  }


  if(
    mods.opcionales &&
    sel.opIdx !== mods.opcionales.length - 1
  ){

    label +=
      ` (${mods.opcionales[sel.opIdx]})`;

  }


  const k =
    "custom|" +
    cat +
    "|" +
    idx +
    "|" +
    sel.variantIdx +
    "|" +
    sel.addIdxs.join(",") +
    "|" +
    sel.opIdx;


  if(cart[k]){
    cart[k].qty += 1;
  }

  else{

    cart[k] = {
      qty:1,
      label,
      price:sel.price
    };

  }


  closeModal();

  renderMenu();

  updateCartCount();

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function sendWhatsapp(){

  const items = cartItems();

  if(items.length === 0){

    alert("El carrito está vacío.");

    return;

  }


  const nombre =
    document.getElementById("fName")
      .value
      .trim();


  if(!nombre){

    alert("Ingresá tu nombre.");

    return;

  }


  const tipo =
    document.getElementById("fTipo").value;


  const dir =
    document.getElementById("fDir")
      .value
      .trim();


  if(tipo === "Delivery" && !dir){

    alert("Ingresá la dirección de entrega.");

    return;

  }


  const pago =
    document.getElementById("fPago").value;


  const notas =
    document.getElementById("fNotas")
      .value
      .trim();


  const total =
    items.reduce(
      (a,it) => a + it.price * it.qty,
      0
    );


  let msg =
    `*Pedido Burger Point*\n\n`;


  msg += items
    .map(
      it =>
        `• ${it.qty}x ${it.name} - ${fmt(it.price * it.qty)}`
    )
    .join("\n");


  msg +=
    `\n\n*Total: ${fmt(total)}*\n\n`;


  msg +=
    `Nombre: ${nombre}\n`;


  msg +=
    `Entrega: ${tipo}` +
    (
      tipo === "Delivery"
        ? ` - ${dir}`
        : ""
    ) +
    "\n";


  msg +=
    `Pago: ${pago}\n`;


  if(notas){
    msg += `Notas: ${notas}\n`;
  }


  const url =
    "https://wa.me/5491162118588?text=" +
    encodeURIComponent(msg);


  window.open(url,"_blank","noopener,noreferrer");

}


function bindPageActions(){

  document.addEventListener("click",event => {
    const button = event.target.closest("[data-action]");
    if(!button) return;

    switch(button.dataset.action){
      case "open-cart": openCart(); break;
      case "close-cart": closeCart(); break;
      case "clear-cart": clearCart(); break;
      case "show-checkout": showCheckout(); break;
      case "send-whatsapp": sendWhatsapp(); break;
      case "close-modal": closeModal(); break;
      case "add-custom-to-cart": addCustomToCart(); break;
    }
  });

  document.getElementById("fTipo")?.addEventListener("change",toggleDir);

}


/* =========================================================
   INICIO
   ========================================================= */

if(document.getElementById("menu")){
  bindPageActions();
  loadSavedCatalog()
    .catch(() => {})
    .finally(() => {
      cats = Object.keys(MENU);
      if(!MENU[active]) active = cats[0];
      renderTabs();
      renderMenu();
      updateCartCount();
      loadDailyPhotos(localDateKey())
        .then(() => renderMenu())
        .catch(() => {});
    });
}
