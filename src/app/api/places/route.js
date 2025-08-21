const PLACES = [
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    image: '1.jpg',
    description: '15th-century Inca citadel set high in the Andes Mountains in Peru.'
  },
  {
    id: 'colosseum',
    name: 'Colosseum',
    image: '2.jpg',
    description: 'Large amphitheatre in Rome that hosted gladiatorial contests and spectacles.'
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    image: '3.jpg',
    description: 'Ancient series of walls and fortifications totaling more than 13,000 miles in length.'
  },
  {
    id: 'pyramids-giza',
    name: 'Pyramids of Giza',
    image: '4.jpg',
    description: 'Iconic pyramids built as tombs for the pharaohs in ancient Egypt.'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    image: '5.jpg',
    description: 'Mausoleum in Agra, India, commissioned in 1632 by the Mughal emperor Shah Jahan.'
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    image: '6.jpg',
    description: 'Vast temple complex in Cambodia and the largest religious monument in the world.'
  },
  {
    id: 'petra',
    name: 'Petra',
    image: '7.jpg',
    description: 'Historical city in southern Jordan famous for its rock-cut architecture.'
  },
  {
    id: 'acropolis-athens',
    name: 'Acropolis of Athens',
    image: '8.jpg',
    description: 'An ancient citadel located on a rocky outcrop above Athens, Greece, containing the remains of several historically significant buildings, including the Parthenon.'
  }
  ,
  {
    id: 'alhambra',
    name: 'Alhambra',
    image: '9.jpg',
    description: 'A palace and fortress complex in Granada, Spain, built during the Nasrid dynasty, famous for its Islamic architecture, gardens, and intricate tile work.'
  },
  {
    id: 'chichen-itza',
    name: 'Chichen Itza',
    image: '10.jpg',
    description: 'A large pre-Columbian archaeological site built by the Maya civilization in Mexico, known for the iconic pyramid El Castillo and advanced astronomical significance.'
  },
  {
    id: 'statue-liberty',
    name: 'Statue of Liberty',
    image: '11.jpg',
    description: 'Iconic symbol of freedom in the United States, gifted by France and located on Liberty Island, New York.'
  },
  {
    id: 'mont-saint-michel',
    name: 'Mont Saint-Michel',
    image: '12.jpg',
    description: 'A medieval abbey perched on a rocky island in Normandy, France, known for its stunning tides and Gothic architecture.'
  },
  {
    id: 'sydney-opera-house',
    name: 'Sydney Opera House',
    image: '13.jpg',
    description: 'Famous performing arts center in Sydney, Australia, with a distinctive sail-like design on the harbor.'
  },
  {
    id: 'neuschwanstein-castle',
    name: 'Neuschwanstein Castle',
    image: '14.jpg',
    description: '19th-century Romanesque Revival palace in Bavaria, Germany, inspiration for Disney\'s Sleeping Beauty Castle.'
  },
  {
    id: 'moai-easter-island',
    name: 'Moai Statues of Easter Island',
    image: '15.jpg',
    description: 'Giant monolithic human figures carved by the Rapa Nui people on Easter Island in Chile, dating back to 1250-1500 CE.'
  },
  {
    id: 'forbidden-city',
    name: 'Forbidden City',
    image: '16.jpg',
    description: 'Imperial palace complex in Beijing, China, which served as the home of emperors for almost 500 years.'
  },
  {
    id: 'sagrada-familia',
    name: 'Sagrada Familia',
    image: '17.jpg',
    description: 'A large unfinished Roman Catholic church in Barcelona, Spain, designed by the famous architect Antoni Gaudí.'
  },
  {
    id: 'potala-palace',
    name: 'Potala Palace',
    image: '18.jpg',
    description: 'A historic fortress and former residence of the Dalai Lama in Lhasa, Tibet, China, known for its massive structure and spiritual significance.'
  }
];

export async function GET() {
  return Response.json(PLACES);
}
