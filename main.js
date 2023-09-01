

const getDespacho = document.getElementById('input-despacho');
const getPuerto = document.getElementById('input-puerto');
const getAddButton = document.getElementById('add-btn');
const getRemoveButton = document.getElementById('remove-btn')
const getList = document.getElementById('my-list');



let operations = [];

//*Template
const updatelist = () => {
  let html = '';

  for (let i of operations) {
    html += `
      <td>${i}</td>
    `
  }
  return getList.innerHTML = html;

}

const agregarOperacion = () => {
  const nuevoDespacho = getDespacho.value;
  const nuevoPuerto = getPuerto.value;
  operations.push(nuevoDespacho);
  operations.push(nuevoPuerto);


  updatelist();
  getDespacho.value = '';
}

getAddButton.addEventListener('click', agregarOperacion);










