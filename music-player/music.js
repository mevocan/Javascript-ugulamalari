class Music {
    constructor(title, singer, img, file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.title+" - "+ this.singer;
    }
}

const musicList=[
    new Music("Mikrofon Bizness","Cash Flow","cashflow.jpg","mikrofonbisness.mp3"),
    new Music("31 Ekran","Hidra","31ekran.jpg","31ekran.mp3"),
    new Music("Nolur Evet De","Hayki","nolurevet.jpg","nolurevetde.mp3"),
    new Music("Mesela Yani","Kayra","meselayani.jpg","meselayani.mp3"),

]