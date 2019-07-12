'use strict';


//Takes a string and returns the HTML required to create a new list item with the given item
function newItem (newItem) {
  return `<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`;

}


//form listener that monitors for new item submission and runs it through newItem() to generate new html
$('form').submit(function (event) {
  event.preventDefault();
  let item = $('input#shopping-list-entry').val();
  $('ul').append(newItem(item));

});



//check button listener that toggles the strikethrough class on the shopping item
$('ul').on('click', '.shopping-item-toggle', function (event) {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

});


//delete button listener that removes <li> items from the list
$('ul').on('click', '.shopping-item-delete', function (event) {
  $(this).closest('li').remove();

});