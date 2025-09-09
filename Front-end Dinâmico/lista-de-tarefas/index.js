const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const todoListUl = document.querySelector('#todo-list')

let tasks = [] // [{title: 'Tarefa 1', done: false}, ...]

function renderTaskOnHTML(taskTitle, done = false) {
  const li = document.createElement('li')
    
    const input = document.createElement('input') // <input />
    input.setAttribute('type', 'checkbox')  // <input type="checkbox" />
    input.addEventListener('change', (event) => {
      const liToToggle = event.target.parentElement

      const spanToTogle = liToToggle.querySelector('span')

      const done = event.target.checked
      if (done) {
        spanToTogle.style.textDecoration = 'line-through'
      } else {
        spanToTogle.style.textDecoration = 'none'
      }

      tasks = tasks.map(t => {
        if(t.title === spanToTogle.textContent) {
          return {
            title: t.title,
            done: !t.done,
          }
        }

        return t
      })

      localStorage.setItem('tasks', JSON.stringify(tasks))
    })
    input.checked = done

    const span = document.createElement('span')
    span.textContent = taskTitle
    
    if(done) {
       span.style.textDecoration = 'line-through' 
    }

    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent // Tarefa 1

        tasks = tasks.filter(t => t.title !== titleToRemove)
        
        todoListUl.removeChild(liToRemove)
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    todoListUl.appendChild(li)
}

window.onload = () => {
  const tasksOnLocalStorage = localStorage.getItem('tasks')
  
  if (!tasksOnLocalStorage) return

  tasks = JSON.parse(tasksOnLocalStorage)

  tasks.forEach(t => {
    renderTaskOnHTML(t.title, t.done)
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault() // Evita o comportamenteo padrão de regarregar a página ao submeter o formlário

    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 3) {
      alert('Sua tarefa precisa de ter, pelo menos, 3 caracteres.')
      return;
    }

    // Adicionando a nova tarefa no array de tasks
    tasks.push({
      title: taskTitle,
      done: false,
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // Adicionando a nota tarefa no HTML  
    renderTaskOnHTML(taskTitle)


    taskTitleInput.value = ''
})


