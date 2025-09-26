/*
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('my-form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    // 1. Create a FormData object from the form
    const formData = new FormData(form)

    // 2. Convert the FormData object to a regular JavaScript object
    const formDataObject = Object.fromEntries(formData.entries())

    // 5. Get existing data from local storage
    const existingData = localStorage.getItem('formData')

    if (!existingData) {
      // If no existing data, store the new data directly
      const newData = JSON.stringify([formDataObject])
      localStorage.setItem('formData', newData)
      alert('Form data saved to local storage!')
      form.reset() // Clear the form
      return
    }

    const parsedData = JSON.parse(existingData)
    parsedData.push(formDataObject)

    const newData = JSON.stringify(parsedData)
    localStorage.setItem('formData', newData)

    alert('All form data saved to local storage!')
    form.reset() // Clear the form
    renderUsers() // Re-render the users list
  })

  function renderUsers() {
    const usersList = document.getElementById('users-list')
    usersList.innerHTML = '' // Clear existing list

    const existingData = localStorage.getItem('formData')
    if (!existingData) return

    const parsedData = JSON.parse(existingData)
    console.log("Users from localStorage:", parsedData)

    parsedData.forEach((user, index) => {
      const row = document.createElement('tr')

      // First Name
    const firstNameCell = document.createElement('td')
    firstNameCell.textContent = user.firstName
    row.appendChild(firstNameCell)

    // Last Name
    const lastNameCell = document.createElement('td')
    lastNameCell.textContent = user.lastName
    row.appendChild(lastNameCell)

    // Country
    const countryCell = document.createElement('td')
    countryCell.textContent = user.country
    row.appendChild(countryCell)

    // Actions (Edit + Delete)
    const actionsCell = document.createElement('td')
      
    // Edit button
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', () => {
      // 👉 here you’ll load user data into the form for editing
      console.log('Edit user:', user)
    })

    // Delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => {
      parsedData.splice(index, 1) // Remove user from array
      localStorage.setItem('formData', JSON.stringify(parsedData)) // Update storage
      renderUsers() // Re-render table
    })

    actionsCell.appendChild(editButton)
    actionsCell.appendChild(deleteButton)
    row.appendChild(actionsCell)

    // Add row to table body
    usersList.appendChild(row)
  })
}

// Initial render
renderUsers()
})


*/