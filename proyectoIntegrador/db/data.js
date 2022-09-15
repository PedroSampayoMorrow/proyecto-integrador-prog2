let data = {
    usuarios: [{
        id: 1,
        username: "pedro.sampayo",
        imagenUrl: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
        cantidadPosteos: 30,
        cantidadSeguidores: 100,
        cantidadSeguidos: 600,
        
    },
    {
        id: 2,
        username: "guillermo.tufro",
        imagenUrl: "https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
        cantidadPosteos: 310,
        cantidadSeguidores: 1300,
        cantidadSeguidos: 6500,
      
    },
    {
        id: 3,
        username: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        cantidadPosteos: 30,
        cantidadSeguidores: 100,
        cantidadSeguidos: 500,

    },
    {
        id: 4,
        username: "sofia.cacciato",
        imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
        cantidadPosteos: 230,
        cantidadSeguidores: 515,
        cantidadSeguidos: 124,
    
    },
    {
        id: 5,
        username: "messi.chiquito",
        imagenUrl: "https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
        cantidadPosteos: 230,
        cantidadSeguidores: 54115,
        cantidadSeguidos: 1124,
    
    }
    ],
    comentarios: [{
        id: 1,
        usuarioAutor: "guillermo.tufro",
        idPosteo: 1,
        idUsuario: 2,
        imagenUrl: "https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
        texto: "Increible imagen"
    },
    {
        id: 2,
        usuarioAutor: "guillermo.tufro",
        idPosteo: 2,
        idUsuario: 2,
        imagenUrl: "https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
        texto: "Wow!"
    },
    {
        id: 3,
        usuarioAutor: "pedro.sampayo",
        idPosteo: 3,
        idUsuario: 1,
        imagenUrl: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
        texto: "lol"
    }, {
        id: 4,
        idUsuario: 3,
        idPosteo: 4,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "Fuaaaa"
    }, {
        id: 5,
        idUsuario: 3,
        idPosteo: 5,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "C:"
    }, {
        id: 6,
        idUsuario: 3,
        idPosteo: 2,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "Mira eso!"
    }, {
        id: 7,
        idUsuario: 3,
        idPosteo: 1,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "No me gusto tanto"
    }, {
        id: 8,
        idUsuario: 3,
        idPosteo: 1,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "Re lindo"
    }, {
        id: 9,
        idUsuario: 3,
        idPosteo: 5,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "Alta imagen"
    }, {
        id: 10,
        idUsuario: 3,
        idPosteo: 10,
        usuarioAutor: "felix.duhalde",
        imagenUrl: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        texto: "Fua"
    }],
    posteos: [
        {
            id: 1,
            usuarioAutor: "pedro.sampayo",
            idAutor: 1,
            nombre: 'Cancun',
            descripcion: "Las hermosas playas del caribe!",
            imagenUrlAutor: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
            imagenUrl: "https://mexicoallinclusive.com.mx/wp-content/uploads/2021/04/190777494-500x600.jpg",
        },
        {
            id: 2,
            usuarioAutor: "guillermo.tufro",
            nombre: 'Punta del Este',
            descripcion: "Punta del este!",
            idAutor: 2,
            imagenUrlAutor: "https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
            imagenUrl: "https://cdn-images.xintelweb.com/upload/bpv7678_2.jpg?56499",
        },
        {
            id: 3,
            usuarioAutor: "guillermo.tufro",
            nombre: 'Buenos Aires',
            descripcion: "Mi viaje a la hermosa ciudad de buenos Aires",
            idAutor: 2,
            imagenUrlAutor: "https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
            imagenUrl: "https://gas-kvas.com/en/uploads/posts/2022-08/thumbs/1661357081_45-gas-kvas-com-p-beautiful-photos-of-buenos-aires-city-from-47.jpg",
        },
        {
            id: 4,
            usuarioAutor: "sofia.cacciato",
            nombre: 'paris',
            descripcion: "La torre",
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://i.pinimg.com/564x/e6/e4/da/e6e4dad839cd8402ee505ff9876db6fa.jpg",
        },
        {
            id: 5,
            usuarioAutor: "sofia.cacciato",
            nombre: 'amsterdam',
            descripcion: "Amsterdam es mi lugar preferido en el mundo",
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://pbs.twimg.com/media/CDLU_h6WAAEhP5k.jpg",
        },
        {
            id: 6,
            usuarioAutor: "sofia.cacciato",
            nombre: 'noruega',
            descripcion: "Hermoso el dia aca en Oslo!",
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://salmon.fromnorway.com/globalassets/salmon/images/jpeg-1920x630-footer/1920x630_footer_sa.jpg?preset=width-500,height-600,crop",
        },
        {
            id: 7,
            usuarioAutor: "felix.duhalde",
            nombre: 'VidCon',
            descripcion: "Trabajando para mi presentacion en VidCon!",
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://besmart.company/wp-content/uploads/2020/10/Webinar-van-de-Ondernemerschap-Academy-scaled-500x600.jpg",
        },
        {
            id: 8,
            usuarioAutor: "felix.duhalde",
            nombre: 'safari',
            descripcion: "Imaginense encontrarte esto afuera de tu casa..., solo en un Safari",
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/500px-Lion_%28Panthera_leo%29_male_6y.jpg",
        },
        {
            id: 9,
            usuarioAutor: "felix.duhalde",
            descripcion: "Perfecto lugar para ir a nadar un rato",
            nombre: 'lago',
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://harriscenter.org/wp-content/uploads/2017/11/canoeing_Silver_Lake_June2016_Thelen_500x600_acf_cropped-500x600.jpg",
        },
        {
            id: 10,
            usuarioAutor: "messi.chiquito",
            descripcion: "1er puesto Tour de France!",
            nombre: 'Tour de France',
            idAutor: 5,
            imagenUrlAutor: "https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
            imagenUrl: "https://www.healthcotrials.com/wp-content/uploads/2019/11/healthco-sobre-nosotros-home-500x600.jpg",
        }
    ]
}

module.exports = data