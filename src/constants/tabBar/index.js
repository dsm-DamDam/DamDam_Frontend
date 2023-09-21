import _Home from "../../assets/icons/_home";
import _Calender from "../../assets/icons/_calender";
import _Diary from "../../assets/icons/_diary";
import _Shop from "../../assets/icons/_shop";
import _Profile from "../../assets/icons/_profile";

export const tabbar_info_list = [
  {
    name: "캘린더",
    id: "Calender",
    icon: (isPress) => <_Calender isPress={isPress} />,
  },
  {
    name: "금연일기",
    id: "Diary",
    icon: (isPress) => <_Diary isPress={isPress} />,
  },
  {
    name: "홈",
    id: "Home",
    icon: (isPress) => <_Home isPress={isPress} />,
  },
  {
    name: "스토어",
    id: "Shop",
    icon: (isPress) => <_Shop isPress={isPress} />,
  },
  {
    name: "프로필",
    id: "Profile",
    icon: (isPress) => <_Profile isPress={isPress} />,
  },
];
