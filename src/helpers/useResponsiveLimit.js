import { useEffect, useState } from 'react';

const useResponsiveLimit = () => {
  const [limit, setLimit] = useState(() => (window.innerWidth >= 1024 ? 9 : 6));

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1439px)');

    const handleChange = e => {
      setLimit(e.matches ? 9 : 6);
    };

    handleChange(media);

    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, []);

  return limit;
};
export default useResponsiveLimit;
