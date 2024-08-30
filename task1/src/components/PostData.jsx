import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostData = () => {
  const [data, setData] = useState(''); // Initialize with an empty array

  useEffect(() => {
    const post = async () => {
      try {
        const postData = {
          cityName: 'bhiwandi',
          createdBy: 'zayyan'
        };

        const response = await axios.post('http://103.123.45.76:9444/api/city', postData);

        // Assuming the response is an object or array
        const responseData = Array.isArray(response.data) ? response.data : [response.data];
        setData(responseData);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    post();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">CityName</th>
          <th scope="col">CreatedBy</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((item, index) => (
          <tr key={item.id || index}>
            <th scope="row">{index + 1}</th>
            <td>{item.cityName || 'N/A'}</td>
            <td>{item.createdBy || 'N/A'}</td>
            <td>{item.id || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostData;
