import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password1: string;
  password2: string;
  extraError?: string;
}
const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  /** 데이터가 유효할 때만 호출되는 함수 */
  const onValid = (data: IForm) => {
    console.log("OnValid", data);
    /** 커스텀 에러 */
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
    // 값 초기화
    setValue("firstName", "");
  };

  /** 데이터가 유효하지 않을 때만 실행되는 함수 */
  const onInValid = () => {
    console.log("OnInValid");
  };

  return (
    <div className="todo-list">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid, onInValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              // 서버에서 유효성 체크가 필요한 경우 여기서 처리 가능. async 함수 이용.
              noNico: (value) => !value.includes("nico") || "no nicos allowed",
              noNick: (value) => !value.includes("nick") || "no nick allowed",
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "write here",
            minLength: {
              value: 10,
              message: "10글자 이상 입력하세요.",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password1", { required: "write here", minLength: 5 })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password2"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};
export default FormExample;
