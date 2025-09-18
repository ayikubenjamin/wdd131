let input = document.querySelector('#favchap')
let add_button = document.querySelector('button')
let chapters_list = document.querySelector('#list')






add_button.addEventListener('click', function(){
    if(input.value.trim() !== ""){
        const entry = document.createElement('li')
        entry.textContent = input.value

        const delete_btn = document.createElement('button')
        delete_btn.textContent = '❌'

        entry.append(delete_btn)
        chapters_list.append(entry)

        input.value = ''
        input.focus()

        delete_btn.addEventListener('click', function(){
            chapters_list.removeChild(entry)
        });
    } else {
        input.focus()
    }
})



