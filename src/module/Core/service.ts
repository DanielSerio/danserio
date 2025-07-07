

type BaseOptions = Omit<RequestInit, 'method'>;

export type ApiGetOptions = BaseOptions;
export type ApiDeleteOptions = BaseOptions;
export type ApiBodyOptions<T> = BaseOptions & { body: T; };

export abstract class ApiService {
  protected _BASE_URL: string;
  private _DEFAULT_HEADERS: HeadersInit = {
    'Content-Type': 'application/json'
  };

  constructor(baseUrl: string) {
    this._BASE_URL = baseUrl.replace(/((\/)+(?=(\s+)))$/, '');
  }

  private getFullUrl = (path: string) => {
    if (!path.startsWith('/')) {
      path = `/${path}`;
    }

    return `${this._BASE_URL}${path}`;
  };

  private getBodyIncludedOptions<T>(options: ApiBodyOptions<T>) {
    const { body, ...rest } = options;

    return {
      ...rest,
      body: JSON.stringify(body)
    };
  }

  private bodyRequest = <T>(method: 'POST' | 'PUT' | 'PATCH', path: string, options: ApiBodyOptions<T>) => {
    return fetch(this.getFullUrl(path), {
      method,
      headers: {
        ...this._DEFAULT_HEADERS,
        ...options.headers,
      },
      ...this.getBodyIncludedOptions<T>(options)
    });
  };

  private simpleRequest = (method: 'GET' | 'DELETE', path: string, options?: ApiGetOptions) => {
    return fetch(this.getFullUrl(path), {
      method,
      headers: {
        ...this._DEFAULT_HEADERS,
        ...options?.headers,
      },
      ...options
    });
  };

  public GET(path: string, options?: ApiGetOptions) {
    return this.simpleRequest('GET', path, options);
  }

  public DELETE(path: string, options?: ApiGetOptions) {
    return this.simpleRequest('DELETE', path, options);
  }

  public POST<T>(path: string, options: ApiBodyOptions<T>) {
    return this.bodyRequest('POST', path, options);
  }

  public PUT<T>(path: string, options: ApiBodyOptions<T>) {
    return this.bodyRequest('PUT', path, options);
  }

  public PATCH<T>(path: string, options: ApiBodyOptions<T>) {
    return this.bodyRequest('PATCH', path, options);
  }
}