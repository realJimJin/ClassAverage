// src/components/Header.js
import React from 'react';
import { Typography, Divider } from 'antd';
import { ReadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Header = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f0f2f5',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      marginBottom: '20px'
    }}>
      {/* Optional Icon for a More Visual Header */}
      <ReadOutlined style={{ fontSize: '48px', color: '#1890ff' }} />
      
      <Title level={1} style={{ color: '#1890ff', fontWeight: 'bold', marginTop: '10px' }}>
        ClassAverage
      </Title>
      
      <Text style={{ fontSize: '1.2em', color: '#555' }}>
        View past grade distributions for classes at Boston University (PoC)
      </Text>
      
      <Divider style={{ margin: '20px 0', borderTop: '2px solid #e8e8e8' }} />
    </div>
  );
};

export default Header;
