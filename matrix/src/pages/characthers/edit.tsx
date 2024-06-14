import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const CharacterEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"ID"}
          name={["id"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Name"}
          name={["name"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Physical Status"}
          name={["physicalStatus"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Gender"}
          name={["gender"]}
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Edit>
  );
};
