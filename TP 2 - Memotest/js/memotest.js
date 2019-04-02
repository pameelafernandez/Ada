startGame();
const users = [];
const userData = {
    name: '',
    level: '',
    attempts: 0
}
const levels = [
    {levelName: 'EASY', attempts: 18},
    {levelName: 'MEDIUM', attempts: 12},
    {levelName: 'EXPERT', attempts: 9}
];
var mensajeGanador = $('<p>You Won!!<i class="em em-sunglasses"></i> <i class="em em-i_love_you_hand_sign"></i></p>');
var mensajePerdedor = $('<p>You Lost!!<i class="em em-slightly_frowning_face"></i> <i class="em em--1"></i></p>');
var botonPlayAgain = $('<button class="playAgain">Play Again</button>');

function memotest(level){
    $('#numberAttempts').html('Find all pairs in less than ' + level.attempts + ' attempts');
    $('#level').html('Level: ' + level.levelName);

    var attempts = 0;
    var cards = []; // van a ser las dos cartas que van a estar dadas vueltas por intentos
    var aciertos = 0; //
    var clicks = 0;
        $('.cartaDestapada').on('click', function(){
           
            if (clicks <= (level.attempts *2)){
                clicks++;
                $(this).css('opacity', '1')

                cards.push($(this))
                if (cards.length === 2){
                    attempts++ ;
                   // console.log(cards[0].id)
                    if (cards[0].data('name') === cards[1].data('name')) { // si apreto 2 veces en la misma carta igual lo cuenta como válido, si agrego esto && cards[0].data('id') !== cards[1].data('id') se rompe todo
                
                        cards[0].addClass('gray');
                        cards[1].addClass('gray');
                        aciertos++;
                        cards = [];
                        console.log('entro al segundo if')
                        
                    } else {
                        setTimeout(function(){
                        cards[0].css('opacity', '0');
                        cards[1].css('opacity', '0');
                        cards = [];
                        },300)
                      console.log('entro al else')
                    }
                }
                if(aciertos === 6) {
                    $('.finalGame').removeClass('hidden');
                    $('.message').append(mensajeGanador);
                    saveUser();
                    tabla();
                    userRanking();
                   // $('.boton').append(botonPlayAgain);   
                }
            }
            else {
                $('.finalGame').removeClass('hidden');
                $('.message').append(mensajePerdedor);
               // $('.boton').append(botonPlayAgain);
            }
            $('#attemptsNumber').text('Attempts :' + attempts);
        })
};

function gameBoard(){
    var coverImg = {
        name: 'tapada',
        src: 'img/tapada.jpg'
    };
    
    var images = [
        {src:"img/alce.png", id:"alce1", name:'a'},
        {src:"img/alce.png", id:"alce2", name:'a'},
        {src:"img/nena.jpg", id:"nena1", name:'b'},
        {src:"img/nena.jpg", id:"nena2", name:'b'},
        {src:"img/peces.jpg", id:"peces1", name:'c'},
        {src:"img/peces.jpg", id:"peces2", name:'c'},
        {src:"img/unichancho.jpg", id:"unichancho1", name:'d'},
        {src:"img/unichancho.jpg", id:"unichancho2", name:'d'},
        {src:"img/zapas.jpg", id:"zapas1", name:'e'},
        {src:"img/zapas.jpg", id:"zapas2", name:'e'},
        {src:"img/epelante.jpg", id:"epelante1", name:'f'},
        {src:"img/epelante.jpg", id:"epelante2", name:'f'}
    ];

    var gameCards = $('.gameCards');
    $('#attemptsNumber').text('');

    images.sort(function(a,b){
        return Math.random()-Math.random();
    });

    for (let i = 0; i < images.length; i++){
        var carta = $('<div class="carta"></div>');
        var cartaTapadaDiv = $('<div class="cartaTapada"></div>');
        var cartaDestapadaDiv = $('<div class="cartaDestapada"></div>');
        var cartaTapada = $('<img class="imgTapada" src="'+ coverImg.src + '">');
        var cartaDestapada = $('<img class="imgDestapada" src="' + images[i].src +'">');

        gameCards.append(carta);
        carta.append(cartaTapadaDiv);
        carta.append(cartaDestapadaDiv);
        cartaTapadaDiv.append(cartaTapada);
        cartaDestapadaDiv.append(cartaDestapada);

        cartaDestapadaDiv.data('name', images[i].name);
        cartaDestapada.data('id', images[i].id);
    }
}
function startGame(){
    $('.hello').show();
    $('#ups').hide();
    $('#gameBoard').hide();
    //ranking
};

function tabla(){
    var usersTabla = $('<table class="ranking"></table>');
    var table = $('<tr><th>NAME</th><th>LEVEL</th><th>ATTEMPTS</th></tr>');
    usersTabla.append(table);
    $('#ranking').append(usersTabla);
};
function userRanking() {
    var dataUsers = JSON.parse(localStorage.getItem(users));
    for (let i = 0; i < dataUsers.length ; i++) {
        var dataName = '<td>' + dataUsers[i].name + '</td>';
        var dataLevel = '<td>' + dataUsers[i].level + '</td>'; //no puedo lograr que no me ponga el undefined
        var dataAttempts = '<td>' + dataUsers[i].attempts + '</td>';

        var row = $('<tr></tr>');
        row.append(dataName);
        row.append(dataLevel);
        row.append(dataAttempts);
        $('.ranking').append(row);
    }  
};
function saveUser(){
    var usersJSON = localStorage.getItem(users);
    if (usersJSON == null) {
        usersJSON = []
    }
    else {
        usersJSON = JSON.parse(usersJSON)
    }
    usersJSON.push(userData);
    localStorage.setItem(users, JSON.stringify(usersJSON));
};
$('.playAgain').on('click', function(){
    $('.finalGame').toggleClass('finalGame-show');
    $('carta').remove();
    startGame();
    //faltan cosas
});

    //click en el boton facil se ejecuta esta funcion
    $('#easy').on('click', function(){
        var name = $('#name').val();
        userData.name = name;
        userData.level = levels[0].name;

        if (name != ''){
            $('.hello').hide();
        }
        else {
            $('#ups').show();
            return;
        }

        gameBoard();
        
        $('.gameBoard').show();
        $('#helloUser').html('Hello ' + name);
        memotest(levels[0]);

    });
    //click en el boton medio se ejecuta esta funcion
    $('#medium').on('click', function(){
        var name = $('#name').val();
        userData.name = name;
        userData.level = levels[1].name;

        if (name != ''){
            $('.hello').hide();
        }
        else {
            $('#ups').show();
            return;
        }

        gameBoard();
    
        $('.gameBoard').show();
        $('#helloUser').html('Hello ' + name);
        memotest(levels[1]);

    });
    //click en el boton experto se ejecuta esta funcion
    $('#expert').on('click', function(){
        var name = $('#name').val();
        userData.name = name;
        userData.level = levels[2].name;

        if (name != ''){
            $('.hello').hide();
        }
        else {
            $('#ups').show();
            return;
        }

        gameBoard();
        $('.gameBoard').show();
        $('#helloUser').html('Hello ' + name);
        memotest(levels[2]);
    });


