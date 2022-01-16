import React from 'react';

class React extends React.Component {
  render() {
    return (
      <div>
        Next.js API route support: https://nextjs.org/docs/api-routes/introduction
      </div>
    );
  }
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}