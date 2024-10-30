import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';
import { CircularProgress } from '@mui/material';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="loading-titles">
            <motion.h1 className="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >ATRIA DIGITAL</motion.h1>
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay:0.1 }}
            >
              AONDE TUDO COMEÇA
            </motion.p>
          </div>
          <CircularProgress size="3vmax" sx={{ color: "#FF7B00" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
