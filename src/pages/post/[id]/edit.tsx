import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRouter as nextRouter } from "next/router";
import { usePostById, useUpdatePost } from "../../../hooks/usePosts";
import { Button, Form, Input, Breadcrumb, theme } from "antd";
import withAuth from "@/hooks/withAuth";

const EditPost = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const router = useRouter();

  const router2 = nextRouter();
  const { id } = router2.query;

  const { data } = usePostById(Number(id));

  const [form] = Form.useForm();
  const { mutate } = useUpdatePost();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        user_id: data.user_id,
        title: data.title,
        body: data.body
      });
    }
  }, [data, form]);

  const onFinish = (values: { title: string; body: string }) => {
    const payload = {
      title: values.title,
      body: values.body
    };

    mutate(
      { id: Number(id), payload: payload },
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
        <Breadcrumb.Item>Edit</Breadcrumb.Item>
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
            Perfect Your Post
          </h3>
          <p className="mb-10 max-w-[600px] text-center text-lg font-normal text-[#999]">
            Sometimes the best writing comes in the editing. Refine your blog
            post by updating the content below. Small tweaks can make a big
            difference—polish it until it&apos;s ready to share with the world.
          </p>

          <Form
            className="w-full lg:w-[600px]"
            form={form}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item label="Author" name="user_id">
              <Input readOnly />
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

export default withAuth(EditPost);
