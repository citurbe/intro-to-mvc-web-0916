let store = {teachers:[]}

$('document').ready(()=>{

$('#clicker').click(()=>{
  event.preventDefault()
  handleClick($('#name').val(), $('#hometown').val())
}
)

})
