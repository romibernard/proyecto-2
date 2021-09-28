const mongoose  = require("mongoose")
const Airports   = require("./../models/airportsModel")

require('dotenv').config()

mongoose.connect("mongodb://localhost:27017/proyecto-2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const airports = [
    {
    codeOACI: "MMAA",
    name: "Acapulco, Gen. Juan Álvarez Internacional."
},  {
    codeOACI: "MMAS",
    name: "Aguascalientes, Lic. Jesús Terán Peredo Internacional."
},  {
    codeOACI: "MMBT",
    name: "Bahías de Huatulco, Internacional de Bahías de Huatulco."
}, {
    codeOACI: "MMCP",
    name: "Campeche, Ing. Alberto Acuña Ongay Internacional."
}, {
    codeOACI: "MMUN",
    name: "Cancún, Cancún Internacional."
}, {
    codeOACI: "MMCB",
    name: "Cuernavaca, Gen. Mariano Matamoros"
}, {
    codeOACI: "MMCE",
    name: "Cd. del Carmen, Ciudad del Cramen Internacional."
}, {
    codeOACI: "MMCS",
    name: "Cd. Juárez, Abraham González Internacional"
}, {
    codeOACI: "MMCV",
    name: "Cd. Victoria, Gen. Pedro J. Méndez."
}, {
    codeOACI: "MMIA",
    name: "Colima, Lic. Miguel de la Madrid."
}, {
    codeOACI: "MMCZ",
    name: "Cozumel, Cozumel Internacional."
},  {
    codeOACI: "MMCL",
    name: "Culiacán, Federal de Culiacán / Internacional de Bachigualato."
}, {
    codeOACI: "MMCM",
    name: "Chetumal, Chetumal Internacional."
}, {
    codeOACI: "MMCT",
    name: "Chichen-Itzá, Chichen-Itzá Internacional."
}, {
    codeOACI: "MMCU",
    name: "Chihuahua, Gen. Roberto Fierro Villalobos Internacional."
}, {
    codeOACI: "MMDO",
    name: "Durango, Guadalupe Victoria Internacional."
}, {
    codeOACI: "MMES",
    name: "Ensenada, Gen. Alberto Salinas"
}, {
    codeOACI: "MMGL",
    name: "Guadalajara, Miguel Hidalgo y Costilla Internacional."
}, {
    codeOACI: "MMGM",
    name: "Guaymas, Gen. Jose Maria Yanez Internacional."
}, {
    codeOACI: "MMHO",
    name: "Hermosillo, Gen. Ignacio Pesqueira García Internacional."
}, {
    codeOACI: "MMZH",
    name: "Ixtapa-Zihuatanejo, Ixtapa-Zihuatanejo Internacional."
}, {
    codeOACI: "MMLP",
    name: "La Paz, Manuel Márquez de León Internacional."
}, {
    codeOACI: "MMLO",
    name: "León-Bajío-Guanajuato, Bajío Internacional."
}, {
    codeOACI: "MMLT",
    name: "Loreto, Loreto Internacional."
}, {
    codeOACI: "MMLM",
    name: "Lso Mochis, Federal del Valle del Fuerte Internacional."
}, {
    codeOACI: "MMZO",
    name: "Manzanillo, Playa de Oro Internacional."
}, {
    codeOACI: "MMMA",
    name: "Matamoros, Gen. Servando Canales Internacional."
}, {
    codeOACI: "MMMZ",
    name: "Mazatlán, Gen. Rafael Buelna."
}, {
    codeOACI: "MMMD",
    name: "Mérida, Manuel Crescencio Rejón Internacional."
}, {
    codeOACI: "MMXL",
    name: "Mexicali, Gen. Rodolfo Sánchez Taboada Internacional."
}, {
    codeOACI: "MMMX",
    name: "CDMX, Benito Juárez Internacional."
}, {
    codeOACI: "MMMT",
    name: "Minatitlán, Minatitlán Internacional."
}, {
    codeOACI: "MMAN",
    name: "Del Norte Mty., Del Norte Internacional."
}, {
    codeOACI: "MMMY",
    name: "Monterrey, Gen. Mariano Escobedo Internacional."
}, {
    codeOACI: "MMMM",
    name: "Morelia, Francisco Mújica Internacional."
}, {
    codeOACI: "MMNG",
    name: "Nogales, Nogales Internacional."
}, {
    codeOACI: "MMNL",
    name: "Nuevo Laredo, Quetzalcoatl Internacional."
}, {
    codeOACI: "MMOX",
    name: "Oaxaca, Xoxocotlán Internacional."
}, {
    codeOACI: "MMPG",
    name: "Piedras Negras, Piedras Negras internacional."
}, {
    codeOACI: "MMPA",
    name: "Poza Rica, El Tajín Nacional."
}, {
    codeOACI: "MMPB",
    name: "Puebla, Hermanos Serdán Internacional."
}, {
    codeOACI: "MMPS",
    name: "Puerto Escondido, Puerto Escondido Internacional."
}, {
    codeOACI: "MMPR",
    name: "Puerto Vallarta, Lic. Gustavo Díaz Ordaz Internacional."
}, {
    codeOACI: "MMQT",
    name: "Querétaro, Querétaro Intercontinental."
}, {
    codeOACI: "MMRX",
    name: "Reynosa, Gen. Lucio Blanco Internacional."
}, {
    codeOACI: "MMIO",
    name: "Saltillo, Plan de Guadalupe Internacional."
}, {
    codeOACI: "MMSC",
    name: "San Cristobal de las Cazas."
}, {
    codeOACI: "MMSF",
    name: "San Felipe, San Felipe Internacional."
}, {
    codeOACI: "MMSD",
    name: "San José del Cabo, Los Cabos Internacional."
}, {
    codeOACI: "MMSP",
    name: "San Luis Potosí, Ponciano Arriaga Internacional."
}, {
    codeOACI: "MMTM",
    name: "Tampico, Gen. Francisco Javier Mina Internaiconal."
}, {
    codeOACI: "MMTP",
    name: "Chiapas, Tapachula Internacional."
}, {
    codeOACI: "MMEP",
    name: "Tepic, Amado Nervo Internacional."
}, {
    codeOACI: "MMTB",
    name: "Terán, Ángel Albino Corzo Internacional."
}, {
    codeOACI: "MMTJ",
    name: "Tijuana, Gen. Abelardo L. Rodríguez Internacional."
}, {
    codeOACI: "MMTO",
    name: "Toluca, Lic. Adolfo López Mateos Internacional."
}, {
    codeOACI: "MMTC",
    name: "Torreón, Torreón Francisco Sarabia Internacional."
}, {
    codeOACI: "MMTG",
    name: "Tuxtla Gutiérrez, Tuxtla Gutiérrez Internacional."
}, {
    codeOACI: "MMPN",
    name: "Uruapan, Gen. y Lic. Ignacio López Rayón Internacional."
}, {
    codeOACI: "MMVR",
    name: "Veracruz, Gen. Heriberto Jara Internacional."
}, {
    codeOACI: "MMVA",
    name: "Villahermosa, Carlos Rovirosa Pérez Internacional."
}, {
    codeOACI: "MMZC",
    name: "Zacatecas, Gen. Leobardo C. Ruiz"
}
]

Airports.create(airports)
.then(()=> console.log("Creación de aeropuertos exitosa"))
.then(() => mongoose.connection.close())
.catch((e)=> console.log(e))