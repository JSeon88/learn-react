/**
 * useLayoutEffect : 부가 작용을 실행하기 위해 사용하는 훅
 *
 * useEffect와 달리 동기적으로 실행
 */
import { useState, useEffect, useLayoutEffect } from "react";

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

    return () => {
      clearInterval(timer);
    };
  }, []);

  // 로컬 스토리지에서 값을 로딩
  // 동기적으로 실행됨으로써 화면 그리기를 지연
  // useEffect를 썼을 때 리로드 할때마다 잠시 US로 표시되는 걸 막을 수 있음.
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
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
