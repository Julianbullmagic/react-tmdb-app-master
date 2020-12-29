import React, { useEffect, useState } from 'react'
import { Typography, Popover, Button } from 'antd';
import axios from 'axios';
import './favorite.css';
import { useSelector } from 'react-redux';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config'

const { Title } = Typography;

function MostPopularPage() {

    const user = useSelector(state => state.user)
    const [Favorites, setFavorites] = useState([])
    const [FavoritesSet, setFavoritesSet] = useState([]);
    const[FilteredFavorites, setFilteredFavorites]=useState([])
    const [Loading, setLoading] = useState(true)
    const[renderCards, setRenderCards]=useState('')
    let variable = { userFrom: localStorage.getItem('userId') }

    useEffect(() => {

    fetchMostFavorited()







    }, [])

    const fetchMostFavorited = async () => {
        await axios.get('/api/favorite/mostFavorited', variable)
            .then(response => {
                  setFavorites(response.data.data)
                  setLoading(false)
return response

            })
            .then(response=>{
              var datacopy=JSON.parse(JSON.stringify(response.data.data))
              var objectset=[]
              var array_elements=response.data.data.map((favorite) => {return favorite.id})
              console.log("favSet")
              console.log(array_elements)
              var favSet=new Set()
                            array_elements.map((favorite)=>{return favSet.add(favorite);})

  for (var set of favSet){
    console.log(set)
    for (var fav of datacopy){
      console.log(fav)
      if(fav.id=set){
        objectset.push(fav)
      }

  }
}
                console.log(favSet)
                console.log(objectset)
                  // array_elements.sort();
                  // console.log(array_elements)
              //
              //     var current = null;
              //     var cnt = 0;
              //     for (var i = 0; i < array_elements.length; i++) {
              //         if (array_elements[i] != current) {
              //             if (cnt > 0) {
              //                 return
              //                 {current:current,
              //                 cnt:cnt}
              //             }
              //             current = array_elements[i];
              //             cnt = 1;
              //         } else {
              //             cnt++;
              //         }
              //     }
              //     if (cnt > 0) {
              //         document.write(current + ' comes --> ' + cnt + ' times');
              //     }
              //
              //
              // setFilteredFavorites(array_elements)
            })


    }



    var mappedFavorites=Favorites.map((favorite, index) => {


            return (<div style={{"backgroundColor":"#b7c9e2","text-align": "center","width":"25%","margin":"25px","padding":"25px","borderRadius":"25px","borderWidth":"3px","border":"#d3d3d3","borderStyle": "outset"}} key={index}>
    {favorite.posterPath && (<img style={{"height" : "25vh","text-align": "center"}} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${favorite.posterPath}`} />)}
    {favorite.profilePath && (<img style={{"height" : "25vh","text-align": "center"}} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${favorite.profilePath}`} />)}
<br/>
              {favorite.movieTitle && (<h3>{favorite.movieTitle}</h3>)}
              {favorite.name && (<h3>{favorite.name}</h3>)}
              {favorite.movieRuntime && (<h4>Runtimme: {favorite.movieRuntime}</h4>)}
              {favorite.placeOfBirth && (<h4>Birthplace: {favorite.placeOfBirth}</h4>)}
              {favorite.popularity && (<h4>Popularity: {favorite.popularity}</h4>)}

            </div>)
        })



    return (

        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > Favorite Movies By Me </Title>
            <hr />
            {user.userData && !user.userData.isAuth ?
                <div style={{ width: '100%', fontSize: '2rem', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Please Log in first...</p>
                    <a href="/login">Go to Login page</a>
                </div>
                :
                !Loading &&
              <div>
              <br/  >
{mappedFavorites}
                  </div>
            }
        </div>
    )
}

export default MostPopularPage
