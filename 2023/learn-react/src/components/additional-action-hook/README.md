# 리액트 18에서의 useEffect/useLayoutEffect의 작동

- useEffect와 useLayoutEffect의 두번 째 인수에 빈 배열을 전달하면 초기 화면을 그리는 시점에서만 실행
- 리액트 18의 `<React.StringMode>` 아래의 컴포넌트 안에서 선언된 useEffect, useLayoutEffect는 안전하지 않은 부가 작용을 발견하기 위해 컴포넌트는 화면을 2번 그림.
- 즉, 마운트 시에 2번 호출, 클린업 함수도 1번 호출
- 1번만 실행되도록 보장 할 때는 useRef 등을 사용해 앞에서 실행 유무를 저장해서 대처할 수 있음

  ```js
  const mounted = React.useRef(false)
  useEffect(() => {
    if(mounted.current) {
    // 이미 실행 완료인 경우에는 아무것도 하지 않는다.
      return
    }
    mounted.current = true;

    const data = fetch(...);
  }, []);
  ```

- 프로덕션 환경이나 `<React.StringMode>`로 감싸지 않은 컴포넌트는 초기 화면을 그리는 시점에서만 실행
  - 개발 단계에서 나오는 현상이므로 저렇게 대처해야할지는 판단이 필요
