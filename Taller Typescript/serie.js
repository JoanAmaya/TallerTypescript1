// serie.ts
// No compilar el ts, hay un error con el metodo required y se debe modificar a mano
export class Serie {
  constructor(id, name, channel, seasons, description, platform, image) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.platform = platform;
      this.image = image;
  }
}