// METODO QUE RETORNA UM NOVO ARRAY, só que não exatamente igual ao map. Ele retorna true ou falso dependendo do elemento que foi passado 

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(palavra => {
    return word.lenght < 6;
})