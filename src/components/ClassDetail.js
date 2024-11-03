// src/components/ClassDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Spin } from 'antd';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js library

const { Title, Text } = Typography;

const ClassDetail = () => {
  const { id } = useParams();
  const [gradeData, setGradeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/classes/${id}/grades`)
      .then((response) => response.json())
      .then((data) => {
        setGradeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching class grades:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spin style={{ display: 'block', margin: 'auto' }} />;

  if (!gradeData) return <Text type="danger">No grade data available for this class.</Text>;

  // Prepare data for the bar chart
  const chartData = {
    labels: Object.keys(gradeData.gradeDistribution),
    datasets: [
      {
        label: 'Number of Students',
        data: Object.values(gradeData.gradeDistribution),
        backgroundColor: '#1890ff',
      },
    ],
  };

  return (
    <Card
      style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
      bordered
    >
      <Title level={2}>Class Grade Distribution</Title>

      {/* Display the bar chart */}
      <div style={{ marginBottom: '20px' }}>
        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Display statistics */}
      <Title level={3}>Grade Statistics</Title>
      <Text><strong>Mean:</strong> {gradeData.statistics.mean}</Text><br />
      <Text><strong>Median:</strong> {gradeData.statistics.median}</Text><br />
      <Text><strong>Standard Deviation:</strong> {gradeData.statistics.stdDev}</Text>
    </Card>
  );
};

export default ClassDetail;
