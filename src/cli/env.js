const parseEnv = () => {
  console.log(Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.includes('RSS_')) {
      return acc === '' ? `${key}=${value}` : `${acc}; ${key}=${value}`;
    }
    return acc;
  }, ''));
};

parseEnv();