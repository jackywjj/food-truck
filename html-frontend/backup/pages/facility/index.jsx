import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getFacilities } from '../../service/facilityService';

const Facilities = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '公猪个体号',
      dataIndex: 'locationId',
    },
    {
      title: '母猪个体号',
      dataIndex: 'applicant',
    },
    {
      title: '亲缘系数',
      dataIndex: 'locationDescription',
    },
    {
      title: '亲缘系数',
      dataIndex: 'address',
    },
  ];

  const page_size = 20;
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [query, setQuery] = useState({ page_number: 1 });
  const pageChange = page_number => setQuery({ ...query, page_number });

  const fetchData = async () => {
    const { facilities, total } = await getFacilities({
      ...query,
      page_size: page_size,
    });
    setTotal(total);
    setList(facilities);
  };

  useEffect(() => {
    fetchData().then();
  });

  return (
    <div className='main'>
      <Table
        dataSource={list}
        columns={columns}
        rowKey='id'
        bordered
        pagination={{
          current: query.page_number,
          onChange: pageChange,
          pageSize: page_size,
          total,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default Facilities;
