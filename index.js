const express = require('express');
const app = express();


const animeQuotes = [
  {
    AnimeName: 'Naruto',
    character: 'Naruto Uzumaki',
    quote: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"
  },
  {
    AnimeName: 'One Piece',
    character: 'Monkey D. Luffy',
    quote: "I don't wanna conquer anything. It's just that the person with the most freedom on the sea is the Pirate King!"
  },
  {
    AnimeName: 'Attack on Titan',
    character: 'Eren Yeager',
    quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win!"
  },
  {
    AnimeName: 'Death Note',
    character: 'Light Yagami',
    quote: "I am justice! I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires!"
  },
  {
    AnimeName: 'My Hero Academia',
    character: 'All Might',
    quote: "It's fine now. Why? Because I am here!"
  },
  {
    AnimeName: 'Dragon Ball Z',
    character: 'Goku',
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace."
  },
  {
    AnimeName: 'Sword Art Online',
    character: 'Kirito',
    quote: "I'd rather trust and regret than doubt and regret."
  },
  {
    AnimeName: 'Fullmetal Alchemist',
    character: 'Edward Elric',
    quote: "A lesson without pain is meaningless. That's because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart."
  },
  {
    AnimeName: 'Tokyo Ghoul',
    character: 'Ken Kaneki',
    quote: "The act of taking is equally evil. We, from the moment of birth, continue to take. Food, connections, even fellow blood. Living to utmost. Continuing to slaughter, kill, take. Life is to constantly sin. Life is evil itself. I am aware I am evil... And so are you all. Now, come kill me. And I shall do the same."
  },
  {
    AnimeName: 'Cowboy Bebop',
    character: 'Spike Spiegel',
    quote: "I'm not going there to die. I'm going to find out if I'm really alive."
  },
  {
    AnimeName: 'Neon Genesis Evangelion',
    character: 'Shinji Ikari',
    quote: "I mustn't run away."
  },
  {
    AnimeName: 'Bleach',
    character: 'Ichigo Kurosaki',
    quote: "If you ever betray me, I'll kill you."
  },
  {
    AnimeName: 'Hunter x Hunter',
    character: 'Gon Freecss',
    quote: "I don't care what you think of me. I've got my own principles."
  },
  {
    AnimeName: 'Fairy Tail',
    character: 'Natsu Dragneel',
    quote: "I'm fired up!"
  },
  {
    AnimeName: 'Demon Slayer',
    character: 'Tanjiro Kamado',
    quote: "My goal is to turn my sister back into a human."
  },
  {
    AnimeName: 'Black Clover',
    character: 'Asta',
    quote: "I'm not gonna die in a place like this! I'm gonna become the Wizard King!"
  },
  {
    AnimeName: 'JoJo\'s Bizarre Adventure',
    character: 'Joseph Joestar',
    quote: "Your next line is..."
  },
  {
    AnimeName: 'Mob Psycho 100',
    character: 'Shigeo "Mob" Kageyama',
    quote: "I don't think it's a bad thing to want to be strong. You just have to be careful what you do with it."
  },
  {
    AnimeName: 'Yu Yu Hakusho',
    character: 'Yusuke Urameshi',
    quote: "I'm not the kind of person who would give up and die just because I'm scared."
  },
  {
    AnimeName: 'Gurren Lagann',
    character: 'Simon',
    quote: "Believe in yourself. Not in the Simon that I believe in; not in the Kamina that you believe in. Have faith in the Simon who believes in you."
  },
  {
    AnimeName: 'Code Geass',
    character: 'Lelouch vi Britannia',
    quote: "If the king doesn't lead, how can he expect his subordinates to follow?"
  },
  {
    AnimeName: 'Steins;Gate',
    character: 'Rintarou Okabe',
    quote: "I am mad scientist. It's so cool! Sonuvabitch."
  },
  {
    AnimeName: 'Soul Eater',
    character: 'Death the Kid',
    quote: "There is symmetry in everything. Even your lies have a rhythm."
  },
  {
    AnimeName: 'Noragami',
    character: 'Yato',
    quote: "I will take responsibility for your happiness because you are my follower."
  },
  {
    AnimeName: 'Puella Magi Madoka Magica',
    character: 'Kyubey',
    quote: "I'll be frank, I'm not trying to deceive you. You have the potential to bring about the salvation of this universe."
  },
  {
    AnimeName: 'Gintama',
    character: 'Gintoki Sakata',
    quote: "You can't always hold on to the things that are important. By letting them go we gain something else."
  },
  {
    AnimeName: 'Hellsing',
    character: 'Alucard',
    quote: "A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return. But once you have recovered it and made it your own... You will gain an irreplaceable fullmetal heart."
  },
  {
    AnimeName: 'Re:Zero',
    character: 'Rem',
    quote: "I believe in you, Subaru."
  },
  {
    AnimeName: 'Haikyuu!!',
    character: 'Shoyo Hinata',
    quote: "The ball is in my court now!"
  },
  {
    AnimeName: 'The Promised Neverland',
    character: 'Emma',
    quote: "I don't want to just survive. I want to truly live."
  },
  {
    AnimeName: 'Akame ga Kill!',
    character: 'Akame',
    quote: "I have but one desire, to protect what is precious to me."
  },
  {
    AnimeName: 'Princess Mononoke',
    character: 'Ashitaka',
    quote: "Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living."
  },
  {
    AnimeName: 'Ghost in the Shell',
    character: 'Major Motoko Kusanagi',
    quote: "It's not a matter of can or can't. There are some things in life you just do."
  },
  {
    AnimeName: 'Your Lie in April',
    character: 'Kaori Miyazono',
    quote: "The music spoke what words could not."
  },
  {
    AnimeName: 'Princess Tutu',
    character: 'Duck/Ahiru',
    quote: "Even though it's scary, and it hurts, and we may never see each other again, that's what happens when you fall in love."
  },
  {
    AnimeName: 'Clannad',
    character: 'Nagisa Furukawa',
    quote: "We're all born with the desire to help each other out. It's up to you whether you actually do it or not."
  },
  {
    AnimeName: 'Elfen Lied',
    character: 'Lucy',
    quote: "I'm not sure what's right anymore. I used to think I knew. Now I'm not so sure."
  },
  {
    AnimeName: 'Serial Experiments Lain',
    character: 'Lain Iwakura',
    quote: "No matter where you go, everyone's connected."
  },
  {
    AnimeName: 'Great Teacher Onizuka',
    character: 'Eikichi Onizuka',
    quote: "If you're always worried about crushing the ants beneath you, you won't be able to walk."
  },
  {
    AnimeName: 'Violet Evergarden',
    character: 'Violet Evergarden',
    quote: "I want to know what 'I love you' means."
  },
  {
    AnimeName: 'Baccano!',
    character: 'Issac Dian',
    quote: "What’s true is true. Let's eat."
  },
  {
    AnimeName: 'Toradora!',
    character: 'Ryuuji Takasu',
    quote: "If you try to fail and succeed, which have you done?"
  },
  {
    AnimeName: 'Nichijou',
    character: 'Mai Minakami',
    quote: "The world is just a mask, a sick joke, and I'm going to have the last laugh."
  },
  {
    AnimeName: 'Nisekoi',
    character: 'Chitoge Kirisaki',
    quote: "It's not like I'm doing this because I like you or anything."
 
  },
  {
    AnimeName: 'Bunny Girl Senpai',
    character: 'Sakuta Azusagawa',
    quote: "You know, the only time I think I feel emotion is when I’m feeling pain. That’s not even emotions."
  },
  {
    AnimeName: 'Your AnimeName',
    character: 'Mitsuha Miyamizu',
    quote: "I wanted to tell you that… wherever you may end up in this world, I will be searching for you."
  },
  {
    AnimeName: 'Weathering with You',
    character: 'Hina Amano',
    quote: "I'd rather spend my time looking for that someone than forget them."
  },
  {
    AnimeName: 'A Silent Voice',
    character: 'Shoya Ishida',
    quote: "I want to apologize for bullying you. I did terrible things to you. I'm truly sorry."
  },
  {
    AnimeName: 'One Punch Man',
    character: 'Saitama',
    quote: "I'm just a guy who's a hero for fun."
  },
  {
    AnimeName: 'Kimi no Na wa',
    character: 'Taki Tachibana',
    quote: "I wanted to tell you that… wherever you may end up in this world, I will be searching for you."
  },
  {
    AnimeName: 'Tokyo Ghoul',
    character: 'Touka Kirishima',
    quote: "You don't need a reason to live. You just live."
  },
  {
    AnimeName: 'Attack on Titan',
    character: 'Levi Ackerman',
    quote: "I don't know which option you should choose. I could never advise you on that. No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it's right or wrong until you arrive to some sort of outcome from your choice."
  },
  {
    AnimeName: 'Sword Art Online',
    character: 'Asuna Yuuki',
    quote: "Even if I were to disappear, I will always be by your side."
  },
  {
    AnimeName: 'Fairy Tail',
    character: 'Erza Scarlet',
    quote: "It's only the fairy tale's ending that is missing. They all lived happily ever after."
  },
  {
    AnimeName: 'Bleach',
    character: 'Rukia Kuchiki',
    quote: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder."
  },
  {
    AnimeName: 'Death Note',
    character: 'L',
    quote: "I am justice. I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires."
  },
  {
    AnimeName: 'Demon Slayer',
    character: 'Zenitsu Agatsuma',
    quote: "If you can't kick ass, you kick ass in spirit!"
  },
  {
    AnimeName: 'One Piece',
    character: 'Roronoa Zoro',
    quote: "I don’t care what the society says. I’ve never regretted anything."
  },
  {
    AnimeName: 'Naruto',
    character: 'Kakashi Hatake',
    quote: "In the ninja world, those who break the rules are trash. But those who abandon their friends are worse than trash."
  },
  {
    AnimeName: 'My Hero Academia',
    character: 'Izuku Midoriya',
    quote: "I'm not gonna be your worthless punching bag Deku forever... Kacchan. I'm... I'm the Deku who always does his best!"
  },
  {
    AnimeName: 'Dragon Ball Z',
    character: 'Vegeta',
    quote: "I do not fear this new challenge. Rather like a true warrior, I will rise to meet it."
  },
  {
    AnimeName: 'Soul Eater',
    character: 'Maka Albarn',
    quote: "There's no such thing as a soul that doesn't hurt."
  },
  {
    AnimeName: 'JoJo\'s Bizarre Adventure',
    character: 'Jotaro Kujo',
    quote: "Yare Yare Daze."
  },
  {
    AnimeName: 'Black Clover',
    character: 'Yami Sukehiro',
    quote: "Men who can't wipe away the tears from a women's eyes aren't real men."
  },
  {
    AnimeName: 'Mob Psycho 100',
    character: 'Reigen Arataka',
    quote: "No matter how many relationships we seem to have, we're all alone."
  },
  {
    AnimeName: 'Haikyuu!!',
    character: 'Tobio Kageyama',
    quote: "The moment you think you've given it your all is the moment you've given up."
  },
  {
    AnimeName: 'Attack on Titan',
    character: 'Mikasa Ackerman',
    quote: "Fight! If you don't fight, you can't win!"
  },
  {
    AnimeName: 'Fairy Tail',
    character: 'Gray Fullbuster',
    quote: "It's not the goodbyes that hurt, it's the flashbacks that follow."
  },
  {
    AnimeName: 'One Piece',
    character: 'Sanji',
    quote: "It's not the food that's delicious... It's the person who cooked it."
  },
  {
    AnimeName: 'Tokyo Ghoul',
    character: 'Kaneki Ken',
    quote: "It's not the world that's messed up; it's those of us in it."
  },
  {
    AnimeName: 'Naruto',
    character: 'Sasuke Uchiha',
    quote: "I don't take orders from anyone now... I don't have to live up to anyone else's expectations."
  },
  {
    AnimeName: 'My Hero Academia',
    character: 'Katsuki Bakugo',
    quote: "I'm not gonna be your worthless punching bag Deku forever... Kacchan. I'm... I'm the Deku who always does his best!"
  },
  {
    AnimeName: 'Dragon Ball Z',
    character: 'Vegeta',
    quote: "I do not fear this new challenge. Rather like a true warrior, I will rise to meet it."
  },
  {
    AnimeName: 'Soul Eater',
    character: 'Maka Albarn',
    quote: "There's no such thing as a soul that doesn't hurt."
  },
  {
    AnimeName: 'JoJo\'s Bizarre Adventure',
    character: 'Jotaro Kujo',
    quote: "Yare Yare Daze."
  },
  {
    AnimeName: 'Black Clover',
    character: 'Yami Sukehiro',
    quote: "Men who can't wipe away the tears from a women's eyes aren't real men."
  },
  {
    AnimeName: 'Mob Psycho 100',
    character: 'Reigen Arataka',
    quote: "No matter how many relationships we seem to have, we're all alone."
  },
  {
    AnimeName: 'Haikyuu!!',
    character: 'Tobio Kageyama',
    quote: "The moment you think you've given it your all is the moment you've given up."
  },
  {
    AnimeName: 'Attack on Titan',
    character: 'Mikasa Ackerman',
    quote: "Fight! If you don't fight, you can't win!"
  },
  {
    AnimeName: 'Fairy Tail',
    character: 'Gray Fullbuster',
    quote: "It's not the goodbyes that hurt, it's the flashbacks that follow."
  },
  {
    AnimeName: 'One Piece',
    character: 'Sanji',
    quote: "It's not the food that's delicious... It's the person who cooked it."
  },
  {
    AnimeName: 'Tokyo Ghoul',
    character: 'Kaneki Ken',
    quote: "It's not the world that's messed up; it's those of us in it."
  },
  {
    AnimeName: 'Naruto',
    character: 'Sasuke Uchiha',
    quote: "I don't take orders from anyone now... I don't have to live up to anyone else's expectations."
  },
  {
    AnimeName: 'My Hero Academia',
    character: 'Shoto Todoroki',
    quote: "I'm not interested in the reason you've got for not getting your work done. It's inexcusable to me."
  },
  {
    AnimeName: 'Dragon Ball Z',
    character: 'Piccolo',
    quote: "It's not wise to judge others based on your own preconceptions and by their appearances."
  },
  {
    AnimeName: 'Sword Art Online',
    character: 'Asuna Yuuki',
    quote: "Don't be nervous, Kirito. I'll protect you."
  },
  {
    AnimeName: 'Fullmetal Alchemist',
    character: 'Roy Mustang',
    quote: "I have no interest in revenge. I'm just trying to protect the things that matter to me."
  },
  {
    AnimeName: 'Neon Genesis Evangelion',
    character: 'Rei Ayanami',
    quote: "I mustn't run away."
  },
  {
    AnimeName: 'Cowboy Bebop',
    character: 'Spike Spiegel',
    quote: "I'm not going there to die. I'm going to find out if I'm really alive."
  },
];

const getRandomQuoteByAnimeName = (animeName) => {
  const matchingQuotes = animeQuotes.filter(q => normalize(q.AnimeName) === normalize(animeName));
  if (matchingQuotes.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
  return matchingQuotes[randomIndex];
};

const getRandomQuoteByCharacter = (character) => {
  const matchingQuotes = animeQuotes.filter(q => normalize(q.character) === normalize(character));
  if (matchingQuotes.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
  return matchingQuotes[randomIndex];
};

const normalize = (str) => str.toLowerCase().replace(/\s+/g, '');

app.get('/api/anime-quotes/', (req, res) => {
  res.json(animeQuotes);
});

app.get('/api/anime-quotes/name/:AnimeName', (req, res) => {
  const AnimeName = req.params.AnimeName;
  const quote = getRandomQuoteByAnimeName(AnimeName);
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ error: 'Quote not found' });
  }
});

app.get('/api/anime-quotes/character/:character', (req, res) => {
  const character = req.params.character;
  const quote = getRandomQuoteByCharacter(character);
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ error: 'Quote not found' });
  }
});

app.get('/api/anime-quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * animeQuotes.length);
  const randomQuote = animeQuotes[randomIndex];
  res.json(randomQuote);
});

module.exports = app;
