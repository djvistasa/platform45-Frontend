/**
 *
 * Avatar
 *
 */

import React from 'react';
import AvatarIcon from '../../assets/icons/avatar.svg';
import StyledAvatar from './styledAvatar';


function Avatar() {
  return (
    <StyledAvatar>
      <img src={AvatarIcon} alt="avatar"/>
    </StyledAvatar>
  );
}

Avatar.propTypes = {};

export default Avatar;
