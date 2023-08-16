import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchCards() {
  const [cards, setCards] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.magicthegathering.io/v1/cards"
        );
        const fetchedCards = response.data.cards;
        const types = new Set();

        fetchedCards.forEach((card) => {
          card.types.forEach((type) => types.add(type));
        });

        const fetchedAvailableTypes = Array.from(types);

        setCards(fetchedCards);
        setAvailableTypes(fetchedAvailableTypes);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setCards([]);
        setAvailableTypes([]);
      }
    };

    fetchData();
  }, []);

  return { cards, availableTypes };
}
