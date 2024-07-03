type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions {
  method: HTTPMethod;
  headers?: HeadersInit;
  body?: any;
}

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
}

async function fetchService<T>(
  url: string,
  options: FetchOptions
): Promise<FetchResponse<T>> {
  const { method, headers, body } = options;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, config);
    const data: T = await response.json();

    if (!response.ok) {
      // Attempt to extract error message from the response data
      const errorMessage = (data as any).message || 'Something went wrong';
      return { data: null, error: errorMessage };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: (error as Error).message || 'Network error' };
  }
}

export default fetchService;
