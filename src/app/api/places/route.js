const PLACES = [
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    image: '/small/1.jpg',
    description: '15th-century Inca citadel set high in the Andes Mountains in Peru.'
  },
  {
    id: 'colosseum',
    name: 'Colosseum',
    image: '/small/2.jpg',
    description: 'Large amphitheatre in Rome that hosted gladiatorial contests and spectacles.'
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    image: '/small/3.jpg',
    description: 'Ancient series of walls and fortifications totaling more than 13,000 miles in length.'
  },
  {
    id: 'pyramids-giza',
    name: 'Pyramids of Giza',
    image: '/small/4.jpg',
    description: 'Iconic pyramids built as tombs for the pharaohs in ancient Egypt.'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    image: '/small/5.jpg',
    description: 'Mausoleum in Agra, India, commissioned in 1632 by the Mughal emperor Shah Jahan.'
  },
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    image: '/small/6.jpg',
    description: 'Vast temple complex in Cambodia and the largest religious monument in the world.'
  },
  {
    id: 'petra',
    name: 'Petra',
    image: '/small/7.jpg',
    description: 'Historical city in southern Jordan famous for its rock-cut architecture.'
  },
  {
    id: 'acropolis-athens',
    name: 'Acropolis of Athens',
    image: '/small/8.jpg',
    description: 'An ancient citadel located on a rocky outcrop above Athens, Greece, containing the remains of several historically significant buildings, including the Parthenon.'
  }
  ,
  {
    id: 'alhambra',
    name: 'Alhambra',
    image: '/small/9.jpg',
    description: 'A palace and fortress complex in Granada, Spain, built during the Nasrid dynasty, famous for its Islamic architecture, gardens, and intricate tile work.'
  },
  {
    id: 'chichen-itza',
    name: 'Chichen Itza',
    image: '/small/10.jpg',
    description: 'A large pre-Columbian archaeological site built by the Maya civilization in Mexico, known for the iconic pyramid El Castillo and advanced astronomical significance.'
  }
];

export async function GET() {
  return Response.json(PLACES);
}
