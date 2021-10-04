import styled from "styled-components";

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  
  & input:focus + label,
  & input.open + label{
    font-size: 13px;
    top: -15px;
  }
`

export const InputStyle = styled.input`
    width: 280px;
    height: 30px;
    border: none;
    border-bottom: 2px solid #3f3f3f;
    outline: none;
    font-size: 15px;
    color: #d2d2d2;
    background-color: transparent;
    transition: border-bottom-color .3s linear;
    &:hover{
        border-bottom-color: #d2d2d2;
    }
`
export const LabelStyle = styled.label`
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 7px;
    left: 0;
    font-size: 15px;
    background: transparent;
    transition: all .3s ease;
    color: #808080;
`
export const ErrorComment = styled.label`
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 7px;
    right: -3px;
    transition: all .3s ease;
    color: red;
    font-size: 14px;
    top: -23px;
    font-weight: 600;
    padding-top: 7px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

// export const InputSidebar = styled.