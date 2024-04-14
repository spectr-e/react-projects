import styled from 'styled-components'
import { Avatar } from '../../assets'

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Animation = styled.div`
  width: 240px;
  height: 240px;
  background: URL(${Avatar}) center/cover;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.2);
`
