import React, { Component } from 'react';
import './App.css';
//import TMDB from './TMDB';

class FilmList extends Component {
  render() {


      return (
       
        

    <div className="film-library">
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            {/* <h1> {this.props.films[0].title}</h1> */}
            {this.props.films.map(allfilm => {
                    const posterUrl = `https://image.tmdb.org/t/p/w780/${allfilm.poster_path}`

                return <div>
                        {/* <h3> {allfilm.title}</h3> */}
                        <div className="film-row">
                            <img src={posterUrl} alt={this.props.title} />

                            <div className="film-summary">
                                <h1>{allfilm.title}</h1>
                                <p>{allfilm.release_date}</p>
                            </div>
                            </div>
                        
                    </div>

            })}

        </div>
       

       
    </div>
    );
  }
}

export default FilmList;