import { get } from '../utils/http';

/**
 * 获取用户
 * pageNum
 * pageSize
 */
export function getPigs(params) {
  return get(`/api/v1/pigs/${params.pig_type}`, params);
}

export function calculateInbreeding(pig_type, pig_code) {
  return get(`/api/v1/pigs/inbreeding/${pig_type}/${pig_code}`);
}

export function getKinship(params) {
  return get(`/api/v1/kinship/${params.pig_type}`, params);
}
