const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const chapterItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        chapterItem.textContent = input.value;
        deleteButton.textContent = '❌';

        chapterItem.appendChild(deleteButton);

        list.appendChild(chapterItem);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(chapterItem);
        });
    } else {
        input.focus(); // just refocus if input is blank
    }
});
