(() => {
  // función para obtener información de una película por Id
  //   function getAllMovies(movieId: string) {
  //     console.log({ movieId });
  //   }
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  //   function getAllMovieActors(id: string) {
  //     console.log({ id });
  //   }
  function getMovieCast(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  //   function getUsuario(ActorId: string) {
  //     console.log({ ActorId });
  //   }
  function getActorBio(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  //   function createMovie(
  //     title: string,
  //     description: string,
  //     rating: number,
  //     cast: string[]
  //   ) {
  //     console.log({ title, description, rating, cast });
  //   }
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "Sócrates") return false;

    console.log(`Crear actor: ${fullName} nacio el ${birthdate.toString()}`);
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    // Mal
    //   let result;
    //   if (isDead) {
    //     result = 1500;
    //   } else {
    //     if (isSeparated) {
    //       result = 2500;
    //     } else {
    //       if (isRetired) {
    //         result = 3000;
    //       } else {
    //         result = 4000;
    //       }
    //     }
    //   }

    //   return result;

    // Versión 1 - Mejor
    // let result = 1500;
    // if (!isDead) {
    //   switch (isSeparated) {
    //     case true:
    //       result = 2500;
    //       break;
    //     case false:
    //       result = isRetired ? 3000 : 4000;
    //       break;

    //     default:
    //       break;
    //   }
    // }
    // return result;

    // Versión 2 - Buena
    if (isDead) {
      return 1500;
    }

    if (isSeparated) {
      return 2500;
    }

    return isRetired ? 3000 : 4000;
  };
})();
