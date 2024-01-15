const clients = require("./clients.json")

function filterApartamentWithoutComplement(clients){
    return clients.filter((client) => {
        return (client.endereco.apartamento && !client.endereco.hasOwnProperty("complemento"))
    });
};

const filtered = filterApartamentWithoutComplement(clients);

console.log(filtered)