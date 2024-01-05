import { message, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { calculateInbreeding, getPigs } from '../../service/pigService';
import { useParams } from 'react-router-dom';

const Inbreeding = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '个体号',
      dataIndex: 'pig_code',
    },
    {
      title: '父个体号',
      dataIndex: 'sire',
    },
    {
      title: '母个体号',
      dataIndex: 'dam',
    },
    {
      title: '近交系数（开福）',
      dataIndex: 'inbreeding_value_kf',
    },
    {
      title: '近交系数（BGG）',
      dataIndex: 'inbreeding_value',
    },
    {
      title: '系谱PDF',
      key: 'pdf',
      render: (text, record) => (
        <Space size='middle'>
          <a href={`http://192.168.1.110/${record.id}-plots.pdf`} target='_blank'>
            PDF
          </a>
        </Space>
      ),
    },
    {
      title: '系谱CSV',
      key: 'csv',
      render: (text, record) => (
        <Space size='middle'>
          <a href={`http://192.168.1.110/${record.id}-pedigree.csv`} target='_blank'>
            CSV
          </a>
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'publishStatus',
      dataIndex: 'publishStatus',
      render: (text, record) =>
        (
          <span>
           <a onClick={() => handlerPublish(record)}>生成Inbreeding</a>
          </span>
        ),
    },
  ];

  const { pig_type } = useParams();
  const page_size = 20;
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const [query, setQuery] = useState({ page_number: 1 });
  const pageChange = page_number => setQuery({ ...query, page_number });

  function handlerPublish(record) {
    calculateInbreeding(pig_type, record.pig_code).then(() => {
      message.success('操作成功');
      fetchData();
    });
  }

  const fetchData = async () => {
    const { pigs, total } = await getPigs({
      ...query,
      page_size: page_size,
      pig_type: pig_type,
    });
    setTotal(total);
    setList(pigs);
  };

  useEffect(() => {
    fetchData().then();
  }, [query, pig_type]);

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

export default Inbreeding;
