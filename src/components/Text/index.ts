import styled,{css} from 'styled-components/native';

type TextProps = {
  weight?: '400' | '500' | '700' | '900';
  color?: string;
  size?: number;
  opacity?: number;
};


export const Text = styled.Text<TextProps>`
${({ weight,size,color,opacity }) => css`
  font-family:${ weight ? `Inter_${weight}` : 'Inter_400'};
  color:${color || '#333'};
  font-size:${size + 'px' || '16px'};
  opacity: ${opacity || 1};
  `}
`;
