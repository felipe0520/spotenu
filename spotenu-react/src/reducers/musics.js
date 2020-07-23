const initialSate = {
  musics: [],

  filter: undefined,
};

const ReducerMusics = (state = initialSate, action) => {
  switch (action.type) {
    case "GET_MUSICS":
      console.log(action.payload);
      return { ...initialSate, musics: action.payload.data };
    default:
      return state;
  }
};

export default ReducerMusics;
