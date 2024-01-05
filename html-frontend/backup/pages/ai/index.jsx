import React, { useCallback, useState } from 'react';
import { Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { postQuestion } from '../../service/aiService';

const AiPage = () => {
  const [form] = Form.useForm();
  const [formState] = useState({});

  const resetForm = () => {
    form.setFieldsValue({
      question_answer: '',
    });
  };
  const onSubmit = useCallback(values => {
    form.setFieldsValue({
      question_answer: '',
    });
    postQuestion(values).then((response) => {
      form.setFieldsValue({
        question_answer: response.data.answer,
      });
    }).catch(() => {});
  }, []);
  const onReset = useCallback(() => {
    form.resetFields();
    resetForm();
  }, []);

  return (
    <React.Fragment>
      <br /><br /><br />
      <div className='main'>
        <Form
          form={form}
          onFinish={onSubmit}
          style={{ margin: '0 auto', maxWidth: 800 }}
          initialValues={formState}>
          <Form.Item name='question_title' label='提问:'>
            <TextArea placeholder='请输入问题' style={{ width: 600, height: 200 }} />
          </Form.Item>
          <Form.Item name='question_answer' label='回答:'>
            <TextArea style={{ width: 600, height: 300 }} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              确认
            </Button>
            <Button htmlType='button' onClick={onReset} className='margin-left'>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default AiPage;
