import clientsData from './data/clients_data.js';


const getDispach = document.getElementById('input-despacho');
const getPort = document.getElementById('input-puerto');
const getEta = document.getElementById('input-eta')
const getAddButton = document.getElementById('add-btn');
const getList = document.getElementById('my-list');



let operations = [];

//*!TEMPLATE

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

//! AGREGANDO EL KEY CLIENTES DE NUESTRO ARRAY DE OBJETOS 

const getClient = document.querySelector('#input-cliente');

clientsData.forEach(client => {
  const option = document.createElement('option');
  option.value = client.name;
  option.text = client.name;
  getClient.appendChild(option);
});

//! AGREGANDO UNA NUEVA OPERACIÓN AL DOM

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
  getDispach.value = '';
}

getAddButton.addEventListener('click', agregarOperacion);