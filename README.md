# MyMovies-React-Native

## About MyMovies app

An application can help users discover new movies that they may enjoy, and can be a useful tool for finding films to watch. 

### Motivation:
People spend considerable time on internet to choose a good movie . We provide a catalog of movies to watch, Catagorised by film status, upcoming, top rated, with ability to search and save movies to watch later. 


## Development:

### Archeticture:

#### React Native:
  * Views are created with `react Native` and `javascript`.
  * Styled is created with :
     - `react-native-paper` for AppBar.
     - `rneui/themedr` for Tab.
     - `react-native-vector-icons` for Icons.
  * Images stored in the ```/src/assets``` directory.

#### DataBase:
  * SqlLite
      - used sqllite foe saving movies:
      - store saving movies details in watchlist table.
      - get movies details to watch list screen. 


## Screens:

<div style={{alignItems: "center"}}>
<div style={{flex: "row"}}>
 <img src="https://user-images.githubusercontent.com/48320569/207383431-0645f90d-44dd-48e3-83bf-f7f1d4d4be69.jpg" width="140" height="300" />
<img src="https://user-images.githubusercontent.com/48320569/206945001-c18dc860-13d9-48dd-8e3f-4ff29a135eab.jpg" width="140" height="300" />
<img src="https://user-images.githubusercontent.com/48320569/206945038-0cd4dd10-3715-4d94-b4ad-596f7592025c.jpg" width="140" height="300" />
<img src="https://user-images.githubusercontent.com/48320569/206945148-e0c68645-ba32-48bf-a667-82ab7eed7f16.jpg" width="140" height="300" />
<img src="https://user-images.githubusercontent.com/48320569/206945181-3949bd59-3899-4f63-bc30-744c0190a802.jpg" width="140" height="300" />
<img src="https://user-images.githubusercontent.com/48320569/206945239-472c3e1e-43d5-48ed-9445-7ff1e8296b08.jpg" width="140" height="300" />
 <img src="https://user-images.githubusercontent.com/48320569/207383269-95536406-d602-46e6-9805-9a9cf4b10c6a.jpg" width="140" height="300" />
</div>
</div>




 ### Run the website locally:
 - Clone the project repo, and cd to its directory `MyMovies-React-Native`.
 - Cd the project directory `cd MyMovies`.
 - Run `npm i` to install npm depends.
 - Run `npm run android` to start the app on the emulator.
