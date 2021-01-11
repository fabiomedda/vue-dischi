/*
Istruzioni:
Attraverso una chiamata ajax all’ Api di boolean avremo a disposizione 
una decina di dischi musicali.
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: 
pop, rock, metal e jazz.
In base a cosa scegliamo nella select vedremo i corrispondenti cd.
Chiamata: 
https://flynn.boolean.careers/exercises/api/array/music
Layout base:
https://bitbucket.org/booleancareers/ex-dischi-musicali-layout
*/

let root = new Vue ({
    el: '#root',
    data:{
        dischiMusicali: null,
        dischiMusicaliGen: null,

    },
    methods:{
        genere(val){
            console.log(val.target.value);
            let value = val.target.value;
            const genereAll = this.dischiMusicaliGen;
            const genere = this.dischiMusicaliGen.filter(function (val){
                return val.genre == value;
            });
            
            this.dischiMusicali = genere;
            if (value == "All"){
                this.dischiMusicali = genereAll;
            }
        }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
            this.dischiMusicali = response.data.response;
            this.dischiMusicaliGen = response.data.response;
        })
        .catch(error => {
            console.log(error);
        })
    }
});