let data = {
    usuarios: [{
        id: 1,
        username: "pedro.sampayo",
        imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
        cantidadPosteos: 30,
        cantidadSeguidores: 100,
        cantidadSeguidos:600,
        idPosteos:[]
    },
    {
        id: 2,
        username: "guillermo.tufro",
        imagenUrl:"https://media.tycsports.com/files/2022/06/14/440393/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
        cantidadPosteos: 310,
        cantidadSeguidores: 1300,
        cantidadSeguidos:6500,
        idPosteos:[]
    },
    {
        id: 3,
        username: "felix.duhalde",
        imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
        cantidadPosteos: 30,
        cantidadSeguidores: 100,
        cantidadSeguidos:500,
        idPosteos:[]
    },
    {
        id: 4,
        username: "sofia.cacciato",
        imagenUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
        cantidadPosteos: 230,
        cantidadSeguidores: 515,
        cantidadSeguidos:124,
        idPosteos:[]
    },
    {
        id: 5,
        username: "messi.chiquito",
        imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
        cantidadPosteos: 230,
        cantidadSeguidores: 54115,
        cantidadSeguidos:1124,
        idPosteos:[]
    }
    ],
    posteos : [
        {
            id: 1,
            usuarioAutor: "pedro.sampayo",
            idAutor: 1,
            nombre: 'gato',
            imagenUrlAutor: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
            imagenUrl: "https://dspncdn.com/a1/media/692x/9d/c9/47/9dc947f0686a3a67cac7a748ea2c19d0.jpg",
            comentarios:[{
                idComentario:1,
                usuarioAutor:"guillermo.tufro",
                idUsuario : 2,
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Increible imagen"
            },
            {
                idComentario: 2,
                usuarioAutor:"guillermo.tufro",
                idUsuario : 2,
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Wow!"
            },
            {
                idComentario: 3,
                usuarioAutor:"pedro.sampayo",
                idUsuario : 1,
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "lol"
            }]
        },
        {
            id: 2,
            usuarioAutor: "guillermo.tufro",
            nombre: 'chancho',
            idAutor: 2,
            imagenUrlAutor: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
            imagenUrl: "https://floreriatokio.com.ar/wp/wp-content/uploads/2020/11/IMG_20201110_165436081_copy_800x1000-1-500x600.jpg",
            comentarios:[{
                idComentario: 6,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Increible imagen"
            },
            {
                idComentario: 4,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Wow!"
            },
            {
                idComentario: 5,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "lol"
            },
        ]
        },
        {
            id: 3,
            usuarioAutor: "guillermo.tufro",
            nombre: 'chancho',
            idAutor: 2,
            imagenUrlAutor: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
            imagenUrl: "https://image.shutterstock.com/image-photo/happy-young-pig-isolated-on-260nw-2015191823.jpg",
            comentarios:[{
                idComentario: 7,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Increible imagen"
            },
            {
                idComentario: 8,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Wow!"
            },
            {
                idComentario: 9,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "lol"
            },
        ]
        },
        {
            id: 4,
            usuarioAutor: "sofia.cacciato",
            nombre: 'paris',
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://i.pinimg.com/564x/e6/e4/da/e6e4dad839cd8402ee505ff9876db6fa.jpg",
            comentarios:[{
                idComentario: 10,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:11,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Wow!"
            },
            {
                idComentario: 12,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "lol"
            },
        ]
        },
        {
            id: 5,
            usuarioAutor: "sofia.cacciato",
            nombre: 'amsterdam',
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://pbs.twimg.com/media/CDLU_h6WAAEhP5k.jpg",
            comentarios:[{
                idComentario: 13,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:14,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 15,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        },
        {
            id: 6,
            usuarioAutor: "sofia.cacciato",
            nombre: 'noruega',
            idAutor: 4,
            imagenUrlAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22wkdlbjn0UYcKxRR51Xai6qbDTJoQoRT0g&usqp=CAU",
            imagenUrl: "https://salmon.fromnorway.com/globalassets/salmon/images/jpeg-1920x630-footer/1920x630_footer_sa.jpg?preset=width-500,height-600,crop",
            comentarios:[{
                idComentario: 16,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:17,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 18,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        },
        {
            id: 7,
            usuarioAutor: "felix.duhalde",
            nombre: 'computadora',
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://besmart.company/wp-content/uploads/2020/10/Webinar-van-de-Ondernemerschap-Academy-scaled-500x600.jpg",
            comentarios:[{
                idComentario: 19,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:20,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 21,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        },
        {
            id: 8,
            usuarioAutor: "felix.duhalde",
            nombre: 'leon',
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/500px-Lion_%28Panthera_leo%29_male_6y.jpg",
            comentarios:[{
                idComentario: 22,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:23,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 24,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        },
        {
            id: 9,
            usuarioAutor: "felix.duhalde",
            nombre: 'lago',
            idAutor: 3,
            imagenUrlAutor: "https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
            imagenUrl: "https://harriscenter.org/wp-content/uploads/2017/11/canoeing_Silver_Lake_June2016_Thelen_500x600_acf_cropped-500x600.jpg",
            comentarios:[{
                idComentario: 25,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:26,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 27,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        },
        {
            id: 10,
            usuarioAutor: "messi.chiquito",
            nombre: 'bicicleta',
            idAutor: 5,
            imagenUrlAutor: "https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
            imagenUrl: "https://www.healthcotrials.com/wp-content/uploads/2019/11/healthco-sobre-nosotros-home-500x600.jpg",
            comentarios:[{
                idComentario: 28,
                idUsuario : 3,
                usuarioAutor:"felix.duhalde",
                imagenUrl:"https://tecnoandroid.net/wp-content/uploads/2022/02/fotos-boninas-para-perfil-whatsapp-gratis-sin-frase-204.jpg",
                texto: "Fuaaaa"
            },
            {
                idComentario:29,
                idUsuario : 1,
                usuarioAutor:"pedro.sampayo",
                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "Una locura!"
            },
            {
                idComentario: 30,
                idUsuario : 5,
                usuarioAutor:"messi.chiquito",
                imagenUrl:"https://pbs.twimg.com/profile_images/1398347372946673672/GfHDTRWj_400x400.jpg",
                texto: "Hermoso"
            },
        ]
        }
    ]
}

module.exports = data