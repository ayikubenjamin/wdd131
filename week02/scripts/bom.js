const input = document.querySelector('#favchap')
const submit_btn = document.querySelector('button')
const list = document.querySelector('#list')

const entryList = document.createElement('li')
const del_btn = document.createElement('button')
entryList.textContent = input.value
del_btn.textContent = '❌'
entryList.append(del_btn)
list.append(entryList)