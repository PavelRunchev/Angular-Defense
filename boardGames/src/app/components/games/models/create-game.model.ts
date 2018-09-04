export class CreateGameModel {
    constructor(
        public title: string,
        public publisher: string,
        public description: string,
        public imageUrl: string,
        public date: number,
        public genre: string,
        public platform: string,
        public trailerUrl: string,
        public downloadUrl: string
    ) { }
}