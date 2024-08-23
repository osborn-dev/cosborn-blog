import dayjs from 'dayjs';

const blogPosts = [
    {
        title: 'Software Engineer Salary in 2020',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Tech Culture'],
        link: '#',
        image: 'money.jpg'
    },
    {
        title: 'GraphQL vs REST',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['React', 'JavaScript'],
        link: '#',
        image: 'apollo_graphql.png',
    },
    {
        title: 'A Day in the Life of a Programmer',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Tech Culture'],
        link: '#',
        image: 'puzzled_programmer.jpeg'
    },
    {
        title: 'Brain Hacks for Learning to Program',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['Brain Health'],
        link: '#',
        image: 'neuron.jpg'
    },
    {
        title: 'React Vs Vue',
        date: dayjs().format('MMMM DD, YYYY'),
        categories: ['React', 'Vue'],
        link: '#',
        image: 'logo.png'
    },
];

export default blogPosts;
