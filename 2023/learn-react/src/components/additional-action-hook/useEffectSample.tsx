/**
 * useEffect : 부가 작용을 실행하기 위해 사용하는 훅
 *
 * useEffect()를 사용하면 props나 state가 업데이트되고, 다시 그리기가 완료된 후 처리가 실행
 * 의존 배열을 지정해서 특정 데이터가 변화할 때만 처리하도록 설정 할 수 있음
 */
import { useState, useEffect } from "react";

// 타이머가 호출되는 주기를 1초로 함
const UPDATE_CYCLE = 1000;

// 로컬 스토리지에서 사용하는 키
const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  KR = "ko-KR",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.KR:
      return Locale.KR;
    default:
      return Locale.US;
  }
};

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // 타이머를 설정하기 위한 부가 작용
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    // return을 하게 되면 언마운트 시에 실행
    // 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제
    return () => {
      clearInterval(timer);
    };
    // 초기 그리기 시에만 실행
  }, []);

  // 로컬 스토리지에서 값을 로딩
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  // 로케일이 바뀌었을 때 로컬 스토리지에 값을 저장
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
    // 의존 배열에 로케일을 전달하고 로케일이 변할 때마다 실행
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">현재 시각</span>
        <span>: {timestamp.toLocaleDateString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  );
};

export default Clock;
