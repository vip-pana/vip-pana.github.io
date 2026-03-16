import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-[120px] font-bold leading-none tracking-tighter">
        404
      </h1>
      <div className="h-[2px] w-32 bg-nord-text my-6" />
      <p className="text-2xl font-bold uppercase tracking-wider mb-2">
        Page not found
      </p>
      <p className="text-gray-400 mb-10 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate('/')}>Back to home</Button>
    </div>
  );
};
