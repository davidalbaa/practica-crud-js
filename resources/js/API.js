const { default: axios } = require("axios");
import Swal from 'sweetalert2'
const input = document.querySelector('#nombre');
const btn = document.querySelector('#btn');
const btn_update = document.querySelector('#btn_update');
const btn_delete = document.querySelector('#btn_delete');
const lista = document.querySelector('#lista');
const tabla = document.querySelector('#tabla');
const tbody = tabla.childNodes[3];
const name_errors = document.querySelector('#name_errors');
const pag = document.querySelector('#pag');
let item_id = 0;
let pagina = 1;

// localhost:8000
// Metodos crud
// crear
const create = async () => {
  try {
    const curso = {
      name: input.value
    };
    const response = await axios.post('/cursos/create', curso);
    return response;
  } catch (error) {
    const { errors } = error.response.data;
    name_errors.innerHTML = '';
    const listado_errores = errors.name.map(function (item) {
      const text = document.createTextNode = item;
      return text;
    });
    name_errors.append(...listado_errores);
  }
}
// listar elementos
const listar = async () => {
  try {
    const pagina_index = localStorage.getItem('pagina');
    const response = await axios.get(`/cursos?page=${pagina_index}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
// actualizar
const update = async () => {
  try {
    const id = item_id;
    const curso = {
      name: input.value
    }
    const response = await axios.put(`/cursos/update/${id}`, curso);
    return response;
  } catch (error) {
    console.log(error.response)
  }
};
// Eliminar

const deleteCurso = async () => {
  try {
    const id = item_id;
    const response = await axios.delete(`/cursos/destroy/${id}`);
    return response;
  } catch (error) {
    console.log(error.response)
  }
};
const createLi = (data) => {
  const listado = data.map(function (item) {
    const li = document.createElement('li');
    li.textContent = item.name;
    const btn_ed = document.createElement('button');
    btn_ed.dataset.id = item.id;
    btn_ed.textContent = 'Editar';
    const btn_d = document.createElement('button');
    btn_d.dataset.id = item.id;
    btn_d.textContent = 'Eliminar';
    const arr = [btn_ed, btn_d];
    li.append(...arr);
    return li;
  });
  return listado;
}
const createTr = (data) => {
  const listado = data.map(function (item) {
    const tr = document.createElement('tr');
    const td_id = document.createElement('td');
    td_id.textContent = item.id;
    const td = document.createElement('td');
    const text = document.createTextNode(item.name);
    //
    const btn_ed = document.createElement('button');
    btn_ed.dataset.id = item.id;
    btn_ed.textContent = 'Editar';
    btn_ed.classList.add('editar');
    btn_ed.classList.add('btn');
    btn_ed.classList.add('btn-warning');
    const btn_d = document.createElement('button');
    btn_d.dataset.id = item.id;
    btn_d.textContent = 'Eliminar';
    btn_d.classList.add('eliminar');
    btn_d.classList.add('btn');
    btn_d.classList.add('btn-danger');
    const espacio = document.createTextNode(' | ');
    const arr = [text, btn_ed, espacio, btn_d];
    const arrtd = [td_id, td];
    td.append(...arr);
    tr.append(...arrtd);
    return tr;
  });
  return listado;
}
const createPag = (last_page) => {
  const page_items = [...Array(last_page)].map(function (item, index) {
    const li = document.createElement('li');
    li.classList.add('page-item');
    const span = document.createElement('span');
    span.classList.add('page-link');
    span.textContent = index + 1;
    li.appendChild(span);
    return li;
  });
  pag.append(...page_items);
}
const recargar = () => {
  window.location.reload();
}
// Disparadores
const created = async () => {
  const response = await create();
  await Swal.fire({
    icon: 'success',
    title: 'Creado :)',
    showConfirmButton: false,
    timer: 1500
  });
  recargar();
}
const updated = async () => {
  const response = await update();
  item_id = 0;
  await Swal.fire({
    icon: 'success',
    title: 'Actualizado :)',
    showConfirmButton: false,
    timer: 1500
  });
  recargar();
}
const deleted = async () => {
  const response = await deleteCurso();
  item_id = 0;
  await Swal.fire({
    icon: 'success',
    title: 'Eliminado :)',
    showConfirmButton: false,
    timer: 1500
  });
  recargar();
}
const readData = async (rePaginar = true) => {
  if (!localStorage.getItem('pagina')) {
    localStorage.setItem('pagina', 1);
  }

  const response = await listar();
  const last_page = response.data.data.last_page;
  const d = response.data.data.data;
  const trs = createTr(d);
  tbody.innerHTML = '';
  tbody.append(...trs);
  // crear pág
  if (rePaginar) {
    createPag(last_page);
  }
}

const handleClick = async (e) => {
  const button = e.target;
  if (button.classList.contains('eliminar')) {
    const text = button.parentNode.childNodes[0].textContent;
    const id = button.dataset.id;
    const alerta = Swal.fire({
      title: '¿Desea eliminar el item?',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, eliminar'
    });
    const response = await alerta;
    if (response.isConfirmed) {
      item_id = id;
      deleted();
    }
  }
  if (button.classList.contains('editar')) {
    const text = button.parentNode.childNodes[0].textContent;
    const id = button.dataset.id;
    item_id = id;
    input.value = text;
  }

};
const handleClickPage = async (e) => {
  const button = e.target;
  if (button.classList.contains('page-link')) {
    const pg = button.textContent;
    localStorage.setItem('pagina', pg);
    readData(false);
  }
};

tbody.addEventListener('click', handleClick);
pag.addEventListener('click', handleClickPage);
window.addEventListener('load', readData);
btn_delete.addEventListener('click', deleted);
btn_update.addEventListener('click', updated);
btn.addEventListener('click', created);
