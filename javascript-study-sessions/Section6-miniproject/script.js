const foodInput = document.querySelector('#addBar');
const priceInput = document.querySelector('#addPrice');
const submitButton = document.querySelector('#submitButtn');
const listContainer = document.querySelector('.listContainer');
const errorMessageBox = document.querySelector('.errorMessage');
const deleteItemBtn = document.querySelector('.deleteButton');
const priceTotalBox = document.querySelector('.totalPrice');
const groceryList = [];
// Allowing submission through click or pressing enter while active in input boxes 
submitButton.addEventListener('click', handleSumbit);
priceInput.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        handleSumbit();
    }
});
foodInput.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        handleSumbit();
    }
});
// Main function
function handleSumbit() {
    if (foodInput.value !== '' && priceInput.value !== '') {
        let formattedPrice = parseFloat(priceInput.value).toFixed(2);
        const groceryItem = { food: foodInput.value, price: formattedPrice };
        // Add the food item to the grocery list
        groceryList.push(groceryItem);
        // Create list items
        let li = document.createElement('li');
        li.classList.add('listItem');
        let p = document.createElement('p');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'X';
        li.appendChild(p);
        li.appendChild(deleteButton);
        p.textContent = `${groceryItem.food}: $${groceryItem.price}`;
        listContainer.appendChild(li);
        // Deleting list items
        deleteButton.addEventListener('click', () => {
            li.remove();
            groceryList.splice(groceryList.indexOf(groceryItem), 1);
            updateTotalPrice(); // Update total price after removing item
        });

        // Update the total price after adding item
        updateTotalPrice();
        foodInput.value = '';
        priceInput.value = '';
    } else {
        // If one input field is empty, nothing runs and this displays
        let errorMessage = document.createElement('p');
        errorMessage.textContent = "Please Input Both a Food and a Price";
        errorMessageBox.appendChild(errorMessage);
        setTimeout(() => {
            errorMessageBox.removeChild(errorMessage);
        }, 1500);
    }
}
// Price Sum Function 
function updateTotalPrice() {
    const priceTotal = groceryList.reduce((total, item) => {
        return total + parseFloat(item.price);
    }, 0);
    priceTotalBox.textContent = `Cart  Total: $${priceTotal.toFixed(2)}`
};
