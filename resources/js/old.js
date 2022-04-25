
// const URL = `https://pokeapi.co/api/v2/pokemon`;
// const URL = 'https://api.waifu.pics/many/sfw/waifu';
// const lista = document.querySelector("#lista");
// let temp_page = 0;
// const crearItem = ({ name }) => {
//     const li = document.createElement("li");
//     li.textContent = name;
//     lista.appendChild(li);
// }
// const btn = document.querySelector('#btn');

// const GETDATA = async ( page = 0) => {
//     try {
//         const newURL = `${URL}?limit=100&offset=${page}`;
//         const { data } = await axios.get(newURL);
//         const { results } = data;
//         results.forEach(pokemon => {
//             crearItem(pokemon);
//         });
//     } catch (error) {
//         console.log(error.response);
//     }
// }
// const changePage = () => {
//     GETDATA( temp_page + 100);
// };
// btn.addEventListener('click', changePage);
// GETDATA();
// const buildImg = (img_url) => {
//     const img = document.createElement('img');
//     img.src = img_url;
//     img.style.height = '50px';
//     img.style.width = '50px';
//     const li = document.createElement("li");
//     li.appendChild(img);
//     lista.appendChild(li);
// };
// const data = async () => {
//     try {
//         const { data: { files } } = await axios.post(URL, {
//             data: []
//         });

//         files.forEach(img_url => {
//             buildImg(img_url);
//         });

//     } catch (error) {
//         console.log(error.response);
//     }
// }
// data();