import { useRouter } from "next/navigation";
import { useCreatePost } from "@/hooks/usePosts";
import { Button, Form, Input, Breadcrumb, theme } from "antd";
import withAuth from "@/hooks/withAuth";

const CreatePost = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const router = useRouter();
  const [form] = Form.useForm();
  const { mutate } = useCreatePost();

  const onFinish = (values: {
    user_id: number;
    title: string;
    body: string;
  }) => {
    const user_id = values.user_id;
    const payload = {
      title: values.title,
      body: values.body
    };

    mutate(
      { user_id: Number(user_id), payload: payload },
      {
        onSuccess: () => {
          router.push("/post");
        }
      }
    );
  };

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Blog Post</Breadcrumb.Item>
        <Breadcrumb.Item>Post</Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
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
        <div className="flex w-full flex-col items-center justify-center">
          <h3 className="mb-3 text-3xl font-semibold text-[#333]">
            Craft Your Next Masterpiece
          </h3>
          <p className="mb-10 max-w-[600px] text-center text-lg font-normal text-[#999]">
            Every great story begins with a single word. Start creating your
            blog post by filling in the details below. Whether you&apos;re
            sharing ideas, insights, or inspiration, this is your canvas—let
            your creativity shine!
          </p>

          <Form
            className="w-full lg:w-[600px]"
            form={form}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Author"
              name="user_id"
              rules={[{ required: true, message: "Please input the author!" }]}
              extra="Example: 7551193"
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Body"
              name="body"
              rules={[{ required: true, message: "Please input the body!" }]}
            >
              <Input.TextArea autoSize={{ minRows: 6, maxRows: 10 }} />
            </Form.Item>

            <Form.Item>
              <div className="flex space-x-3">
                <Button type="default" onClick={() => router.push("/post")}>
                  Back
                </Button>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(CreatePost);
