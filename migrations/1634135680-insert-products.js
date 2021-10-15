// u wont have to put public folder in img src so imag is considered to be located in the root so / means root
const products = [
  {
    name: 'Goku',
    descx:
      "Son Goku is the main protagonist of the Dragon Ball series. Goku is a Saiyan male originally sent to destroy Earth as an infant. A head injury at an early age alters his memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth's greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
    price: 600,
  },
  {
    name: 'Garou',
    descx:
      'Garou is a villain, a martial arts prodigy, the self-proclaimed "Hero Hunter,"and a major adversary of the Hero Association and Monster Association. He is a former disciple of Bang but was expelled from his dojo for going on a rampage. Because of his fascination with monsters, he is commonly called the "Human Monster". Sitch of the Hero Association views him as a grave threat to the organization despite being only a human.',
    price: 500,
  },
  {
    name: 'DemonSlayer',
    descx:
      "Giyu Tomioka is a major supporting character of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira ( Mizu Bashira).As a Pillar of the Demon Slayer Corps, Giyu is a very powerful swordsman. He is able to easily defeat the Father Spider Demon in his transformed state and Rui, Lower Moon Five. During his fight against Akaza, Upper Moon Three, he was able to hold on his own for some time and like Kyojuro, Akaza is amazed by Giyu's skills to the point that he offers to transform the Pillar into Demon, something Akaza only asks of the most worthy of his opponents. Akaza states that he has not fought a Water Pillar as skilled as Giyu in fifty years.",
    price: 100,
  },
  {
    name: 'Sukuna',
    descx:
      'Ryomen Sukuna, more often called just Sukuna , is a mighty cursed spirit known as the undisputed King of Curses ( Noroi no ). He serves as one of the primary antagonists of the Jujutsu Kaisen series. According to a legend, during the golden age of jujutsu over 1,000 years ago, Sukuna was an Imaginary Demon, though in truth was a human sorcerer, and other sorcerers gave their all to defeat him. After his death, he became a cursed spirit, and his curse was too strong for his body to be fully destroyed. Henceforth, his remains of 20 indestructible fingers, preserved in grave wax, traversed the ages as cursed objects, ever growing in power. In the present, Sukuna has been incarnated into Yuji Itadori due to the latter eating one of his cursed fingers, which contain his fragmented power.',
    price: 200,
  },
  {
    name: 'Hero',
    descx:
      "My Hero Academia (Hepburn: Boku no Hiro Akademia) is a Japanese superhero manga series written and illustrated by Kohei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a superhero himself. He is scouted by All Might, Japan's greatest hero, who chooses Midoriya as his successor and shares his Quirk with him after recognizing his potential, and later helps to enroll him in a prestigious high school for heroes in training.",
    price: 600,
  },

  {
    name: 'YourName',
    descx:
      "Your Name (Hepburn: Kimi no Na wa) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and released by Toho. It depicts a high school boy in Tokyo and a high school girl in the Japanese countryside who suddenly and inexplicably begin to swap bodies. The film was commissioned in 2014, written and directed by Makoto Shinkai. It features the voices of Ryunosuke Kamiki and Mone Kamishiraishi, with animation direction by Masashi Ando, character design by Masayoshi Tanaka, and its orchestral score and soundtrack composed by Radwimps. A light novel of the same name, also written by Shinkai, was published a month prior the film's premiere.",
    price: 700,
  },
];
// looping over th array and inserting and removing each user
exports.up = async function up(sql) {
  for (const product of products) {
    await sql`
  		INSERT INTO products
  		(name, descx, price)
  		VALUES
  		(${product.name}, ${product.descx}, ${product.price})
  	`;
  }
};

exports.down = async function down(sql) {
  for (const product of products) {
    await sql`
  		DELETE FROM
			 products
			 WHERE
  			name= ${product.name} AND descx=${product.descx} AND price=${product.price}
  	`;
  }
};
