// src/components/ProfessorDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const ProfessorDetail = () => {
  const { id } = useParams();
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    fetch(`/api/professors/${id}`)
      .then((response) => response.json())
      .then((data) => setProfessor(data))
      .catch((error) => console.error("Error fetching professor:", error));
  }, [id]);

  if (!professor) return <p>Loading...</p>;

  return (
    <Card
      style={{ maxWidth: '600px', margin: '20px auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      hoverable
      title={<Title level={3}>{professor.name}</Title>}
    >
      <Text><strong>Difficulty:</strong> {professor.rmpDiff ? professor.rmpDiff.toFixed(2) : "N/A"}</Text><br />
      <Text><strong>Link:</strong> <a href={professor.rmpLink} target="_blank" rel="noopener noreferrer">{professor.rmpLink}</a></Text><br />
    </Card>
  );
};

export default ProfessorDetail;
