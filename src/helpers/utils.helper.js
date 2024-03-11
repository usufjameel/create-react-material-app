export const getCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

export const cleanObjectWithParams = (object, params) => {
  let cleanObject = {};
  const availableParameters = params.filter(
    (key) =>
      object[key] !== undefined && object[key] !== "" && object[key] !== null
  );
  availableParameters.forEach((key) => {
    cleanObject[key] = object[key];
  });
  return cleanObject;
};

export const getExtension = (filename) => {
  return filename.split(".").pop();
};

// Define custom method
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
  },
});

export const sendMessageToMobile = (message) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(message));
};

//scroll to top
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
