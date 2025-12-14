"use client";

import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const InstagramMosaic = dynamic(() => import('@/components/home/InstagramMosaic'), { suspense: true });

const LazyInstagramMosaic = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView ? <InstagramMosaic /> : <div className="h-64 flex items-center justify-center">Loading Instagram posts...</div>}</div>;
};

export default LazyInstagramMosaic;