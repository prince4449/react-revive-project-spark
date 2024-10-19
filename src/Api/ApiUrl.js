
const BASE_URL = "https://nexus.vicancode.com";

export const URL_CONSTANTS = {
  getAllCategory: `${BASE_URL}/api/v1/business_cards/categories`,
  getListForOneCategory: (id) =>
    `${BASE_URL}/api/v1/business_cards/by_category_subcategory?subcategory_ids=${id}`,
  getCategoryDetails: (id) => `${BASE_URL}/api/v1/business_cards/${id}`,
};
