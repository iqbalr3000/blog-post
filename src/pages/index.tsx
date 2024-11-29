import { useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumb, theme, Input, Button, message } from "antd";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const handleSubmit = async () => {
    if (!name || !token) {
      message.error("Both fields are required.");
      return;
    }

    localStorage.setItem("authToken", token);
    message.success(`Credentials are valid. Welcome, ${name}!`);
    router.push("/post");
  };

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Blog Post</Breadcrumb.Item>
        <Breadcrumb.Item>Auth</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="flex w-full flex-col items-center justify-center"
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      >
        <div className="mb-4 flex flex-col items-center justify-center">
          <h3 className="mb-3 text-3xl font-semibold text-[#333]">
            Authentication Required
          </h3>
          <p className="mb-10 max-w-[600px] text-center text-lg font-normal text-[#999]">
            Please enter your name and token to access the posts page. If you
            don&apos;t have a token, contact the administrator for assistance.
          </p>
        </div>

        <div className="w-full lg:w-[600px]">
          <div className="mb-4 w-full">
            <label className="mb-2 block">Name:</label>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4 w-full">
            <label className="mb-2 block">Go Rest Token:</label>
            <Input.Password
              name="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
