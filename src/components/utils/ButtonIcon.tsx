import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ButtonProps = {
  title: string;
  link: string;
  size: 'small' | 'medium' | 'large';
  icon: IconDefinition;
};

const ButtonIcon: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Tooltip title={props.title} arrow>
      <IconButton
        size={props.size}
        href={props.link}
        aria-label={props.title}
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={props.icon} fixedWidth />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonIcon;
