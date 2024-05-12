import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check if internet is connected or not
  // no input is needed here from user

  // logic - use a eventListener - browsers give this already
  // and we want to add this event listener only once
  // so useEffect

  const [onlineStatus, setOnlineStatus] = useState(true);

  // when i go offline, set online status to false
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
