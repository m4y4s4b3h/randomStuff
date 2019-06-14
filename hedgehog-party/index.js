fetch('https://hedgehog-party.herokuapp.com/api/v1/invites')
  .then(response => response.json())
  .then(data => data)
  .then(hedgehogs=> appendHedgehogs(hedgehogs))
// console.log(hedgehog);
function appendHedgehogs(hedgehogs) {
  hedgehogs.forEach(function(hedgehogs) {
    $('article').append(`<p> ${hedgehogs.id}. ${hedgehogs.name} <br> Allergies: ${hedgehogs.allergies} <br> Hoglets: ${hedgehogs.hoglets} </p>`)
  })
}
