import React from 'react';
import { Box } from '@mui/material';
import ButtonLink from '../utils/ButtonIcon';
import { faDiscord, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Copyright: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        alignSelf: 'center',
        width: 'auto',
        padding: 2,
        textAlign: 'center',
      }}
    >
      <ButtonLink title="GitHub" icon={faGithub} link="https://github.com/antond15" />
      <ButtonLink title="Ko-Fi" icon={faMugHot} link="https://ko-fi.com/antond" />
      <ButtonLink title="Discord" icon={faDiscord} link="https://discord.gg/2ZezMw2xvR" />
      <ButtonLink title="Twitch" icon={faTwitch} link="https://twitch.tv/antond1" />
    </Box>
  );
};

export default Copyright;
