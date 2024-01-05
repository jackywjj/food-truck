import { post } from '../utils/http';

/**
 * 获取用户
 * pageNum
 * pageSize
 */
export function postQuestion(params) {
  return post('/api/v1/ai/text', params, {}, true);
}
