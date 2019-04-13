import request from '@/utils/request';

export async function queryFakeList(params) {
  return request(`/api/search-list-applications/fake_list`, {
    params,
  });
}
