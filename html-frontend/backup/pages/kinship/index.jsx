import { message, Table } from 'antd';
import { useEffect, useState } from 'react';
import { calculateInbreeding, getKinship } from '../../service/pigService';
import { useParams } from 'react-router-dom';

const Kinship = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '公猪个体号',
      dataIndex: 'boar',
    },
    {
      title: '母猪个体号',
      dataIndex: 'sow',
    },
    {
      title: '亲缘系数',
      dataIndex: 'kinship_value',
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      render: (text, record) =>
        (
          <span>
           <a onClick={() => handlerKinship(record)}>生成Kinship</a>
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

  function handlerKinship(record) {
    calculateInbreeding(pig_type, record.pig_code).then(() => {
      message.success('操作成功');
      fetchData();
    });
  }

  const fetchData = async () => {
    const { pigs, total } = await getKinship({
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

export default Kinship;
