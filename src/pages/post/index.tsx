import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePosts, useDeletePost } from "@/hooks/usePosts";
import { Post as TypePost } from "@/types/post";
import {
  Table,
  Input,
  Button,
  Space,
  Breadcrumb,
  theme,
  message,
  Modal
} from "antd";
import withAuth from "@/hooks/withAuth";

const Post = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [modalDelete, setModalDelete] = useState({
    show: false,
    data: { id: 0, title: "" }
  });

  const { data, isLoading } = usePosts(page, perPage);
  const { mutate } = useDeletePost();

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const handleDelete = (id: number) => {
    setModalDelete({ show: false, data: { id: 0, title: "" } });
    mutate(id, {
      onSuccess: () => {
        message.success("Post deleted successfully!");
      },
      onError: (error) => {
        message.error(`Error deleting post: ${error.message}`);
      }
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: TypePost, b: TypePost) => a.id - b.id
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: TypePost, b: TypePost) => a.title.localeCompare(b.title)
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      ellipsis: true,
      render: (text: string) => <span>{text}</span>
    },
    {
      title: "Author",
      dataIndex: "user_id",
      key: "user_id",
      ellipsis: true,
      render: (text: string) => <span>{text}</span>
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text: null, item: TypePost) => (
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <button onClick={() => router.push(`/post/${item.id}/detail`)}>
            Detail
          </button>
          <button onClick={() => router.push(`/post/${item.id}/edit`)}>
            Edit
          </button>
          <button
            onClick={() =>
              setModalDelete({
                show: true,
                data: { id: item.id, title: item.title }
              })
            }
            style={{ color: "red" }}
          >
            Delete
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Blog Post</Breadcrumb.Item>
        <Breadcrumb.Item>Post List</Breadcrumb.Item>
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
        <div style={{ padding: "24px" }}>
          <Space
            style={{ marginBottom: 16 }}
            className="flex items-center justify-between"
          >
            <Input.Search
              placeholder="Search by title"
              onSearch={handleSearch}
              style={{ width: 200 }}
            />
            <Button type="primary" onClick={() => router.push("/post/create")}>
              Add Post
            </Button>
          </Space>

          <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            loading={isLoading}
            pagination={{
              current: page,
              pageSize: perPage,
              total: data?.length,
              onChange: (page, pageSize) => {
                setPage(page);
                setPerPage(pageSize);
              }
            }}
          />
        </div>
      </div>

      <Modal
        title="Delete Post"
        open={modalDelete.show}
        onOk={() => handleDelete(modalDelete.data.id)}
        onCancel={() =>
          setModalDelete({ show: false, data: { id: 0, title: "" } })
        }
      >
        <p>
          Are you sure wan&apos;t to delete this post ({modalDelete.data.title})
        </p>
      </Modal>
    </div>
  );
};

export default withAuth(Post);
