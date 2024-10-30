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
            <motion.h1 className="loading-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >ATRIA DIGITAL</motion.h1>
            <CircularProgress size="3vmax" sx={{color:"#FF7B00"}}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
