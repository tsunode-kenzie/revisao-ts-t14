import { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { Input } from './components/Input';

interface ILoginData {
  email: string;
  password: string;
}

export const App = () => {
  const { register, handleSubmit } = useForm<ILoginData>();
  const [modalCart, setModalCart] = useState(false);
  // const ref = useRef<HTMLDivElement>(null);

  // const handleOutClick = (
  //   e: MouseEvent
  // ) => {
  //   if (!ref.current) {
  //     return;
  //   }

  //   const target = e.target as HTMLDivElement;

  //   if (!ref.current.contains(target)) {
  //     setModalCart(false);
  //   }

  //   document.addEventListener('mouseDown', hand)
  // };

  return (
    <div className="App">
      <h1>Teste</h1>
      {/* <div ref={ref}>

      </div> */}


      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* <input type="text" {...register('email')} />
        <input type="password" {...register('password')} /> */}
        <Input 
          id='email' 
          label='E-mail' 
          register={register('email')}
        />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}
