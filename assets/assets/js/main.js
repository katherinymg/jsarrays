const p_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/f1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banios: 4,
        costo: 5000,
        smoke:false,
        pets:false 
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/f2.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banios: 1,
        costo: 1200,
        smoke:true,
        pets:true 
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/f3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 4500,
        smoke:false,
        pets:true 
    }
];

const p_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/f4.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke:false,
        pets:true 
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/f5.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke:true,
        pets:true 
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/f6.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke:false,
        pets:false 
    }
];

const generarHtmlPropiedad = (propiedad) => {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src='${propiedad.src}' class="card-img-top" alt="Propiedad"/>
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


const casa_venta = document.querySelector('#ventaindex');
let pintarhtmlVenta = '';
p_venta.forEach(venta => pintarhtmlVenta += generarHtmlPropiedad(venta));
casa_venta.innerHTML = pintarhtmlVenta;


const casa_alquiler = document.querySelector('#alquiler');
let pintarhtmlAlquiler = '';
p_alquiler.forEach(alquiler => pintarhtmlAlquiler += generarHtmlPropiedad(alquiler));
casa_alquiler.innerHTML = pintarhtmlAlquiler;

const botonp = document.querySelector('#botonp');
botonp.innerHTML = `<a href='./propiedades_venta.html'><button class='boton'>Ver otras Propiedades</button></a>`;

const botonf = document.querySelector('#boton_2');
botonf.innerHTML = `<a href='./propiedades_alquiler.html'><button class='boton'>Ver más Propiedades</button></a>`;
