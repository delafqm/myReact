import request from '@/utils/request';

export async function queryFakeList(params) {
  return request(`/api/search-list-articles/fake_list`, {
    params,
  });
}
