import store from "./store";
export const play = () => {
  let currentSong = store.getState().currentSong;
  let thisSong = store.getState().songs[currentSong];
  let  active = thisSong.active = true ;
  store.setState({
    currentSong: currentSong
  })

  console.log(thisSong);
};
export const stop = () => {
  alert("stop.js");
};
export const next = () => {
  alert("next.js");
};
// export const selectOption = option => {
//   let answers = store.getState().answers;
//   let push = answers.push(option.target.textContent);
//   let currentQuestion = store.getState().currentQuestion;
//   let answerGood = [];
//   let thatAnswer = store.getState().game[store.getState().currentQuestion].answerGood;
//   answerGood.push(thatAnswer); 
//   console.log(answers, answerGood);
//   let cont = 0;

//   if (answers[currentQuestion] == answerGood) {
//       console.log('asd')
//       cont++;
//   }else {
//       console.log('s')
//   }
//   console.log(cont)

//   currentQuestion++;
//   if (push == store.getState().game.length) {
//     store.setState({
//       complet: true
//     });
//     console.log(store.getState().complet);
//   }
//   store.setState({
//     currentQuestion: currentQuestion,
//     answers: answers
//   });

// };
// export const submit = () => {

// };
