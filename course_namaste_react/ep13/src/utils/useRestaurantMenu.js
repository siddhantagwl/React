import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  // custom HOok -> fetch the data and return restaurrant info

  const [restInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const corsProxy = "https://corsproxy.io/?";
    const api = corsProxy + MENU_API + resId;

    const data = await fetch(api);
    const json = await data.json();
    setResInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
