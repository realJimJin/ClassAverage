// src/components/SearchResults.js
import React from 'react';
import { List, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SearchResults = ({ filteredClasses, searchTerm }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={4} style={{ textAlign: 'center', color: '#1890ff' }}>
        {searchTerm ? `Search Results for: "${searchTerm}"` : 'Search Results'}
      </Title>

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={filteredClasses}
        renderItem={(classItem) => (
          <List.Item key={classItem.id}> {/* Use classItem.id as a unique key for each class */}
            <Card
              bordered
              hoverable
              style={{
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                padding: '16px 24px',
              }}
            >
              {/* Clickable Class Link */}
              <Link to={`/classes/${classItem.id}`} style={{ textDecoration: 'none' }}>
                <Title level={4} style={{ color: '#1890ff', marginBottom: '0' }}>{classItem.name}</Title>
              </Link>

              {/* Professors List with Clickable Links */}
              <div style={{ marginTop: '10px' }}>
                <Text strong style={{ color: '#555' }}>Professors:</Text>
                <div style={{ marginTop: '5px' }}>
                  {classItem.professors.map((professor) => (
                    <div key={`${classItem.id}-${professor.id}`} style={{ marginBottom: '8px' }}>
                      <Link to={`/professors/${professor.id}`} style={{ color: '#1890ff' }}>
                        <Text>{professor.name}</Text>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchResults;
