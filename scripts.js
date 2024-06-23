const listItens = document.querySelector("#list-itens");
const buttonShowAll = document.querySelector('.show-all');
const buttonDiscount = document.querySelector('.discount');
const buttonSumProducts = document.querySelector(".sum-all");
const buttonFilter = document.querySelector(".vegan-filter");

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

let itens = '';

function showAll(arrayProducts) {
    itens = '';

    arrayProducts.forEach(product => {
        itens += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `;
    });

    listItens.innerHTML = itens;
}

// MAP
function discount() {
    const menuDiscount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }));
    showAll(menuDiscount);
}

// REDUCE
function sumProducts() {
    itens = '';
    const totalValue = menuOptions.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);

    itens += `
        <li>
            <p>A soma total dos produtos foi de: ${formatCurrency(totalValue)}</p>
        </li>
    `;
    listItens.innerHTML = itens;
}

// FILTER
function filterItems() {
    const veganProducts = menuOptions.filter((product) => product.vegan);
    showAll(veganProducts);
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions)); // Passa a função anônima para passar um parâmetro dentro de uma função
buttonDiscount.addEventListener('click', discount);
buttonSumProducts.addEventListener('click', sumProducts);
buttonFilter.addEventListener('click', filterItems);
