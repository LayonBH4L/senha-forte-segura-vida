
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PasswordCrackSimulatorProps {
  targetPassword: string;
  onComplete?: () => void;
}

const PasswordCrackSimulator = ({ 
  targetPassword, 
  onComplete 
}: PasswordCrackSimulatorProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [crackedPassword, setCrackedPassword] = useState('');
  const [timeTaken, setTimeTaken] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning) {
      setStartTime(Date.now());
      
      interval = window.setInterval(() => {
        setTimeTaken((prev) => prev + 0.1);
        
        // Generate a "guessed" password (this is simulation only)
        const simulatedAttempt = simulatePasswordGuess(targetPassword, attemptCount);
        setCurrentAttempt(simulatedAttempt);
        setAttemptCount((prev) => prev + 1);
        
        // Update visual progress (just for UI feedback)
        const newProgress = Math.min(99, Math.floor((attemptCount / estimatedAttempts(targetPassword)) * 100));
        setProgress(newProgress);
        
        // Check if we've "found" the password
        if (simulatedAttempt === targetPassword || attemptCount > 100) {
          setIsRunning(false);
          setCrackedPassword(targetPassword);
          setProgress(100);
          if (onComplete) onComplete();
        }
      }, 100); // Simulate attempts quickly for demo purposes
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, attemptCount, targetPassword, onComplete]);

  const simulatePasswordGuess = (target: string, attempt: number) => {
    // This is just a visual simulation for educational purposes
    let result = '';
    for (let i = 0; i < target.length; i++) {
      // As attempts increase, more characters are "guessed" correctly
      if (i < attempt / 10) {
        result += target[i];
      } else {
        // Replace with a random character
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    return result;
  };

  const estimatedAttempts = (password: string) => {
    // Simplistic estimation for simulation purposes only
    return Math.min(1000, password.length * 10 + 30);
  };

  const startCracking = () => {
    setIsRunning(true);
    setAttemptCount(0);
    setProgress(0);
    setCrackedPassword('');
    setTimeTaken(0);
  };

  const stopCracking = () => {
    setIsRunning(false);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <h3 className="text-xl font-semibold mb-4">Simulador de Quebra de Senha</h3>
      
      <div className="bg-gray-900 p-3 rounded mb-4">
        <div className="flex justify-between items-center mb-1">
          <span>Tentativa atual:</span>
          <span className="font-mono">{currentAttempt || '...'}</span>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span>Tentativas:</span>
          <span>{attemptCount}</span>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span>Tempo decorrido:</span>
          <span>{timeTaken.toFixed(1)}s</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progresso:</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      {crackedPassword && (
        <div className="bg-green-900 p-3 rounded mb-4 text-center">
          <p>Senha quebrada: <strong className="font-mono">{crackedPassword}</strong></p>
          <p className="text-sm">Tempo: {timeTaken.toFixed(1)}s | Tentativas: {attemptCount}</p>
        </div>
      )}
      
      <div className="flex justify-center gap-4">
        {!isRunning ? (
          <Button onClick={startCracking} variant="destructive">
            Iniciar Simulação
          </Button>
        ) : (
          <Button onClick={stopCracking} variant="outline">
            Parar Simulação
          </Button>
        )}
      </div>
      
      <p className="text-xs text-gray-400 mt-4 text-center">
        Nota: Este é um simulador educacional e não representa um ataque real.
      </p>
    </div>
  );
};

export default PasswordCrackSimulator;
