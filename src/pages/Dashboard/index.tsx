import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/6605242?s=460&u=b1ebc5006a4743c933c1bfdae90c10f4d555c701&v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>brunocsouto/rick-morty-multiverse</strong>
            <p>React app with information about Rick and Morty&apos;s series</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/6605242?s=460&u=b1ebc5006a4743c933c1bfdae90c10f4d555c701&v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>brunocsouto/rick-morty-multiverse</strong>
            <p>React app with information about Rick and Morty&apos;s series</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/6605242?s=460&u=b1ebc5006a4743c933c1bfdae90c10f4d555c701&v=4"
            alt="Github Avatar"
          />
          <div>
            <strong>brunocsouto/rick-morty-multiverse</strong>
            <p>React app with information about Rick and Morty&apos;s series</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
