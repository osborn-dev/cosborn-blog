import dayjs from 'dayjs';

const posts = [
    {
        title: 'Can anyone code?',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Tech Culture', 'Tech News'],
        link: '#',
        image: 'anyone_can_code.jpg',
    },
    {
        title: 'Using AWS S3 for Storing Blog Images',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Cloud'],
        link: '#',
        image: 'cloud_storage.jpeg',
    },
    {
        title: 'Popular Programming Languages in 2020',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Tech News', 'Tech Culture'],
        link: '#',
        image: 'programming_languages.jpeg',
    },
    {
        title: 'Brain Hacks for Learning to Program',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Brain Health'],
        link: '#',
        image: 'neuron.jpg',
    },
];

export default posts