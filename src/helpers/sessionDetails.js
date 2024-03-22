const persistRoot = "persist:root";

export default class SessionDetails {
  static getCurrentUser() {
    return JSON.parse(localStorage.getItem(""));
  }

  static getAccessToken() {
    const user = JSON.parse(localStorage.getItem(persistRoot)).user;
    return JSON.parse(user).accessToken;
  }

  static getRefreshToken() {
    const user = JSON.parse(localStorage.getItem(persistRoot)).user;
    return JSON.parse(user).refreshToken;
  }

  static clearStoredData() {
    localStorage.clear();
  }
}
