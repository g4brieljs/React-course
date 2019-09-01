import '../css/style.scss';
// esto improta la hoja  de estilo dentro del modulo, esto no se puede con js vanilla, se necesita webpack y los modulos necesarios


const Cars = ['car1', 'cars2', 'cars3', 'cars4', 'cars5'];

let html = '';
Cars.forEach(car => {
    html += `
        <li>${car}</li>
    `
});

console.log(html);
document.getElementById('cars').innerHTML = html;
