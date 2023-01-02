import React, { useState } from "react";
import { useEffect } from "react";
import {
  CardConatainer,
  CardImage,
  Input,
  TextContainer,
  ButtonContainer,
  ExcludeButton,
} from "./CartCard-Styled";

export const CartCard = (props) => {
  console.log(props);

  const { name, price, image, quantity } = props.cart;

  const [putQuantity, setPutQuantity] = useState(quantity);
  const totalItem = price * putQuantity;

  
  return (
    <CardConatainer>
      <CardImage src={image}/>
      <TextContainer>
        <p>{name}</p>
        <h1>R${totalItem},00</h1>
        <p>
          {putQuantity} unidade(s) de R${price},00
        </p>
      </TextContainer>
      <ButtonContainer>
        <Input
          type="number"
          value={putQuantity}
          min={"1"}
          onChange={(e) => {setPutQuantity(Number(e.target.value)); props.cartQuantity(props.cart,putQuantity); props.chageTotal()}}
        />
        <ExcludeButton
          onClick={() => {
            props.deleteItem(props.cart);
            props.chageTotal();
          }}
        >
          Excluir Item
        </ExcludeButton>
      </ButtonContainer>
    </CardConatainer>
  );
};
