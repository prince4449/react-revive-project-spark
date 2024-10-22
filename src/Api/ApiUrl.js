const BASE_URL = "https://nexus.vicancode.com";

export const URL_CONSTANTS = {
  getAllCategory: `${BASE_URL}/api/v1/business_cards/categories`,
  getAllSubcategory:(id)=> `${BASE_URL}/api/v1/business_cards/get_sub_categories?category_ids=${id}`,
  getListForOneCategory: (id, sub, city) =>
    `${BASE_URL}/api/v1/business_cards/by_category_subcategory?category_ids=${id}&subcategory_ids=${sub}&district_ids=${city}`,
  getCategoryDetails: (id) => `${BASE_URL}/api/v1/business_cards/${id}`,
  getDistt: (name) =>
    `${BASE_URL}/api/v1/districts?page&per_page=1000&search=${name}`,
  getListCategory: (id) =>
    `${BASE_URL}/api/v1/business_cards/by_category_subcategory?category_ids=${id}`,
};
