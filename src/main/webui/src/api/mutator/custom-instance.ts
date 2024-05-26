import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// by default axios add this [] on list queries
// have a look here about indexes nullity https://github.com/anymaniax/orval/discussions/163#discussioncomment-6605558
export const AXIOS_INSTANCE: AxiosInstance = Axios.create({
  baseURL: '',
  paramsSerializer: {
    indexes: null
  }
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T | AxiosResponse<any, any>> => {
  return AXIOS_INSTANCE(config).then(({ data }) => data);
};

export default customInstance;