function handleClick(name, hometown) {
  teacher = new Teacher(name, hometown)
  $('#results').append(`<li>${name}, ${hometown}</li>`)
}
