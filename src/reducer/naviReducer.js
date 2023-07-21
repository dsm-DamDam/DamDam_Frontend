// 기본 값
const initialState = {
  tap: "home",
};

// 엑션 타입
export const HOME = "HOME";
export const SHOP = "SHOP";
export const PROFILE = "PROFILE";
export const DIARY = "DIARY";
export const CALENDER = "CALENDER";

// 엑션 함수
export const tapToHome = () => ({
  type: HOME,
});
export const tapToShop = () => ({
  type: SHOP,
});
export const tapToProfile = () => ({
  type: PROFILE,
});
export const tapToDiary = () => ({
  type: DIARY,
});
export const tapToCalender = () => ({
  type: CALENDER,
});

// 리듀서
export default function naviReducer(state = initialState, action) {
  switch (action.type) {
    case HOME:
      return { tap: "home" };
    case SHOP:
      return { tap: "shop" };
    case PROFILE:
      return { tap: "profile" };
    case DIARY:
      return { tap: "diary" };
    case CALENDER:
      return { tap: "calender" };
    default:
      return state;
  }
}
