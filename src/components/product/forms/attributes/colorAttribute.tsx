import { ColorPicker, Modal, Table } from "antd";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface DataType {
  label: string;
  value: string | number;
}

const dataSource = [
  {
    key: "1",
    label: "Mike",
    value: "#FF5722",
  },
  {
    key: "2",
    label: "John",
    value: "#64748B",
  },
  {
    key: "3",
    label: "Mike",
    value: "#18EC5F",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Label",
    dataIndex: "label",
    key: "label",
  },
  {
    title: "Value",
    dataIndex: "value",
    key: "value",
    render: (text) => (
      <div
        style={{
          backgroundColor: text,
          height: "20px",
          width: "20px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  },
];

export default function ColorAttribute() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const { handleSubmit, control } = useForm();
  const [modal, openModal] = useState(false);

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      openModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    openModal(false);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <Table
        scroll={{ y: 200 }}
        pagination={false}
        bordered
        columns={columns}
        dataSource={dataSource}
      />
      <span>
        <Button
          onClick={() => openModal(true)}
          size="small"
          type="default"
          title="+ New color"
        />
      </span>

      <Modal
        centered
        title="New color"
        open={modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          <div className="w-full h-full  items-center flex justify-end">
            <Button size="small" title="Ok" />
          </div>
        }
      >
        <form className="w-full h-full flex items-center gap-2 ">
          <div className="w-80 ">
            <Controller
              name="attributeLable"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Label</p>}
                  placeholder="Enter the product title"
                  type="text"
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="w-80 ">
            <Controller
              name="attributeValue"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <span className="flex flex-col gap-1">
                  <span className=" text-sm">Value</span>
                  <ColorPicker {...field} />
                </span>
              )}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
