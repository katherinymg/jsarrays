const p_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/f1.jpg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/f2.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banios: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/f3.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banios: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa lujosa a la orilla del lago con maravillosa vista',
        src: './assets/img/f4.jpg',
        descripcion: 'Esta casa tiene 20 habitaciones y 10 baños lo que permitirá invitar a toda la familia para pasar fiestas de año nuevo o hacer celebraciones',
        ubicacion: 'Lake Michigan Beach, MI, CA 34678',
        habitaciones: 20,
        banios: 10,
        costo: 6000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de Paso',
        src: './assets/img/f5.jpg',
        descripcion: 'Pequeña pero comoda casa para pasar una o dos noches, cerca a la ruta 78',
        ubicacion: 'Merideon Mountain, Ruta 78, CA 328',
        habitaciones: 1,
        banios: 1,
        costo: 500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de Descanso',
        src: './assets/img/f6.jpg',
        descripcion: 'Si buscas relajarte y pasar unos días de descanso, con un clima tropical con la piscina frente a tus pies, este es tu lugar',
        ubicacion: 'Tropic street, California, CA 12313',
        habitaciones: 3,
        banios: 2,
        costo: 2500,
        smoke: true,
        pets: true
    }
];


const generarHtmlPropiedad = (propiedad) => {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src='${propiedad.src}' class="card-img-top" alt="Propiedad en alquiler"/>
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


const casa_alquiler = document.querySelector('#propiedades_alquiler');
let pintarhtmlAlquiler = '';
p_alquiler.forEach(alquiler => pintarhtmlAlquiler += generarHtmlPropiedad(alquiler));
casa_alquiler.innerHTML = pintarhtmlAlquiler;