import React from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ images }) => {
  return (
    <div style={styles.carouselContainer}>
      <motion.div
        style={styles.carousel}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 10,  // Tempo para completar uma rotação
          ease: 'linear'
        }}
      >
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-img-${index}`}
            style={styles.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    overflow: 'hidden',
    width: '100vw', // ajusta ao tamanho da tela
    display: 'flex',
    alignItems: 'center',
  },
  carousel: {
    display: 'flex',
    width: 'calc(200vw)', // largura duplicada para o loop suave
  },
  image: {
    width: '100vw',
    height: 'auto',
  },
};

export default Carousel;
