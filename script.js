var element = React.createElement('div', {}, 'Hello world!');


var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        src: 'img/potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'img/lew.jpg'
    },
    {
        id: 3,
        title: 'Mulan',
        desc: 'Film o dziewczynie, która ratuje Chiny',
        src: 'img/mulan.jpg'
    },
    {
        id: 4,
        title: 'Jak wytresować smoka',
        desc: 'Film o tym, że smoka nie da się wytresować',
        src: 'img/httyd.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.src}),
        );
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'))