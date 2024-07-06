document.addEventListener("DOMContentLoaded", function () {
  const data = {
    results: [
      {
        title: "Estudiar Js",
        priority: "alta",
        isDone: false,
      },
      {
        title: "Estudiar CSS",
        priority: "alta",
        isDone: true,
      },
      {
        title: "Estudiar OOP",
        priority: "media",
        isDone: false,
      },
      {
        title: "Estudiar IA",
        priority: "baja",
        isDone: false,
      },
    ],
  };

  // Imprimir en consola la lista de títulos de los 'Todos'
  data.results.forEach((todo) => {
    console.log(todo.title);
  });

  // Generar la tabla y mostrar los 'Todos' en el documento HTML
  const todosContainer = document.getElementById("todos");
  let tableHtml = `<table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th>Título</th>
                                <th>Prioridad</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>`;

  data.results.forEach((todo) => {
    const rowClass = todo.isDone ? "table-completed" : "table-pending";
    const statusText = todo.isDone ? "Completado" : "Pendiente";
    tableHtml += `<tr class="${rowClass}">
                        <td>${todo.title}</td>
                        <td>${todo.priority}</td>
                        <td>${statusText}</td>
                      </tr>`;
  });

  tableHtml += `</tbody></table>`;
  todosContainer.innerHTML = tableHtml;
});
