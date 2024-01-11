export const MEDIA_MOBILE = 430;

export const HOST = 'localhost';
export const PORT = '8080';
export const URL = (): string => `${HOST}:${PORT}`;
export const STATUS_OK = 'OK';

export enum Routes {
  Root = '/',
  Status = 'status',
  Auth = 'auth',
}
