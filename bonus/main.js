/* Visualizzare in h1 il titolo dell'immagine sottostante, al click di un pulsante cambiano titolo e immagine.
   Titoli e immagini si trovano su due array in data. Raggiunta la fine degli array si deve ricominciare dai primi elementi degli array */

let app = new Vue({
    el: '#root',
    data: {
        titoloImmagine: ['Drago con donna elfo alata', 'Drago Ala blu', 'Drago Verde'],
        indice: 0,
        srcImage: ['https://lh3.googleusercontent.com/proxy/-fS-ioXefF4czZj_Xf0sTzIxQ9dCU9NP2e6bFlfxPm5DaCE1QMQsM67zJZ41ArrJNJfiSYiQrWzxw9c1pdvG1TVHJ0vvo1Gb7uxi-PeR',
        'https://sites.google.com/site/elmassariol/_/rsrc/1329933253897/miti-e-simboli/2--nicola-pessella--il-drago-e-il-suo-simbolismo-iconografico/Dragone.jpg',
        'https://www.friulioggi.it/wp-content/uploads/2020/04/drago-verde.jpg'
        ]
    },
    methods: {
        nextIndex: function(){
            this.indice = (this.indice + 1) % this.srcImage.length;
        }
    }

});