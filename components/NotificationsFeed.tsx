import useCurrentUser from "@/hooks/useCurrentUser";
import useNotifications from "@/hooks/useNotifications";
import React, { useEffect } from "react";
import { BsTwitter } from "react-icons/bs";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutataCurrentUser } = useCurrentUser();

  const { data: fetchedNotification = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutataCurrentUser();
  }, []);

  if (fetchedNotification.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl ">
        No notifications
      </div>
    );
  }
  return <div className="flex flex-col">
    {fetchedNotification.map((noti: Record<string, any>) => (
        <div key={noti.id} className="flex flex-row items-center p-6 gap-6 border-b-[1px] border-neutral-800">
            <BsTwitter color="white" size={32}/>
            <p className="text-white">
                {noti.body}
            </p>
        </div>
    ))}
  </div>;
};

export default NotificationsFeed;
