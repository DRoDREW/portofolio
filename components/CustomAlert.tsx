'use client';
import { useEffect } from 'react';

interface CustomAlertProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const CustomAlert = ({ message, isVisible, onClose }: CustomAlertProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <i className="bi bi-check-circle-fill me-2"></i>
        {message}
      </div>
    </div>
  );
};

export default CustomAlert;