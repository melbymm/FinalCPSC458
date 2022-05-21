const starterOne = new Date(2022, 7, 1, 12, 30, 0, 0);

const starterTwo = new Date(2022, 7, 1, 2, 30, 0, 0);
const starterThree = new Date(2022, 7, 1, 4, 15, 0, 0);
const starterFour = new Date(2022, 7, 2, 12, 30, 0, 0);
const starterFive = new Date(2022, 7, 2, 2, 30, 0, 0);
const endOne = new Date(2022, 7, 1, 3, 30, 0, 0);
const endTwo = new Date(2022, 7, 1, 6, 15, 0, 0);
const endThree = new Date(2022, 7, 1, 7, 0, 0, 0);
const endFour = new Date(2022, 7, 1, 3, 30, 0, 0);
const endFive = new Date(2022, 7, 1, 5, 30, 0, 0);

const data = [
  {
    title: "Swim with turtles",
    price: 5,
    link:
      "https://media.farandwide.com/c3/fc/c3fc66b0b868479b9c2654e8b8f1c037.jpg",
      start: starterOne,
      end: endOne
  },
  {
    title: "Skiing on a beautiful mountain",
    price: 6,
    link:
      "https://freeskier.com/wp-content/uploads/2020/04/Murren3.png",
      start: starterTwo,
      end: endTwo
  },
  {
    title: "Blue Sky Parasailing",
    price: 10,
    link:
      "https://static.vecteezy.com/system/resources/previews/002/123/954/large_2x/people-parasailing-on-a-body-of-water-with-clear-blue-sky-free-photo.jpg",
      start: starterThree,
      end: endThree
  },
  {
    title: "Tropical Sky Diving",
    price: 10,
    link:
      "https://i.pinimg.com/originals/c5/31/08/c53108ed13ab3937f781cc8289d1ec96.jpg",
      start: starterFour,
      end: endFour
  },
  {
    title: "Instructed Cliff Jumping",
    price: 8,
    link:
      "https://beyondwords.life/wp-content/uploads/2017/07/shutterstock_344995025.jpg",
      start: starterFive,
      end: endFive
  }
]
export default data
