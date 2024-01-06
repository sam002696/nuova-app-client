class UrlBuilderHelper {
  nuovaServerApi(path) {
    return `http://localhost:5500/${path}`;
  }
}

export const UrlBuilder = new UrlBuilderHelper();
