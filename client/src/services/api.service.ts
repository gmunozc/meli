import Axios, {AxiosError, AxiosInstance, AxiosPromise, CancelTokenSource, CancelTokenStatic} from "axios";


class ApiService {
  private instance: AxiosInstance;
  private CancelToken: CancelTokenStatic;
  private source: CancelTokenSource;

  constructor() {
    this.instance = Axios.create();
    this.CancelToken = Axios.CancelToken;
  }

   public errorHandler(err: AxiosError): void {
    console.log('err', err);
    // if (err.response) {
    //   if ([500].includes(err.response.status)) {
    //     Raven.captureException(JSON.stringify(err.response));
    //     swal('Ups ha ocurrido un error', err.response.data.message ? err.response.data.message : err.response.data.errmsg, 'error');
    //   } else {
    //     swal('Ups ha ocurrido un error', err.response.data.message ? err.response.data.message : err.response.data.errmsg, 'error');
    //   }
    // } else if (err.request) {
    //   Raven.captureException(JSON.stringify(err.request));
    // } else {
    //   Raven.captureException(JSON.stringify(err));
    // }
  }

  public getSource(): CancelTokenSource {
    this.source = this.CancelToken.source();
    return this.source;
  }

  public searchItems(text: string): AxiosPromise {
    return this.instance.get(
      `/api/items?query=${text}`
      , {
        cancelToken: this.source.token
      });
  }

  public getItem(id: string): AxiosPromise {
    return this.instance.get(
      `/api/items/${id}`
      , {
        cancelToken: this.source.token
      });
  }
}

export default new ApiService();