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
        imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
        cantidadPosteos: 310,
        cantidadSeguidores: 1300,
        cantidadSeguidos:6500,
        idPosteos:[]
    }
    ],
    posteos : [
        {
            id: 1,
            usuarioAutor: "pedro.sampayo",
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
                idUsuario : 1,
                idComentario: 3,
                usuarioAutor:"pedro.sampayo",

                imagenUrl:"https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
                texto: "lol"
            }]
        },
        {
            id: 2,
            usuarioAutor: "guillermo.tufro",
            imagenUrlAutor: "https://i.pinimg.com/280x280_RS/e8/10/cd/e810cdef541e690e2c9d8b6361890050.jpg",
            imagenUrl: "https://dspncdn.com/a1/media/692x/9d/c9/47/9dc947f0686a3a67cac7a748ea2c19d0.jpg",
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
        }
    ]
}

module.exports = data