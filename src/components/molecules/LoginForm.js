import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

const LoginForm = () => {
  const handleInputChange = () => {};
  return (
    <form>
      <Input
        inputType="email"
        value={''}
        name="email"
        onChange={handleInputChange}
        labelText={'Логин'}
        isValid={true}
      />
      <Input
        inputType="password"
        value={''}
        name="password"
        onChange={handleInputChange}
        labelText={'Пароль'}
        isValid={true}
      />
      <Button type="submit" text="Log In" isActive={true} />
    </form>
  );
};

export default LoginForm;
