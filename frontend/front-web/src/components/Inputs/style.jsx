import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  padding: 30px 0 0 0;
`;

export const Input = styled.input`
  border: 1px solid #00000000;
  border-radius: 1rem;
  background: #121214;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f547;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `width: 200px;`;
      case 'md':
        return `width: 250px;`;
      case 'lg':
        return `width: 300px;`;
      case 'all':
        return `width: 100%;`;
      default:
        return `width: 100%;`;
    }
  }}
  &:focus + label{
    transform: translateY(-1.5rem);
    font-size: 0.8rem;
    color: #1a73e8;
  }
  &:focus{
    border:2px solid #0077ff;
  }
  &:focus, &:valid {
    outline: none;
   }

  &:placeholder-shown + label {
    transform: translateY(1rem);
    font-size: 1rem;
  }
  &:-webkit-autofill + label{
    animation-name: onAutoFillStart;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    background: #0000;
  }

  //background
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #121214 inset;
    border: 1px solid #fff;
  }

  //text
  &:-webkit-autofill {
    -webkit-text-fill-color: #f5f5f547 !important;
  }
  
  @keyframes onAutoFillStart{
    from { opacity: 0; }
    to   { transform:translateY(-1.5rem); }
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 15px;
  color: #f5f5f547;
  pointer-events: none;
  transform: ${({ isFocus }) => isFocus ? 'translateY(-1.5rem)' : 'translateY(1rem)'};
  background: ${({ isFocus }) => isFocus ? '' : ' #121214'};
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${({ isFocus }) => isFocus ? '0.8rem' : '1rem'};
`;