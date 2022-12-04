const makeLoopChart = (n) => {
  let path = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 1) {
      path += "*";
    } else if (i % 3 == 0) {
      path += "%";
    } else {
      path += "#";
    }
    console.log(path);
  }
};
makeLoopChart(6);
// Expected output
// *
// *#
// *#%
// *#%*
// *#%*#
// *#%*#%
