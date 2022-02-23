import React from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

const SignupForm = () => {
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
      <Input
        inputType="password"
        value={''}
        name="passwordConfirm"
        onChange={handleInputChange}
        labelText={'Повторите пароль'}
        isValid={true}
      />
      <Button type="submit" text="Sign Up" isActive={true} />
    </form>
  );
};

export default SignupForm;
