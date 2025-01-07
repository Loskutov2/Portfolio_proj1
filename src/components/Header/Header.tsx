import React, { useEffect } from "react";
import { HeadList, ThemeToggle } from "./Header.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../redux/store.ts';
import { toggleTheme, setTheme } from '../../redux/themeSlice.ts';


export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);
  
  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
    
  return(
      <div className="container">
          <HeadList>
            <li><a href="https://github.com/Loskutov2">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Contacts</a></li>
            <li><ThemeToggle type="checkbox" checked={theme==="light"} onChange={handleToggle} /></li>
          </HeadList>

      </div>
  )
}