import React from "react";

export const NotificationBanner = ({ message, type = "info" }: { message: string; type?: "info" | "warning" }) => (
  <div className={}>
    {message}
  </div>
);
