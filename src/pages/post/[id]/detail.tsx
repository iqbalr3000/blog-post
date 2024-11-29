import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRouter as nextRouter } from "next/router";
import { usePostById } from "../../../hooks/usePosts";
import { Button, Form, Input, Breadcrumb, theme } from "antd";
import withAuth from "@/hooks/withAuth";

const DetailPost = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const router = useRouter();

  const router2 = nextRouter();
  const { id } = router2.query;

  const { data } = usePostById(Number(id));

  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        user_id: data.user_id,
        title: data.title,
        body: data.body
      });
    }
  }, [data, form]);

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Blog Post</Breadcrumb.Item>
        <Breadcrumb.Item>Post</Breadcrumb.Item>
        <Breadcrumb.Item>Detail</Breadcrumb.Item>
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
            Your Blog Post at a Glance
          </h3>
          <p className="mb-10 max-w-[600px] text-center text-lg font-normal text-[#999]">
            Here&apos;s the full story you&apos;ve crafted. Take a moment to
            review your blog post details before sharing it with your readers.
            If anything needs adjusting, head back to the edit page to refine
            your work.
          </p>

          <Form className="w-full lg:w-[600px]" form={form} layout="vertical">
            <Form.Item label="Author" name="user_id">
              <Input readOnly />
            </Form.Item>

            <Form.Item label="Title" name="title">
              <Input readOnly />
            </Form.Item>

            <Form.Item label="Body" name="body">
              <Input.TextArea autoSize={{ minRows: 6, maxRows: 10 }} readOnly />
            </Form.Item>

            <Form.Item>
              <div className="flex space-x-3">
                <Button type="default" onClick={() => router.push("/post")}>
                  Back
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(DetailPost);
