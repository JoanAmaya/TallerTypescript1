export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description:string;
    platform:string;
    image:string
    constructor(id: number,name: string,channel: string,seasons: number,description:string,platform:string,image:string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.platform = platform;
      this.image = image;
    }
  }