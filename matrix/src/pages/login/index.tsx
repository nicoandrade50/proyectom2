import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "matrix@fine.dev", password: "matrix2024" },
      }}
    />
  );
};
