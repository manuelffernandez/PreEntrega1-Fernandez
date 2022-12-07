const isOk = true;

export const customFetch = (time, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(data);
      } else {
        const err = new Error('Hubo un error inesperado');
        reject(err);
      }
    }, time);
  });
};
