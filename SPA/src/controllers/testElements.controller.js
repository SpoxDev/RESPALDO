import testElements from "../views/testElements.html";

export default () => {
  const divTestElements = document.createElement("div");
  divTestElements.innerHTML = testElements;

  class DataTable {
    constructor(container) {
      this.container = container;
      this.table = container.querySelector('.mdc-data-table');
      this.headerRow = container.querySelector('#header-row');
      this.tableBody = container.querySelector('#table-body');
      this.mdcDataTable = null;
    }

    initialize() {
      this.mdcDataTable = new mdc.dataTable.MDCDataTable(this.table);
    }

    setHeaders(headers) {
      this.headerRow.innerHTML = headers.map(header => `
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">${header}</th>
      `).join('');
    }

    setData(data) {
      this.tableBody.innerHTML = data.map(row => `
        <tr class="mdc-data-table__row">
          ${Object.values(row).map(cell => `
            <td class="mdc-data-table__cell">${cell}</td>
          `).join('')}
        </tr>
      `).join('');
    }

    refresh() {
      if (this.mdcDataTable) {
        this.mdcDataTable.layout();
      }
    }
  }

  // Initialize the table
  const tableContainer = divTestElements.querySelector('.test-container-tables');
  const dataTable = new DataTable(tableContainer);
  dataTable.initialize();

  // Example data
  const headers = ["ID", "Nombre", "Edad", "Email", "Telefono"];
  const data = [
    { ID: 1, Nombre: "Juan", Edad: 25, Email: "juan@example.com", Telefono: "1234567890" },
    { ID: 2, Nombre: "Ana", Edad: 30, Email: "ana@example.com", Telefono: "1234567890" },
    { ID: 3, Nombre: "Pedro", Edad: 28, Email: "pedro@example.com", Telefono: "1234567890" },
  ];

  const headersSize = headers.length;

  let isValid = true

  for(let i = 0; i < data.length; i++){
    const objectsize = Object.keys(data[i]).length  
    if(objectsize !== headersSize){
      isValid = false
      break
    }
  }

  if(!isValid){
    alert("Los datos no son validos")
    return
  }

  // Set the data
  dataTable.setHeaders(headers);
  dataTable.setData(data);
  dataTable.refresh();

  return divTestElements;
};
