const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e) {
    insert.innerHTML = `
    <div class = "color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space': e.key}</td>  
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})

//use this code to get space print with pressing space or else u can simple use e.key also