import * as React from 'react';
import '../assets/styles/app.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const getTitle = (str) => {
  const titles = {
    mylist: 'Mi lista',
    trends: 'Tendencias',
    originals: 'Originales de Platzi',
  };

  return titles[str] || 'Unknown';
};

const API = 'http://localhost:3000/initialState';

const App = () => {
  const videos = useInitialState(API);

  return (
    <>
      <Header />
      <Search />
      {videos.map((category) => (
        <Categories key={category[0]} title={getTitle(category[0])}>
          <Carousel>
            {category[1].length > 0 ? (
              category[1].map((video) => (
                <CarouselItem key={video.id} video={video} />
              ))
            ) : (
              <div className='carousel__container--no-videos'>
                No hay videos :c
              </div>
            )}
          </Carousel>
        </Categories>
      ))}

      <Footer />
    </>
  );
};

export default App;
