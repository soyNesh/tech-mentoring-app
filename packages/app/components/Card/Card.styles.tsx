import styled from "styled-components/native";
import { COLORS } from "app/utils/constants";

export type StatusTypes = 'Alive' | 'Dead' | 'Unknown';

export const Wrapper = styled.View`
    flex: 1;
    width: 96%;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${COLORS.blueDemon};
    margin: 10px;
    min-height: 300px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${COLORS.black};
`;

export const Image = styled.Image`
    flex: 1;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 10px;
`;

export const Status = styled.Text<{type: StatusTypes}>`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${COLORS.white};
    background-color: ${({ type }) => type === 'Alive' ? COLORS.green : type === 'Dead' ? COLORS.red : COLORS.gray };
`;