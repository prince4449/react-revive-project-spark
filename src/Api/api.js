import axiosInstance from "./AxiosApiInstance";

export const Get = async (api) => {
  try {
    const res = await axiosInstance.get(api);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const Post = async (api, params) => {
  try {
    const res = await axiosInstance.post(api, params);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const Patch = async (api, params) => {
  try {
    const res = await axiosInstance.patch(api, params);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const Delete = async (api, payload) => {
  try {
    const res = await axiosInstance.delete(api, {
      data: payload,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const Delete_Multiple = async (api, params) => {
  try {
    const res = await axiosInstance.delete(api, {
      data: params,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const Put = async (api, params) => {
  try {
    const res = await axiosInstance.put(api, params);
    return res.data;
  } catch (error) {
    throw error;
  }
};
