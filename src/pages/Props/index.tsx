import React from 'react';
import { Header } from './components/Header';

type UserType = {
    name: string;
    lastName: string;
    email: string;
  };

export default function Props() {
    return <div>
      <Header></Header>
    </div>;
}