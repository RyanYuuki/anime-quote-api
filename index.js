const express = require('express');
const app = express();


const animeQuotes = [
  {
    name: 'Naruto',
    character: 'Naruto Uzumaki',
    quote: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"
  },
  {
    name: 'One Piece',
    character: 'Monkey D. Luffy',
    quote: "I don't wanna conquer anything. It's just that the person with the most freedom on the sea is the Pirate King!"
  },
  {
    name: 'Attack on Titan',
    character: 'Eren Yeager',
    quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win!"
  },
  {
    name: 'Death Note',
    character: 'Light Yagami',
    quote: "I am justice! I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires!"
  },
  {
    name: 'My Hero Academia',
    character: 'All Might',
    quote: "It's fine now. Why? Because I am here!"
  },
  {
    name: 'Dragon Ball Z',
    character: 'Goku',
    quote: "I am the hope of the universe. I am the answer to all living things that cry out for peace."
  },
  {
    name: 'Sword Art Online',
    character: 'Kirito',
    quote: "I'd rather trust and regret than doubt and regret."
  },
  {
    name: 'Fullmetal Alchemist',
    character: 'Edward Elric',
    quote: "A lesson without pain is meaningless. That's because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart."
  },
  {
    name: 'Tokyo Ghoul',
    character: 'Ken Kaneki',
    quote: "The act of taking is equally evil. We, from the moment of birth, continue to take. Food, connections, even fellow blood. Living to utmost. Continuing to slaughter, kill, take. Life is to constantly sin. Life is evil itself. I am aware I am evil... And so are you all. Now, come kill me. And I shall do the same."
  },
  {
    name: 'Cowboy Bebop',
    character: 'Spike Spiegel',
    quote: "I'm not going there to die. I'm going to find out if I'm really alive."
  },
  {
    name: 'Neon Genesis Evangelion',
    character: 'Shinji Ikari',
    quote: "I mustn't run away."
  },
  {
    name: 'Bleach',
    character: 'Ichigo Kurosaki',
    quote: "If you ever betray me, I'll kill you."
  },
  {
    name: 'Hunter x Hunter',
    character: 'Gon Freecss',
    quote: "I don't care what you think of me. I've got my own principles."
  },
  {
    name: 'Fairy Tail',
    character: 'Natsu Dragneel',
    quote: "I'm fired up!"
  },
  {
    name: 'Demon Slayer',
    character: 'Tanjiro Kamado',
    quote: "My goal is to turn my sister back into a human."
  },
  {
    name: 'Black Clover',
    character: 'Asta',
    quote: "I'm not gonna die in a place like this! I'm gonna become the Wizard King!"
  },
  {
    name: 'JoJo\'s Bizarre Adventure',
    character: 'Joseph Joestar',
    quote: "Your next line is..."
  },
  {
    name: 'Mob Psycho 100',
    character: 'Shigeo "Mob" Kageyama',
    quote: "I don't think it's a bad thing to want to be strong. You just have to be careful what you do with it."
  },
  {
    name: 'Yu Yu Hakusho',
    character: 'Yusuke Urameshi',
    quote: "I'm not the kind of person who would give up and die just because I'm scared."
  },
  {
    name: 'Gurren Lagann',
    character: 'Simon',
    quote: "Believe in yourself. Not in the Simon that I believe in; not in the Kamina that you believe in. Have faith in the Simon who believes in you."
  },
  {
    name: 'Code Geass',
    character: 'Lelouch vi Britannia',
    quote: "If the king doesn't lead, how can he expect his subordinates to follow?"
  },
  {
    name: 'Steins;Gate',
    character: 'Rintarou Okabe',
    quote: "I am mad scientist. It's so cool! Sonuvabitch."
  },
  {
    name: 'Soul Eater',
    character: 'Death the Kid',
    quote: "There is symmetry in everything. Even your lies have a rhythm."
  },
  {
    name: 'Noragami',
    character: 'Yato',
    quote: "I will take responsibility for your happiness because you are my follower."
  },
  {
    name: 'Puella Magi Madoka Magica',
    character: 'Kyubey',
    quote: "I'll be frank, I'm not trying to deceive you. You have the potential to bring about the salvation of this universe."
  },
  {
    name: 'Gintama',
    character: 'Gintoki Sakata',
    quote: "You can't always hold on to the things that are important. By letting them go we gain something else."
  },
  {
    name: 'Hellsing',
    character: 'Alucard',
    quote: "A lesson without pain is meaningless. For you cannot gain something without sacrificing something else in return. But once you have recovered it and made it your own... You will gain an irreplaceable fullmetal heart."
  },
  {
    name: 'Re:Zero',
    character: 'Rem',
    quote: "I believe in you, Subaru."
  },
  {
    name: 'Haikyuu!!',
    character: 'Shoyo Hinata',
    quote: "The ball is in my court now!"
  },
  {
    name: 'The Promised Neverland',
    character: 'Emma',
    quote: "I don't want to just survive. I want to truly live."
  },
  {
    name: 'Akame ga Kill!',
    character: 'Akame',
    quote: "I have but one desire, to protect what is precious to me."
  },
  {
    name: 'Princess Mononoke',
    character: 'Ashitaka',
    quote: "Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living."
  },
  {
    name: 'Ghost in the Shell',
    character: 'Major Motoko Kusanagi',
    quote: "It's not a matter of can or can't. There are some things in life you just do."
  },
  {
    name: 'Your Lie in April',
    character: 'Kaori Miyazono',
    quote: "The music spoke what words could not."
  },
  {
    name: 'Princess Tutu',
    character: 'Duck/Ahiru',
    quote: "Even though it's scary, and it hurts, and we may never see each other again, that's what happens when you fall in love."
  },
  {
    name: 'Clannad',
    character: 'Nagisa Furukawa',
    quote: "We're all born with the desire to help each other out. It's up to you whether you actually do it or not."
  },
  {
    name: 'Elfen Lied',
    character: 'Lucy',
    quote: "I'm not sure what's right anymore. I used to think I knew. Now I'm not so sure."
  },
  {
    name: 'Serial Experiments Lain',
    character: 'Lain Iwakura',
    quote: "No matter where you go, everyone's connected."
  },
  {
    name: 'Great Teacher Onizuka',
    character: 'Eikichi Onizuka',
    quote: "If you're always worried about crushing the ants beneath you, you won't be able to walk."
  },
  {
    name: 'Violet Evergarden',
    character: 'Violet Evergarden',
    quote: "I want to know what 'I love you' means."
  },
  {
    name: 'Baccano!',
    character: 'Issac Dian',
    quote: "What’s true is true. Let's eat."
  },
  {
    name: 'Toradora!',
    character: 'Ryuuji Takasu',
    quote: "If you try to fail and succeed, which have you done?"
  },
  {
    name: 'Nichijou',
    character: 'Mai Minakami',
    quote: "The world is just a mask, a sick joke, and I'm going to have the last laugh."
  },
  {
    name: 'Nisekoi',
    character: 'Chitoge Kirisaki',
    quote: "It's not like I'm doing this because I like you or anything."
 
  },
  {
    name: 'Bunny Girl Senpai',
    character: 'Sakuta Azusagawa',
    quote: "You know, the only time I think I feel emotion is when I’m feeling pain. That’s not even emotions."
  },
  {
    name: 'Your Name',
    character: 'Mitsuha Miyamizu',
    quote: "I wanted to tell you that… wherever you may end up in this world, I will be searching for you."
  },
  {
    name: 'Weathering with You',
    character: 'Hina Amano',
    quote: "I'd rather spend my time looking for that someone than forget them."
  },
  {
    name: 'A Silent Voice',
    character: 'Shoya Ishida',
    quote: "I want to apologize for bullying you. I did terrible things to you. I'm truly sorry."
  },
  {
    name: 'One Punch Man',
    character: 'Saitama',
    quote: "I'm just a guy who's a hero for fun."
  },
  {
    name: 'Kimi no Na wa',
    character: 'Taki Tachibana',
    quote: "I wanted to tell you that… wherever you may end up in this world, I will be searching for you."
  },
  {
    name: 'Tokyo Ghoul',
    character: 'Touka Kirishima',
    quote: "You don't need a reason to live. You just live."
  },
  {
    name: 'Attack on Titan',
    character: 'Levi Ackerman',
    quote: "I don't know which option you should choose. I could never advise you on that. No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it's right or wrong until you arrive to some sort of outcome from your choice."
  },
  {
    name: 'Sword Art Online',
    character: 'Asuna Yuuki',
    quote: "Even if I were to disappear, I will always be by your side."
  },
  {
    name: 'Fairy Tail',
    character: 'Erza Scarlet',
    quote: "It's only the fairy tale's ending that is missing. They all lived happily ever after."
  },
  {
    name: 'Bleach',
    character: 'Rukia Kuchiki',
    quote: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder."
  },
  {
    name: 'Death Note',
    character: 'L',
    quote: "I am justice. I protect the innocent and those who fear evil. I'm the one who will become the god of a new world that everyone desires."
  },
  {
    name: 'Demon Slayer',
    character: 'Zenitsu Agatsuma',
    quote: "If you can't kick ass, you kick ass in spirit!"
  },
  {
    name: 'One Piece',
    character: 'Roronoa Zoro',
    quote: "I don’t care what the society says. I’ve never regretted anything."
  },
  {
    name: 'Naruto',
    character: 'Kakashi Hatake',
    quote: "In the ninja world, those who break the rules are trash. But those who abandon their friends are worse than trash."
  },
  {
    name: 'My Hero Academia',
    character: 'Izuku Midoriya',
    quote: "I'm not gonna be your worthless punching bag Deku forever... Kacchan. I'm... I'm the Deku who always does his best!"
  },
  {
    name: 'Dragon Ball Z',
    character: 'Vegeta',
    quote: "I do not fear this new challenge. Rather like a true warrior, I will rise to meet it."
  },
  {
    name: 'Soul Eater',
    character: 'Maka Albarn',
    quote: "There's no such thing as a soul that doesn't hurt."
  },
  {
    name: 'JoJo\'s Bizarre Adventure',
    character: 'Jotaro Kujo',
    quote: "Yare Yare Daze."
  },
  {
    name: 'Black Clover',
    character: 'Yami Sukehiro',
    quote: "Men who can't wipe away the tears from a women's eyes aren't real men."
  },
  {
    name: 'Mob Psycho 100',
    character: 'Reigen Arataka',
    quote: "No matter how many relationships we seem to have, we're all alone."
  },
  {
    name: 'Haikyuu!!',
    character: 'Tobio Kageyama',
    quote: "The moment you think you've given it your all is the moment you've given up."
  },
  {
    name: 'Attack on Titan',
    character: 'Mikasa Ackerman',
    quote: "Fight! If you don't fight, you can't win!"
  },
  {
    name: 'Fairy Tail',
    character: 'Gray Fullbuster',
    quote: "It's not the goodbyes that hurt, it's the flashbacks that follow."
  },
  {
    name: 'One Piece',
    character: 'Sanji',
    quote: "It's not the food that's delicious... It's the person who cooked it."
  },
  {
    name: 'Tokyo Ghoul',
    character: 'Kaneki Ken',
    quote: "It's not the world that's messed up; it's those of us in it."
  },
  {
    name: 'Naruto',
    character: 'Sasuke Uchiha',
    quote: "I don't take orders from anyone now... I don't have to live up to anyone else's expectations."
  },
  {
    name: 'My Hero Academia',
    character: 'Katsuki Bakugo',
    quote: "I'm not gonna be your worthless punching bag Deku forever... Kacchan. I'm... I'm the Deku who always does his best!"
  },
  {
    name: 'Dragon Ball Z',
    character: 'Vegeta',
    quote: "I do not fear this new challenge. Rather like a true warrior, I will rise to meet it."
  },
  {
    name: 'Soul Eater',
    character: 'Maka Albarn',
    quote: "There's no such thing as a soul that doesn't hurt."
  },
  {
    name: 'JoJo\'s Bizarre Adventure',
    character: 'Jotaro Kujo',
    quote: "Yare Yare Daze."
  },
  {
    name: 'Black Clover',
    character: 'Yami Sukehiro',
    quote: "Men who can't wipe away the tears from a women's eyes aren't real men."
  },
  {
    name: 'Mob Psycho 100',
    character: 'Reigen Arataka',
    quote: "No matter how many relationships we seem to have, we're all alone."
  },
  {
    name: 'Haikyuu!!',
    character: 'Tobio Kageyama',
    quote: "The moment you think you've given it your all is the moment you've given up."
  },
  {
    name: 'Attack on Titan',
    character: 'Mikasa Ackerman',
    quote: "Fight! If you don't fight, you can't win!"
  },
  {
    name: 'Fairy Tail',
    character: 'Gray Fullbuster',
    quote: "It's not the goodbyes that hurt, it's the flashbacks that follow."
  },
  {
    name: 'One Piece',
    character: 'Sanji',
    quote: "It's not the food that's delicious... It's the person who cooked it."
  },
  {
    name: 'Tokyo Ghoul',
    character: 'Kaneki Ken',
    quote: "It's not the world that's messed up; it's those of us in it."
  },
  {
    name: 'Naruto',
    character: 'Sasuke Uchiha',
    quote: "I don't take orders from anyone now... I don't have to live up to anyone else's expectations."
  },
  {
    name: 'My Hero Academia',
    character: 'Shoto Todoroki',
    quote: "I'm not interested in the reason you've got for not getting your work done. It's inexcusable to me."
  },
  {
    name: 'Dragon Ball Z',
    character: 'Piccolo',
    quote: "It's not wise to judge others based on your own preconceptions and by their appearances."
  },
  {
    name: 'Sword Art Online',
    character: 'Asuna Yuuki',
    quote: "Don't be nervous, Kirito. I'll protect you."
  },
  {
    name: 'Fullmetal Alchemist',
    character: 'Roy Mustang',
    quote: "I have no interest in revenge. I'm just trying to protect the things that matter to me."
  },
  {
    name: 'Neon Genesis Evangelion',
    character: 'Rei Ayanami',
    quote: "I mustn't run away."
  },
  {
    name: 'Cowboy Bebop',
    character: 'Spike Spiegel',
    quote: "I'm not going there to die. I'm going to find out if I'm really alive."
  },
];


app.get('/anime-quotes', (req, res) => {
  res.json(animeQuotes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/anime-quotes`);
});

app.get('/api/anime-quotes', (req, res) => {
  res.json(animeQuotes);
});

module.exports = app;
