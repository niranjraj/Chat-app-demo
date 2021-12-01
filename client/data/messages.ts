const messages = [
  { id: "2123s", content: "Hey there", user: "james" },
  { id: "2103s", content: "Hey there james", user: "gary" },
  { id: "2101s", content: "how is  it going", user: "gary" },
  {
    id: "1103s",
    content: "not bad gary i heard you broke with tess,really sad to hear that",
    user: "james",
  },
  {
    id: "1203s",
    content: "see you soon",
    user: "james",
  },
];
export default messages;

const user = {
  _id: "1231eda",
  username: "niranj",
  email: "niranj@gmail.com",
  password: "1asdhfy318f",
  profilePic: "https://dasjf.com",
  logs: {
    lastLogin: "5-11-2021",
  },
  online: "true",
  contacts: ["1231eda", "123e21da"],
};
const conversation = {
  _id: "12321eda",
  messages: [
    { sender: "user1", message: "Hello", attachment: "", timestamp: "time" },
    {
      sender: "user2",
      message: "well hello to you too",
      attachment: "",
      timestamp: "time",
    },
  ],
};
