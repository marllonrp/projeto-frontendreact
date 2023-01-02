import {
  HeaderContainer,
  NameContainer,
  CartContainerButton,
  HeaderWrapper,
  InputContainer,
  Input,
  SearchButton,
  ButtonImage,
  CartImg,
  Note,
} from "./Styled";
import cartimage from "./assets/Cart-image.png";
import buscarImg from "./assets/buscar.png";
import { useState } from "react";

export const Header = (props) => {
  const { setQuerry } = props;
  const [searchBar, setSearchBar] = useState("");
  const search = () => {
    setQuerry(searchBar);
  };

  const totalItens = props.cart.reduce((acc, product) => (product.quantity) + acc,0)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <NameContainer>
          <p>SpaceLip Store</p>
        </NameContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="O que você buasca?"
            value={searchBar}
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <SearchButton
            onClick={() => {
              search();
            }}
          >
            <ButtonImage src={buscarImg} />
          </SearchButton>
        </InputContainer>
        <CartContainerButton
          onClick={() => {
            props.setCartVisible(true);
          }}
        >
         
          {totalItens>=1?(
          <Note>
            {totalItens}
          </Note>):null}
          <CartImg src={cartimage} />
        </CartContainerButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
