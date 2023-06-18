const parseArgs = () => {
  console.log(process.argv.slice(2).reduce((acc, item, index) => {
    if (index % 2 === 0) {
      return index === 0 ? item.replace('--', '') : `${acc}, ${item.replace('--', '')}`;
    } else {
      return `${acc} is ${item}`;
    }
  }, ''));
};

parseArgs();