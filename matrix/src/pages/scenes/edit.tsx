
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const ScenesEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: charactersSelectProps } = useSelect({
    resource: "characters",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "Please enter the ID" }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="characters"
          label="Characters"
          rules={[{ required: true, message: "Please select characters" }]}
        >
          <Select mode="multiple" {...charactersSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};