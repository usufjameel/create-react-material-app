let logger = require("./logger").logger;

export const TOKEN_KEY = "token";
export const REFRESH_TOKEN_KEY = "refreshToken";
export const CURRENT_USER_KEY = "currentUser";
export const CURRENT_USER_EMAIL = "currentUserEmail";
export const CURRENT_COMPANY_EMAIL = "currentCompanyEmail";
export const CURRENT_COMPANY_NAME = "currentCompanyName";
export const DEVICE_OS = "deviceOs";

export default class SessionDetails {
  static saveAccessToken(token) {
    logger("Save token: " + token);
    localStorage.setItem(TOKEN_KEY, token);
  }

  static saveRefreshToken(token) {
    logger("Save token: " + token);
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  static saveCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  }

  static getCurrentUserWithoutFamily() {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    const fields = ["parents", "children", "siblings", "spouses"];
    fields.forEach((field) => {
      user[field] = [];
    });
    return user;
  }

  static getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  static saveCurrentUserEmail(email) {
    localStorage.setItem(CURRENT_USER_EMAIL, email);
  }

  static getCurrentUserEmail() {
    return localStorage.getItem(CURRENT_USER_EMAIL);
  }

  static saveCurrentCompanyEmail(email) {
    localStorage.setItem(CURRENT_COMPANY_EMAIL, email);
  }

  static getCurrentCompanyEmail() {
    return localStorage.getItem(CURRENT_COMPANY_EMAIL);
  }

  static saveCurrentCompanyName(email) {
    localStorage.setItem(CURRENT_COMPANY_NAME, email);
  }

  static saveDeviceOS(os) {
    localStorage.setItem(DEVICE_OS, os);
  }

  static isIPhoneOS() {
    return localStorage.getItem(DEVICE_OS) === "iPhone";
  }

  static getCurrentCompanyName() {
    return localStorage.getItem(CURRENT_COMPANY_NAME);
  }

  static isUserLoggedIn() {
    return !!this.getAccessToken();
  }

  static clearStoredData() {
    this.saveCurrentUser(null);
    localStorage.clear();
  }
}
