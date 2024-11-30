import React from 'react';

const Message = ({ type, content }) => {
  const isSuccess = type === 'success';
  const bgColor = isSuccess
    ? 'bg-green-50/70 backdrop-blur-md'
    : 'bg-red-50/70 backdrop-blur-md';
  const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
  const borderColor = isSuccess ? 'border-green-400' : 'border-red-400';
  const icon = isSuccess ? '✅' : '⚠️';
  const emoji = isSuccess ? '🎉' : '❌';

  return (
    <div
      className={`${bgColor} ${textColor} ${borderColor} border-l-4 p-4 mb-4 flex items-center gap-4 shadow-lg rounded-lg`}
      role="alert"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-bold text-lg flex items-center gap-2">
          {type === 'success' ? 'Succès' : 'Erreur'} <span>{emoji}</span>
        </p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Message;
