export const throttle = (callback: Function, timeout: number) => {
  let wait = false;
  return (...theArgs: []) => {
    if (!wait) {
      callback(theArgs);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, timeout);
    }
  };
};
