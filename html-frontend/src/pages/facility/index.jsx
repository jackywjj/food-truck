import { Button, Form, Input, Table } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { getFacilities } from '../../service/facilityService';

const Facilities = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Location ID',
      dataIndex: 'locationId',
    },
    {
      title: 'Applicant',
      dataIndex: 'applicant',
    },
    {
      title: 'Location Description',
      dataIndex: 'locationDescription',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const [form] = Form.useForm();
  const pageSize = 10;
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [query, setQuery] = useState({ pageNumber: 1 });
  const pageChange = pageNumber => setQuery({ ...query, pageNumber });
  const onReset = useCallback(() => setQuery({ ...query, currentPage: 1 }), [query]);

  // Search by keyword
  const onSearch = useCallback(
    (values) => {
      setQuery({
        ...query,
        currentPage: 1,
        queryKeywords: form.getFieldValue('queryKeywords'),
      });
    }, [query]
  );
  // Get list
  const fetchData = async () => {
    const { facilities, total } = await getFacilities({
      ...query,
      pageSize: pageSize,
    });
    setTotal(total);
    setList(facilities);
  };

  useEffect(() => {
    fetchData().then();
  }, [query]);

  return (
    <div className='main'>
      <div className='main-search margin-bottom'>
        <div className='search-wrap'>
          <Form layout='inline' form={form}
                initialValues={{ queryKeywords: '' }}>
            <Form.Item name={'queryKeywords'}>
              <Input value={query.queryKeywords} placeholder='Input keywords for Place' className='margin-left'
                     style={{ width: 200 }} />
            </Form.Item>
            <Button type='primary' htmlType='submit' onClick={onSearch}>
              Submit
            </Button>
            <Button onClick={onReset} className='margin-left'>
              Reset
            </Button>
          </Form>
        </div>
      </div>
      <Table
        dataSource={list}
        columns={columns}
        rowKey='id'
        bordered
        pagination={{
          current: query.pageNumber,
          onChange: pageChange,
          pageSize: pageSize,
          total,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default Facilities;
