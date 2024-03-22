import axios from "axios";
import { BASE_URL, Endpoint, Status } from "./ApiConfig";
import SessionDetails from "../helpers/sessionDetails";
import { logout } from "../reducers/user.slice";

class ApiRequest {
  static getAxiosInstance(dispatch) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
    });

    // Request interceptor for API calls
    axiosInstance.interceptors.request.use((config) => {
      config.headers = {
        Authorization: `Bearer ${SessionDetails.getAccessToken()}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      return config;
    });

    // Response interceptor for API calls
    axiosInstance.interceptors.response.use(
      async (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (
          (error.response.status === Status.API_FORBIDDEN ||
            error.response.status === Status.API_UNAUTHORIZED ||
            error.response.status === Status.API_SESSION_EXPIRED) &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          const access_token = await ApiRequest.refreshAccessToken(dispatch);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + access_token;
          return axiosInstance(originalRequest);
        } else {
          //logout
          dispatch(logout());
          return Promise.reject(error);
        }
      }
    );

    return axiosInstance;
  }

  static getAxiosInstanceMultipart(dispatch) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
    });

    // Request interceptor for API calls
    axiosInstance.interceptors.request.use((config) => {
      config.headers = {
        Authorization: `Bearer ${SessionDetails.getAccessToken()}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
      return config;
    });

    // Response interceptor for API calls
    axiosInstance.interceptors.response.use(
      async (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (
          (error.response.status === Status.API_FORBIDDEN ||
            error.response.status === Status.API_UNAUTHORIZED ||
            error.response.status === Status.API_SESSION_EXPIRED) &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          const access_token = await ApiRequest.refreshAccessToken(dispatch);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + access_token;
          return axiosInstance(originalRequest);
        } else {
          //logout
          dispatch(logout());
          return Promise.reject(error);
        }
      }
    );

    return axiosInstance;
  }

  /**
   *
   * @param {*} endPoint
   * @param {*} payload
   * @param {*} dispatch
   * @param {*} config : {headers : headers, params : params}
   * @returns
   */
  static put(endPoint, payload, dispatch, config) {
    return new Promise((resolve, reject) => {
      this.getAxiosInstance(dispatch)
        .put(endPoint, payload, config)
        .then((res) => resolve(res))
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  /**
   *
   * @param {*} endPoint
   * @param {*} payload
   * @param {*} dispatch
   * @param {*} config : {headers : headers, params : params}
   * @returns
   */
  static post(endPoint, payload, dispatch, config) {
    return new Promise((resolve, reject) => {
      this.getAxiosInstance(dispatch)
        .post(endPoint, payload, config)
        .then((res) => resolve(res))
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  /**
   *
   * @param {*} endPoint
   * @param {*} dispatch
   * @param {*} config : {headers : headers, params : params}
   * @returns
   */
  static get(endPoint, dispatch, config) {
    return new Promise((resolve, reject) => {
      this.getAxiosInstance(dispatch)
        .get(endPoint, config)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   *
   * @param {*} endPoint
   * @param {*} dispatch
   * @param {*} config : {headers : headers, params : params}
   * @returns
   */
  static delete(endPoint, dispatch, config) {
    return new Promise((resolve, reject) => {
      this.getAxiosInstance(dispatch)
        .delete(endPoint, config)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  }

  static refreshAccessToken(dispatch) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
    });

    // Request interceptor for API calls
    axiosInstance.interceptors.request.use((config) => {
      config.headers = {
        Authorization: `Bearer ${SessionDetails.getRefreshToken()}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      config._retry = true;
      return config;
    });

    return new Promise((resolve, reject) => {
      axiosInstance
        .post(Endpoint.REFRESH_TOKEN)
        .then((response) => {
          if (response.data.status === Status.API_SUCCESS) {
            SessionDetails.saveAccessToken(response.data.data.accessToken);
            SessionDetails.saveRefreshToken(response.data.data.refreshToken);
            SessionDetails.saveCurrentUser(response.data.data);
            resolve(response.data.data.accessToken);
          } else {
            reject();
          }
        })
        .catch((error) => {
          if (
            error.response.status === Status.API_FORBIDDEN ||
            error.response.status === Status.API_UNAUTHORIZED ||
            error.response.status === Status.API_SESSION_EXPIRED
          ) {
            //logout
            dispatch(logout());
            reject();
          }
        });
    });
  }

  /**
   *
   * @param {*} endPoint
   * @param {*} formData
   * @param {*} dispatch
   * @param {*} config : {headers : headers, params : params}
   * @returns
   */
  static uploadFile = (endPoint, formData, dispatch, config) => {
    // create a new FormData object and append the file to it
    return new Promise((resolve, reject) => {
      this.getAxiosInstanceMultipart(dispatch)
        .post(endPoint, formData, config)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };
}

export default ApiRequest;
