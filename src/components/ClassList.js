// src/components/ClassList.js
import React, { useEffect, useState } from 'react';
import { List, Card, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const ClassList = ({ searchTerm }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('/api/classes')
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);

  const filteredClasses = classes.filter((classItem) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesClassName = classItem.name.toLowerCase().startsWith(lowerCaseSearchTerm);
    const matchesProfessorName = classItem.professors.some((professor) =>
      professor.name.toLowerCase().startsWith(lowerCaseSearchTerm)
    );
    return matchesClassName || matchesProfessorName;
  });

  return (
    <div style={{ padding: '20px' }}>
      {searchTerm && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={4}>
            Search Results for: <Text strong>{searchTerm}</Text>
          </Title>
          <Divider />
        </div>
      )}
      
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={filteredClasses}
        renderItem={(classItem) => (
          <List.Item>
            <Card
              title={<Link to={`/classes/${classItem.id}`}><Title level={4} style={{ color: '#1890ff', marginBottom: '0' }}>{classItem.name}</Title></Link>}
              bordered
              hoverable
              style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}
              bodyStyle={{ padding: '16px 24px' }}
            >
              <div style={{ marginBottom: '10px' }}>
                <Text strong style={{ color: '#555' }}>Professors:</Text>
              </div>
              {classItem.professors.map((professor) => (
                <div key={professor.id} style={{ marginBottom: '8px' }}>
                  <Link to={`/professors/${professor.id}`} style={{ textDecoration: 'none', color: '#1890ff' }}>
                    <Text strong>{professor.name}</Text>
                  </Link>
                </div>
              ))}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ClassList;
