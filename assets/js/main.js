

const getDispach = document.getElementById('input-despacho');
const getClient = document.getElementById('input-cliente');
const getPort = document.getElementById('input-puerto');
const getEta = document.getElementById('input-eta')

const getAddButton = document.getElementById('add-btn');
const getList = document.getElementById('my-list');



let operations = [];

//*Template

const updatelist = () => {
  let html = '';

  for (let op of operations) {
    html += `
    <tr>
      <td>${op.dispatch}</td>
      <td>${op.client}</td>
      <td>${op.port}</td>
      <td>${op.eta}</td>
    </tr>
  `
  }

  getList.innerHTML = html;

}

const agregarOperacion = () => {
  const newDispach = getDispach.value;
  const newCliente = getClient.value;
  const newPort = getPort.value;
  const newEta = getEta.value;

  operations.push({
    dispatch: newDispach,
    client: newCliente,
    port: newPort,
    eta: newEta
  })

  updatelist();
  getDespacho.value = '';
}

getAddButton.addEventListener('click', agregarOperacion);










