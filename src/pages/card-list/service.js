import request from '@/utils/request';

export async function queryFakeList(params) {
  return request(`/api/card-list/fake_list`, {
    params,
  });
}
