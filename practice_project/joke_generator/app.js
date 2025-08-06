const jokes = [
  {
    id: 1,
    joke: "There are only 10 kinds of people in this world: those who know binary and those who don\u2019t. \ud83d\udcbb",
  },
  {
    id: 2,
    joke: "There are only 10 kinds of people in this world: those who know binary and those who don\u2019t. \ud83d\udcbb",
  },
  {
    id: 3,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 4,
    joke: "The rotation of the earth really makes my day. \ud83d\ude02",
  },
  {
    id: 5,
    joke: "I'm reading a book on anti-gravity. It's impossible to put down. \ud83d\ude02",
  },
  {
    id: 6,
    joke: "Are you French? Because Eiffel for you. \ud83d\ude33",
  },
  {
    id: 7,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 8,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 9,
    joke: "Why do programmers prefer dark mode? Because light attracts bugs. \ud83d\udcbb",
  },
  {
    id: 10,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 11,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 12,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised. \ud83e\udd14",
  },
  {
    id: 13,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 14,
    joke: "Why can\u2019t your nose be 12 inches long? Because then it would be a foot. \ud83d\ude02",
  },
  {
    id: 15,
    joke: "I asked my dog what's two minus two. He said nothing. \ud83d\ude02",
  },
  {
    id: 16,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 17,
    joke: "I asked my dog what's two minus two. He said nothing. \ud83d\ude02",
  },
  {
    id: 18,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 19,
    joke: "I asked my dog what's two minus two. He said nothing. \ud83d\ude02",
  },
  {
    id: 20,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 21,
    joke: "I ate a clock yesterday. It was very time consuming. \ud83d\ude02",
  },
  {
    id: 22,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised. \ud83e\udd14",
  },
  {
    id: 23,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 24,
    joke: "Are you a loan from a bank? Because you have my interest. \ud83d\ude33",
  },
  {
    id: 25,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 26,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 27,
    joke: "Are you a loan from a bank? Because you have my interest. \ud83d\ude33",
  },
  {
    id: 28,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 29,
    joke: "Are you a loan from a bank? Because you have my interest. \ud83d\ude33",
  },
  {
    id: 30,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 31,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 32,
    joke: "What is a programmer's favorite musical key? C#. \ud83d\udcbb",
  },
  {
    id: 33,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 34,
    joke: "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?' \ud83d\udcbb",
  },
  {
    id: 35,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 36,
    joke: "You must be made of uranium and iodine because all I can see is U and I. \ud83d\ude33",
  },
  {
    id: 37,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 38,
    joke: "I told my computer I needed a break, and now it won\u2019t stop sending me KitKat ads. \ud83e\udd14",
  },
  {
    id: 39,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 40,
    joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem. \ud83d\udcbb",
  },
  {
    id: 41,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 42,
    joke: "What's a programmer's favorite hangout place? The Foo Bar. \ud83d\udcbb",
  },
  {
    id: 43,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 44,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 45,
    joke: "There are only 10 kinds of people in this world: those who know binary and those who don\u2019t. \ud83d\udcbb",
  },
  {
    id: 46,
    joke: "Debugging: Removing the needles from the haystack. \ud83d\udcbb",
  },
  {
    id: 47,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 48,
    joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem. \ud83d\udcbb",
  },
  {
    id: 49,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 50,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 51,
    joke: "Are you a loan from a bank? Because you have my interest. \ud83d\ude33",
  },
  {
    id: 52,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 53,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 54,
    joke: "If you were a vegetable, you\u2019d be a cute-cumber. \ud83d\ude33",
  },
  {
    id: 55,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 56,
    joke: "Why do Python developers wear glasses? Because they can't C. \ud83d\udcbb",
  },
  {
    id: 57,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised. \ud83e\udd14",
  },
  {
    id: 58,
    joke: "I ate a clock yesterday. It was very time consuming. \ud83d\ude02",
  },
  {
    id: 59,
    joke: "Why can\u2019t your nose be 12 inches long? Because then it would be a foot. \ud83d\ude02",
  },
  {
    id: 60,
    joke: "Why can\u2019t your nose be 12 inches long? Because then it would be a foot. \ud83d\ude02",
  },
  {
    id: 61,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 62,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 63,
    joke: "There are only 10 kinds of people in this world: those who know binary and those who don\u2019t. \ud83d\udcbb",
  },
  {
    id: 64,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 65,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 66,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 67,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 68,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 69,
    joke: "I would avoid the sushi if I was you. It\u2019s a little fishy. \ud83d\ude02",
  },
  {
    id: 70,
    joke: "Are you French? Because Eiffel for you. \ud83d\ude33",
  },
  {
    id: 71,
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised. \ud83e\udd14",
  },
  {
    id: 72,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 73,
    joke: "Why did the programmer quit his job? Because he didn't get arrays. \ud83d\udcbb",
  },
  {
    id: 74,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 75,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 76,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 77,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 78,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 79,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 80,
    joke: "Why don\u2019t scientists trust atoms? Because they make up everything. \ud83d\ude02",
  },
  {
    id: 81,
    joke: "I ate a clock yesterday. It was very time consuming. \ud83d\ude02",
  },
  {
    id: 82,
    joke: "I must be a snowflake because I've fallen for you. \ud83d\ude33",
  },
  {
    id: 83,
    joke: "Debugging: Removing the needles from the haystack. \ud83d\udcbb",
  },
  {
    id: 84,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 85,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 86,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 87,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 88,
    joke: "What's a programmer's favorite hangout place? The Foo Bar. \ud83d\udcbb",
  },
  {
    id: 89,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 90,
    joke: "Are you Wi-Fi? Because I'm feeling a connection. \ud83d\ude33",
  },
  {
    id: 91,
    joke: "If you were a vegetable, you\u2019d be a cute-cumber. \ud83d\ude33",
  },
  {
    id: 92,
    joke: "Parallel lines have so much in common. It\u2019s a shame they\u2019ll never meet. \ud83d\ude02",
  },
  {
    id: 93,
    joke: "You're so sweet, you put Hershey's out of business. \ud83d\ude33",
  },
  {
    id: 94,
    joke: "Are you a magician? Because whenever I look at you, everyone else disappears. \ud83d\ude33",
  },
  {
    id: 95,
    joke: "Why do Java developers wear glasses? Because they don't see sharp. \ud83d\udcbb",
  },
  {
    id: 96,
    joke: "I ate a clock yesterday. It was very time consuming. \ud83d\ude02",
  },
  {
    id: 97,
    joke: "Do you have a name or can I call you mine? \ud83d\ude33",
  },
  {
    id: 98,
    joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem. \ud83d\udcbb",
  },
  {
    id: 99,
    joke: "Are you made of copper and tellurium? Because you\u2019re Cu-Te. \ud83d\ude33",
  },
  {
    id: 100,
    joke: "I would avoid the sushi if I was you. It\u2019s a little fishy. \ud83d\ude02",
  },
];
let generate_btn = document.querySelector(".generate_btn");
let jokepalce = document.querySelector(".joke");
let jokediv = document.querySelector(".show_joke");

jokediv.style.display = "none";

generate_btn.addEventListener("click", function () {
  jokediv.style.display = "block";
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  for (opt of jokes) {
    if (randomNumber == opt.id) {
      jokepalce.innerHTML = opt.joke;
    }
  }
});
