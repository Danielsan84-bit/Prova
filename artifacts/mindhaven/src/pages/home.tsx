import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}landing-funnel.html`);
  }, []);

  return null;
}
