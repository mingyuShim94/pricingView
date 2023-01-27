import { useState } from "react";

function useCustomHook(percent: number) {
  let pageviews: string;
  let pricing: number;

  if (percent < 5) {
    pageviews = "10K";
    pricing = 8.0;
  } else if (percent < 10) {
    pageviews = "50K";
    pricing = 12.0;
  } else if (percent < 50) {
    pageviews = "100K";
    pricing = 16.0;
  } else if (percent < 100) {
    pageviews = "500K";
    pricing = 24.0;
  } else {
    pageviews = "1M";
    pricing = 36.0;
  }

  return { pageviews, pricing };
}

export default useCustomHook;
