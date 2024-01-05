import { get } from '../utils/http';

export function getFacilities(params) {
  return get(`/app-backend/facilities`, params);
}
