
window.onload = function(){
var names = ['Andrew Ray',
            'Jeffrey Smith',
            'Evelyn Perez',
            'Larry Walsh',
            'Katherine Black',
            'Austin Rogers',
            'Luiza Carvalho',
            'Angelina Weastell',
            'Simone Montanari',
            'Esperanza Moreno',
            'Kate Gagnon',
            'Harm Sanders',
            'Alicia Díaz',
            'Santiago Rodrigues',
            'Zakar Szabolcs',
            'Amadeusz Janik',
            'Dominik Maier',
            'Harrison Bell',
            'Shreyas Gaonkar',
            'Justin Evrard',
            'Ioana Mihăescu',
            'Marcelo Fernández',
            'Cohen Jones'
];


//Generate Random Number

function winner(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(winner(1, 60));

//Apply Number to the HTML Layout

document.querySelector('.winner-name').innerHTML = names[winner(0, names.length)];

}//end onload