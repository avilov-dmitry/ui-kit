


import React from 'react';

export type PropsType = {
  color?: string;
  className?: string;
  onClick?: () => void;
};

export const CloseIcon: React.FunctionComponent<PropsType> = ({ color = '#023564', className = '', onClick }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0.362893 0.362893C0.84675 -0.120964 1.63124 -0.120964 2.11509 0.362893L10 8.2478L17.8849 0.362893C18.3688 -0.120964 19.1532 -0.120964 19.6371 0.362893C20.121 0.84675 20.121 1.63124 19.6371 2.11509L11.7522 10L19.6371 17.8849C20.121 18.3688 20.121 19.1532 19.6371 19.6371C19.1532 20.121 18.3688 20.121 17.8849 19.6371L10 11.7522L2.11509 19.6371C1.63124 20.121 0.84675 20.121 0.362893 19.6371C-0.120964 19.1532 -0.120964 18.3688 0.362893 17.8849L8.2478 10L0.362893 2.11509C-0.120964 1.63124 -0.120964 0.84675 0.362893 0.362893Z" fill={color} />
    </svg>
  );
};
