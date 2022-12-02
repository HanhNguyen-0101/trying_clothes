export const style = (stt, width, height) => {
  return {
    hairstyle: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 218,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        108,
    },
    necklaces: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 256,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        316,
    },
    topclothes: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 256,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        316,
    },
    botclothes: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 256,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        316,
    },
    handbags: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 256,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        316,
    },
    shoes: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 256,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        316,
    },
    background: {
      x: (stt % 4 === 0 ? 1 : 5 - (stt % 4)) * width + 253,
      y:
        -(stt % 4 === 0 ? Math.floor(stt / 4) - 1 : Math.floor(stt / 4)) *
          height -
        343,
    },
  };
};
