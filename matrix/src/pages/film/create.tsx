
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber } from "antd";
import React from "react";

export const  FilmCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "Please enter the ID" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter the title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="releaseYear"
          label="Release Year"
          rules={[{ required: true, message: "Please enter the release year" }]}
        >
          <InputNumber min={1900} max={2100} />
        </Form.Item>
      </Form>
    </Create>
  );
};