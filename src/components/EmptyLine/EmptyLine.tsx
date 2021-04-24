import React from 'react';
import './style.less';

export interface IEmptyLineProps {
  height?: number;
}

const EmptyLine: React.FC<IEmptyLineProps> = ({ height = 20 }) => {
  return <div className="empty-line" style={{ height }} />;
}

export default EmptyLine;
