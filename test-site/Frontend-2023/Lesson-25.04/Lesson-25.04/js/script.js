/* <form action="" method="get/post" name="" target="">
<input name="userName" type="checkbox"/>
<input name="userName" type="checkbox"/>
<input name="userName" type="radio"/>
<input name="userName" type="radio"/>
<input name="userName" type="radio"/>
<input type="text" name="text"/>
<button>Send</button>
placeholder="Write your name" 
value="Hey"
size="5"
 maxlength="2" 
</form> */

// const form = document.querySelector("form");
// const btn = document.querySelector("button");

// btn.onclock = (e) => {
// 	e.preventDefault();
// 	alert("Good");
// }

// form.onsubmit = (e) => {
// 	e.preventDefault();
// 	alert("Gooood")
// };
//-----------------------------------------------------------//
// form
const form = document.querySelector(".form");
const _name = document.querySelector("#name");
const priceOf = document.querySelector("#price");

// form2
const form2 = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

// sort button
/*Создаём кнопку для сортировки карточек.*/
const sortBtn = document.querySelector("#sortBtn");

//section for products
/* Создаём фразу - Продуктов нет. -  если недобавлено никаких заказов эта фраза будет появляться. */
const section = document.querySelector("#productsList");
const noProduct = document.createElement("h2");
noProduct.innerText = "No product!";
noProduct.style.textAlign = "center";
section.append(noProduct);

// button sum of products
const sumBtn = document.querySelector(".sum__button");

// button delete all products
const delBtn = document.querySelector(".delete");

// section total sum of all products
const section2 = document.querySelector(".total");
const div = document.createElement("div");
const h5 = document.createElement("h4");
h5.innerText = "Sum of your products is:";
const h6 = document.createElement("h5");
div.append(h5, h6);
div.classList.add("sumOfProducts");
section2.append(div);

// ----------------------------------------------------------

let products = [];
form.onsubmit = (e) => {
  e.preventDefault(); /* Отменяем действие браузера по умолчанию.*/
  products.push({
    title: _name.value,
    price: priceOf.value,
  });
  _name.value = "";
  priceOf.value = ""; 
  newProducts();
};
// ------------Записываем функцию которая создаёт - div -  с дмя ззаголовками внутри и кнопку.--------------------

function createNode(title, price, index) {

  const div = document.createElement("div");

  const h1 = document.createElement("h3");
  h1.innerText = title;

  const h2 = document.createElement("h3");
	h2.innerText = price;
	
  // -------------Добавляем действие удаления карточки. ---------------
  const btn = closeBtn(); 
  btn.onclick = () => {
    section.removeChild(
      div
	  );
	  
    // -----------Удаляем элемент из массива-------------------------
    const result = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== index) {
        
        result.push(products[i]);
      } 
    }
    products = result;
    newProducts();
    if (!products.length) {
      section.append(noProduct);
    }
  };

  div.append(h1, h2, btn); 
  div.classList.add("productCard");

  div.onmouseover = () => {
    btn.style.opacity = "1";
  };

  div.onmouseleave = () => {
    btn.style.opacity = "0";
	};
	
	section.append(div);
	// -----------------------------------------------------

  // -------- КНОПКА подсчитываем сумму всех товаров---------------------------
  sumBtn.onclick = () => {
    allSum();
  };
  // --------Удаляем товары из корзины----------------------------------

  delBtn.onclick = () => {
    const del = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== i) {
        delete products[i];
      }
    }
    products = del;

    newProducts();
    if (!products.length) {
      return section.append(noProduct);
    }
  };
  //----------------------------------------------
};
// ----------------------------------------
function newProducts() {
  section.innerHTML = ""; 
  for (let i = 0; i < products.length; i++) {
    createNode(products[i].title, products[i].price, i); 
	}
}
// -------------------------------------------------------------
function closeBtn() {
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("close");
  return btn;
} // ---------------------------------------------------
form2.onsubmit = (e) => {
  e.preventDefault();
  section.innerText = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === searchInput.value) {
      createNode(products[i].title, products[i].price, i);
    }
  }
};
// ----------------------------------------------------------------

//----------sort button-------------

sortBtn.onclick = () => {
  products.sort((a, b) => a.price - b.price);
  newProducts();
};
// -------ФУНКЦИЯ-----Подсчитываем сумму всех товаров---------------------------
function allSum() {
  let sumOf = 0;
  for (let i = 0; i < products.length; i++) {
    sumOf += +products[i].price;
  }
  h6.innerText = `_ ${sumOf}`;
}
// ----------------------------------------------------------------

/* 
Изменить эту функцию так, что бы могли использовать её как и для  - form2.onsubmit -  и для первоночальной её формы - newProducts();
function newProducts() {
	section.innerHTML = "";
	for (let i = 0; i < products.length; i++){
		createNode(products[i].title, products[i].price, i); /*Добавим - i - чтобы распознать элемент карточку которую  нужно удалить из массива при нажатии на кнопку 
	}
};
*/