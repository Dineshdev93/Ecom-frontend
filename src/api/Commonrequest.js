import axios from "axios";

export const commonrequest = async (methods, url, body, header, auth) => {
  // asign parameters values with axios default keys
  let config = {
    method: methods,
    url: url,
    data: body,
    headers: {},
  };

  //   For use auth like admin or user , assign token in headers
  let admintoken = localStorage.getItem("admin-token");
  let usertoken = localStorage.getItem("user-token");
  // console.log(usertoken);
  
  if (auth === "admin") {
    config.headers.Authorization = admintoken;
  } else {
    config.headers.Authorization = usertoken;
  }

  //   set headres conditionally
  if (header) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};
