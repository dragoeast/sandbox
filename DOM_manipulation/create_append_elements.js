
// Create a function for adding items into our shoppoing list.
function createListItem(item) {
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    li.appendChild(text);

    const icon = createIcon();

    const button = createButton()
    button.appendChild(icon);

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

function createButton() {
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    return button
}

function createIcon() {
    const icon = document.createElement('i');
    icon.className = "fa-solid fa-xmark";

    return icon;
}

shopping_list = [
    'cheese', 'eggs', 'hummus', 'blueberry',
    'blackberry'
];

for (shopping_item of shopping_list) {
    createListItem(shopping_item);
}
