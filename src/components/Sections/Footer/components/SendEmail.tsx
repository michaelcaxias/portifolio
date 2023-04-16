import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { TextField } from '@mui/material';
import { ButtonPrimary } from '@/styles/components';

export default function SendEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_a3og9mp',
        'template_vjz5ubo',
        event.currentTarget,
        'user_Mj27p5lKIVSbhSnwPfLiQ'
      )
      .then(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'E-mail enviado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (_error: Error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ocorreu um erro ao enviar o e-mail!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <form className="send-email" onSubmit={(e) => sendEmail(e)}>
      <TextField
        label="Nome"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        variant="filled"
        name="name"
      />
      <TextField
        label="E-mail"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        variant="filled"
        name="email"
      />
      <TextField
        label="Mensagem"
        value={message}
        variant="filled"
        onChange={({ target: { value } }) => setMessage(value)}
        name="message"
        multiline
        rows={4}
      />
      <ButtonPrimary type="submit">Enviar</ButtonPrimary>
    </form>
  );
}
