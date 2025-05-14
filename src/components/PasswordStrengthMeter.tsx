
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrengthMeter = ({ password }: PasswordStrengthProps) => {
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  const calculateStrength = (password: string) => {
    // Start with a base score
    let strengthScore = 0;
    
    if (password.length === 0) {
      setStrength(0);
      setMessage('');
      return;
    }
    
    // Add points based on length
    if (password.length > 5) strengthScore += 10;
    if (password.length > 8) strengthScore += 15;
    if (password.length > 12) strengthScore += 20;
    
    // Add points for character variety
    if (/[A-Z]/.test(password)) strengthScore += 15; // Uppercase
    if (/[a-z]/.test(password)) strengthScore += 10; // Lowercase
    if (/[0-9]/.test(password)) strengthScore += 15; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strengthScore += 20; // Special characters
    
    // Cap at 100
    strengthScore = Math.min(100, strengthScore);
    
    // Determine message based on strength
    let strengthMessage = '';
    let strengthColor = '';
    
    if (strengthScore < 30) {
      strengthMessage = 'Muito fraca';
      strengthColor = 'text-red-600';
    } else if (strengthScore < 50) {
      strengthMessage = 'Fraca';
      strengthColor = 'text-orange-500';
    } else if (strengthScore < 70) {
      strengthMessage = 'Média';
      strengthColor = 'text-yellow-500';
    } else if (strengthScore < 90) {
      strengthMessage = 'Forte';
      strengthColor = 'text-green-400';
    } else {
      strengthMessage = 'Muito forte';
      strengthColor = 'text-green-600';
    }
    
    setStrength(strengthScore);
    setMessage(strengthMessage);
    
    return { strengthScore, strengthColor };
  };

  // Determine progress bar color
  const getProgressColor = () => {
    if (strength < 30) return 'bg-red-600';
    if (strength < 50) return 'bg-orange-500';
    if (strength < 70) return 'bg-yellow-500';
    if (strength < 90) return 'bg-green-400';
    return 'bg-green-600';
  };

  return (
    <div className="w-full my-4">
      <div className="flex justify-between mb-2">
        <span>Força da senha:</span>
        <span className={
          strength < 30 ? 'text-red-600' :
          strength < 50 ? 'text-orange-500' :
          strength < 70 ? 'text-yellow-500' :
          strength < 90 ? 'text-green-400' :
          'text-green-600'
        }>
          {message}
        </span>
      </div>
      <Progress className="h-2" value={strength} />
    </div>
  );
};

export default PasswordStrengthMeter;
