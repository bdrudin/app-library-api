const checkScore = (str) => {
  const results = str.split(" ");
  const data = [];

  for (let i = 0; i < results.length; i++) {
    const arr = results[i].split(",");
    arr.forEach((item) => {
      const value = item.split(":");
      data.push(value);
    });
  }
  const obj = {
    name: data[0][1],
    kelas: data[1][1],
    score: data[2][1],
  };

  return obj;
};

export default checkScore;
