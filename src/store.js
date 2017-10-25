import createStore from "redux-zero";

// const SONGS = [
//   {
//     question: "Which is the oldest airline in the world?",
//     answers: ["Avianca", "KLM", "Qantas"],
//     answerGood: "KLM",
//     image:
//       " https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg"
//   },
//   {
//     question: "Which is the largest port in the world?",
//     answers: ["Port of Shanghai", " Port of Singapore", "Port of Rotterdam"],
//     answerGood: "Port of Shanghai",
//     image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/ship.svg"
//   },

//   {
//     question: "What is the longest distance cycling backwards?",
//     answers: ["89.30km", "675.10km", "337.60km"],
//     answerGood: "337.60km",
//     image:
//       "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bycicle.svg"
//   },
//   {
//     question: "What is the highest speed ever reached by a school bus?",
//     answers: ["590 km/h", "320 km/h", "245 km/h"],
//     answerGood: "590 km/h",
//     image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/bus.svg"
//   },
//   {
//     question: "What is the longest car trip on one tank of gas?",
//     answers: ["2617 km", "3568 km", "1732 km"],
//     answerGood: "2617 km",
//     image: "https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg"
//   }
// ];
const SONGS = [
  {
    title: "Here Comes the Sun",
    artist: "The Beatles",
    duration: "2:54",
    active: false,
  },
  {
    title: "Walking on Sunshine",
    artist: "Katrina and the Waves",
    duration: "3:43",
    active: false,
    
  },
  { title: "Sunshine",
   artist: "Katrina", 
   duration: "3:43",
   active: false,
   
   }
];
const initialState = {
  songs: SONGS,
  currentSong: 0

};

const store = createStore(initialState);
export default store;
