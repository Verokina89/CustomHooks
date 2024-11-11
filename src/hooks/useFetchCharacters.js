import { useState, useEffect } from 'react';

const useFetchCharacters = (url) => {
  const [data, setData] = useState(null); //almacena datos de la API
  const [loading, setLoading] = useState(true); //maneja carga de datos
  const [error, setError] = useState(null); //manejo de  errores

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url); //hace la solicitud a la API
        if (!response.ok) {
          throw new Error('Error fetching data'); //controla o maneja errores de respuesta
        }
        const result = await response.json(); //pasa response a JSON
        setData(result); //guarda los datos
      } catch (err) {
        setError(err.message); //guarda el error
      } finally {
        setLoading(false); //cambia estado de carga a falso
      }
    };

    fetchData();
  }, [url]); //ejecuta nuevamente si se cambia la URL

    return { 
        data, 
        loading, 
        error 
    }; //retorna todos los datos(carga y error)
};

export default useFetchCharacters;
