document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('my-form')
  if (!form) return  // stop if not on form.html

  form.addEventListener('submit', (event) => {
    event.preventDefault()


    const formData = new FormData(form)
    const formDataObject = Object.fromEntries(formData.entries())

    const existingData = JSON.parse(localStorage.getItem('formData')) || []
    existingData.push(formDataObject)

    localStorage.setItem('formData', JSON.stringify(existingData))
    alert('User saved!')
    form.reset()

    // Optional: redirect back to homepage after saving
    window.location.href = 'index.html'
  })
})
