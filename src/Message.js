import React, { forwardRef } from "react";
import { Card, CardContent, Typography, InputLabel } from "@material-ui/core";

import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref}>
      <div className={`message ${isUser && `message__user`}`}>
        <InputLabel className="label__name">
          {!isUser && message.username}
        </InputLabel>
        <Card className={!isUser ? `card__guess` : `card__user`}>
          <CardContent>
            <Typography>{message.text}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default Message;
