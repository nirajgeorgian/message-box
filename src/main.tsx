import React, { useState } from "react";
import styled from "styled-components";
import Input from "component/input";
import TextArea from "component/textarea";
import { CrossSVG, MessageSVG } from "component/svg";
import Select from "component/select";
import Button from "component/button";

declare const window: any;
console.log(window.WidgetSettings);
const windowSettings = {
  platform: "web",
  source: "api",
  isDevlopment: true,
  origin: window.location.origin,
  url: "http://localhost:3000",
  message_data: {
    button_text: "Contact DodoDuck",
    form_title: "Duck Contact",
    form_subtitle: "Leave a message and we will get back to you shortly.",
    form_subject_list: ["Where is my order", "I want to cancel my order"],
    form_submission_url: "http://localhost:3000",
  },
};
const {
  message_data: {
    form_title,
    form_subtitle,
    button_text,
    form_subject_list,
    form_submission_url,
  },
} = window.WidgetSettings || windowSettings;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppLauncher = styled(CenteredDiv)`
  width: 60px;
  height: 60px;
  background-color: #4e8cff;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
`;
const AppMessageBox = styled.div`
  width: 320px;
  height: calc(100% - 120px);
  max-height: 590px;
  max-height: 590px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
`;
const CrossIconSVG = styled(CrossSVG)`
  display: inline;
  float: right;
  padding-top: 1rem;
  cursor: pointer;
`;
const MessageHeading = styled.div`
  background: #f8f8f8;
  border-radius: 4px 4px 0px 0px;
  padding: 0 1.5rem;
`;
const AppHeading = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  color: #333333;
`;
const AppHeadingDesc = styled.p`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
  color: #666666;
`;
const MessageBody = styled(CenteredDiv)`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;
const MessageFooter = styled(CenteredDiv)``;

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const onToggle = () => setIsOpen((prevState) => !prevState);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch(form_submission_url, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          subject,
          attachment,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AppLauncher onClick={onToggle}>
        <MessageSVG />
      </AppLauncher>
      {isOpen && (
        <AppMessageBox>
          <MessageHeading>
            <CrossIconSVG onClick={onToggle} />
            <div>
              <AppHeading>{form_title ? form_title : "Contact us"}</AppHeading>
              <AppHeadingDesc>
                {form_subtitle
                  ? form_subtitle
                  : "Leave your message and we will get back to you shortly."}
              </AppHeadingDesc>
            </div>
          </MessageHeading>
          <MessageBody>
            <form onSubmit={onSubmit}>
              <Input
                name="name"
                value={name}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  setName(target.value)
                }
              />
              <Input
                name="email"
                value={email}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(target.value)
                }
              />
              <Select
                options={
                  form_subject_list ? form_subject_list : ["dodo", "duck"]
                }
                value={subject}
                onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) =>
                  setSubject(target.value)
                }
              />
              <TextArea
                name="message"
                value={message}
                onChange={({
                  target,
                }: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(target.value)
                }
              />
              <Input
                type="file"
                name="attachment"
                value={attachment}
                onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                  setAttachment(target.value)
                }
              />
              <Button>{button_text ? button_text : "Submit"}</Button>
            </form>
          </MessageBody>
          <MessageFooter>
            <p>SupportBear</p>
          </MessageFooter>
        </AppMessageBox>
      )}
    </div>
  );
};

export default App;
