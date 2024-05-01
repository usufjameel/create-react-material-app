export const BASE_URL = process.env.REACT_APP_BASE_URL;
export class Endpoint {
  // MARK: USER
  static REGISTER_USER = "requestApplication";
  static LOGIN = "login";
  static GET_USER = "user/details";
  static UPDATE_USER = "user/update";
  static REFRESH_TOKEN = "refreshToken";
}

// ------------------------------ Status codes ---------------------------

export class Status {
  static API_SUCCESS = 200;
  static API_CREATED = 201;
  static API_ACCEPTED = 202;
  static API_NO_CONTENT = 204;
  static API_BAD_REQUEST = 400;
  static API_UNAUTHORIZED = 401;
  static API_FORBIDDEN = 403;
  static API_NOT_FOUND = 404;
  static API_METHOD_NOT_ALLOWED = 405;
  static API_CONFLICT = 409;
  static API_INTERNAL_SERVER_ERROR = 500;
  static API_SESSION_EXPIRED = 440;
}
