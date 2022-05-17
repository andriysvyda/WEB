class Album{
    constructor(id, author, title, url, music, date, listening) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.url = url;
        this.music = music;
        this.date = date;
        this.listening = listening;
    }
}

class StrAlbum extends Album {
    toString() {
        return `${super.toString()}{
            id:${this.id},
            виконацевь:${this.author},
            назва:${this.title},
            URL-обгортки:${this.url},
            список пісень:${this.music},
            рік випуску:${this.date},
            кількість прослуховувань:${this.listening},
        }`;
    }
}

class AlbumCollection{
    constructor(items = []){
        this.items = items
    }

    update(){

    }
}

class AlbumCollectionToHTML extends AlbumCollection{
    constructor(items){
        super(items)
        document.addEventListener("delete", event => {
            this.delete(event.detail.id);
        });
    }

    albumToHtml(album){
        return `   
            <h2> ${album.title} </h2>
            <img src="${album.url}" alt="${album.name}">
                <p>Автор: ${album.author}</p>
                <p>${album.music}</p>
                <p>Опубліковано: ${album.date} </p>
                <p> ${album.listening} lkes </p>
                <input type="hidden" id="photo-id" value="${album.id}">`
                
    }
}

let song_1 = new Album(
    1,
    "автор`",
    "назва",
    "url",
    "пісня",
    "рік",
    6
)

let song_2 = new Album(
    2,
    "автор",
    "назва",
    "url",
    "пісня",
    "рік",
    3

)

let collection = new AlbumCollection([song_1, song_2])