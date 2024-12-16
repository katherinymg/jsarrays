const p_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/f1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/f2.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/f3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Acojedora Casa de 2 Pisos',
        src: './assets/img/f4.jpg',
        descripcion: 'Esta hermosa casa está rodeada por un bosque a 10km de la ciudad, dando la sensasión de tranquildad y comodidad',
        ubicacion: 'Fanshawe Pioneer Village, City Ville, CA 67890',
        habitaciones: 4,
        banios: 2,
        costo: 4300,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con amplio jardín',
        src: './assets/img/f5.jpg',
        descripcion: 'Esta casa está recien remodelada, en un terreo de 300 metros cuadrados, los cuales se comparten en 280mt cuadrados de construcción y el restante en jardín',
        ubicacion: 'Angeles National Forest, Arcadia, CA 98765',
        habitaciones: 4,
        banios: 3,
        costo: 3800,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento Moderno',
        src: './assets/img/f6.jpg',
        descripcion: 'Esta hermoso apartamento está totalmente amoblado, sus dueños tenían un exquisito gusto por el arte',
        ubicacion: 'Angolo estate winery, Newberg,OR, CA 98405',
        habitaciones: 2,
        banios: 1,
        costo: 8300,
        smoke: false,
        pets: false
    }
];


const generarHtmlPropiedad = (propiedad) => {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src='${propiedad.src}' class="card-img-top" alt="Propiedad en venta"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones | <i class="fas fa-bath"></i> ${propiedad.banios} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${textoFumar(propiedad.smoke)}
                    ${textMascota(propiedad.pets)}
                </div>
            </div>
        </div>
    `;
};


const textoFumar = (fumar) => {
    return fumar ? 
    `<p class='permite'><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
    `<p class='no_permite'><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
}

const textMascota = (mascota) => {
    return mascota ? 
    `<p class='permite'><i class="fas fa-paw"></i> Mascotas permitidas</p>` : 
    `<p class='no_permite'><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
}


const casa_venta = document.querySelector('#venta');
let pintarhtmlVenta = '';
p_venta.forEach(venta => pintarhtmlVenta += generarHtmlPropiedad(venta));
casa_venta.innerHTML = pintarhtmlVenta;

const botonp = document.querySelector('#botonp');
botonp.innerHTML = `<a href='./propiedades_venta.html'><button class='boton'>Ver otras Propiedades</button></a>`;
