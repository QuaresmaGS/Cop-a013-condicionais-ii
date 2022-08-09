let cartoes = Number(prompt("Escolha o cartão que deseja solicitar:\n 1-Fácil \n 2-Brack \n 3-Platinum \n 4-Master gold"));

switch(cartoes) {
    case 1:
        console.log("Cartão fácil");
        break
    case 2:
        console.log("Cartão Black");
        break
    case 3:
        console.log("Cartão Platinum");
        break
    case 4:
        console.log("Cartão Master Gold");
        break
    default:
        console.log("escolha umas das opções disponíveis");
};