const client = {
    name: "Joao",
    years: 24, 
    email: 'joao@gmail.com',
    tel: ["11 953535350", "11 213212150"], // Array
    balance: 200, 
    makePayment: function (value){
        if (value > this.balance){  // .this is for the actual object
            console.log("insufficient funds")
        } else{
            this.balance -= value;
            console.log(`payment made, new balance: ${this.balance}`)
        } 
    }
};

client.makePayment(100)

