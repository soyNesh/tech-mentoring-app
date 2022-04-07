import React, { FC } from "react";
import { Wrapper, Title, Status, Image, StatusTypes } from './Card.styles';

export interface ICardProps {
    name: string,
    image: string,
    status: StatusTypes,
    id: number
}

const Card:FC<ICardProps> = ({name, image, status, id}) => {
    return (
    <Wrapper>
        <Image source={{ uri: image }} resizeMode="cover"/>
        <Title>{name}</Title>
        <Status type={status}>{status}</Status>
    </Wrapper>)
    
}

export default Card;
