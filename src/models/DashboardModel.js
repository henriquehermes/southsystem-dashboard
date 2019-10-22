export default class DashboardModel {
  constructor(dictionary) {
    this.title = !dictionary ? '' : dictionary.title;
    this.episode_id = !dictionary ? 0 : dictionary.episode_id;
    this.opening_crawl = !dictionary ? '' : dictionary.opening_crawl;
    this.director = !dictionary ? '' : dictionary.director;
    this.producer = !dictionary ? '' : dictionary.producer;
    this.release_date = !dictionary ? '' : dictionary.release_date;
    this.characters = !dictionary ? [] : dictionary.characters;
    this.planets = !dictionary ? [] : dictionary.planets;
    this.starships = !dictionary ? [] : dictionary.starships;
    this.vehicles = !dictionary ? [] : dictionary.vehicles;
    this.species = !dictionary ? [] : dictionary.species;
    this.created = !dictionary ? '' : dictionary.created;
    this.edited = !dictionary ? '' : dictionary.edited;
    this.url = !dictionary ? '' : dictionary.url;
  }
}
