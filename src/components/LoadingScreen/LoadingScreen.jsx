import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';
import { CircularProgress } from '@mui/material';
import Logo from '../../assets/logo2.svg';

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
            <motion.div className="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
                <img src={Logo} alt="Logo Atria Digital" className='logo2'/>
            </motion.div>
            <CircularProgress size="3vmax" sx={{ color: "#FF7B00" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
