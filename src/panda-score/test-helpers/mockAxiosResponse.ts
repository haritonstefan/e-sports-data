import { AxiosResponse } from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';

export function mockAxiosResponse<T>(
  factory: () => T,
): Observable<AxiosResponse<T>> {
  return new BehaviorSubject<AxiosResponse<T>>({
    status: 200,
    statusText: 'Success',
    request: {},
    headers: {},
    config: {},
    data: factory(),
  }).asObservable();
}
