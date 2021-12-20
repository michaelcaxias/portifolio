import React, { useContext } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { MyContext } from '../../../context/MyProvider';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(MyContext);

  const changeTheme = () => {
    setDarkMode((previousTheme) => !previousTheme);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <header>
      <nav id="menu">
        <button type="button" onClick={ () => changeTheme() }>
          {darkMode ? <MdWbSunny /> : <IoMdMoon />}
        </button>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
