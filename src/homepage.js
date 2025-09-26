document.addEventListener('DOMContentLoaded', () => {
  function renderUsers() {
    const usersList = document.getElementById('users-list')
    if (!usersList) return

    usersList.innerHTML = ''

    let parsedData = JSON.parse(localStorage.getItem('formData')) || []

    // 👇 ensure parsedData is an array
    if (!Array.isArray(parsedData)) {
      parsedData = [parsedData]
    }

    parsedData.forEach((user, index) => {
      const row = document.createElement('tr')

     row.innerHTML = `
  <td class="py-2 px-4 border-b">${user.firstName}</td>
  <td class="py-2 px-4 border-b">${user.lastName}</td>
  <td class="py-2 px-4 border-b">${user.country}</td>
  <td class="py-2 px-4 border-b space-x-2">
    <button onclick="editUser(${index})" class=" px-3 py-1 rounded-lg  hover:bg-blue-600 transition">✏️</button>
    <button onclick="deleteUser(${index})" class=" px-3 py-1 rounded-lg  hover:bg-red-600 transition">🗑</button>
  </td>
`
      usersList.appendChild(row)
    })
  }

  window.deleteUser = function (index) {
    let data = JSON.parse(localStorage.getItem('formData')) || []
    if (!Array.isArray(data)) data = [data]

    data.splice(index, 1)
    localStorage.setItem('formData', JSON.stringify(data))
    renderUsers()
  }

  window.editUser = function (index) {
    let data = JSON.parse(localStorage.getItem('formData')) || []
    if (!Array.isArray(data)) data = [data]

    const user = data[index]
    console.log("Edit user:", user)
    window.location.href = `form.html?edit=${index}`
  }

  renderUsers()
})
