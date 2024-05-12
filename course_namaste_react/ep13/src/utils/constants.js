export const URL = "";
export const URL2 = "";
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

// HERE you cannot default export both the strings separately
// export default URL
// export default URL2 - this will throw error
// to do this use named export, ie write export keyword before the const keyword
// this way we can export multiple exports from the same file
