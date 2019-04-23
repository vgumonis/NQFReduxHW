import React from 'react';
import Card from './Card';
import Genres from './Genres';
import axios from 'axios';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
import { setMovieList } from '../actions';
import { setGenres } from '../actions';
import { getMovieList } from '../thunks';
import { getGenres } from '../thunks';
import { getMoviesByGenre } from '../thunks';
import { heart } from '../actions';
import { unheart } from '../actions';
import { log } from '../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    props.onGetMovieList();
    props.onGetGenres();

    this.props.onLog('Aplikacija užsikrovė.')
  }
 
  render() {
    const { movieList, genres, hearted, onHeart, onUnheart, onLogs } = this.props;

    return (
      <div>
         {genres.map((listItem) => (
                    <Genres
                        genre={listItem.name}
                        click = {() => {this.props.onGetMoviesByGenre(listItem.id), this.props.onLog("Pakeistas zarnas i " + listItem.name)} }
                    />
        ))}

        {movieList.map((listItem) => (
          <Card
            backgroundImage={getImageUrl(listItem.backdrop_path)}
            title={listItem.original_title}
            releaseDate={listItem.release_date}
            score={listItem.vote_average}
            votes={listItem.vote_count}
            description={listItem.overview}
            itemId={listItem.id}
            hearted={hearted.includes(listItem.id)}
            handleHeart={ hearted.includes(listItem.id) ? onUnheart : onHeart }

          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.list,
  genres: state.genres.genresList,
  hearted: state.hearts.hearted,
});

const mapDispatchToProps = (dispatch) => ({
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenres: () => dispatch(getGenres()),
  onGetMoviesByGenre: (id) => dispatch(getMoviesByGenre(id)),
  onHeart: (id) => dispatch(heart(id)),
  onHeart: (id) => dispatch(log("Sirdute uzdeta")),
  onUnheart: (id) => dispatch(unheart(id)),
  onUnheart: (id) => dispatch(log("Sirdute uimata")),
  onLog: (entry) => dispatch(log(entry)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
