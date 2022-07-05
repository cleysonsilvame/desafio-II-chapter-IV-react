import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imageUrl, setImageUrl] = useState('');

  function handleViewImage(url: string): void {
    setImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap="10">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={url => handleViewImage(url)}
            />
          );
        })}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageUrl} />
    </>
  );
}
