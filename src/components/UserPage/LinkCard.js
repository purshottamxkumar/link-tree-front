import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './LinkCard.css';

const LinkCard = (props) => {
	return (
		<>
			<a
				href={'www.leetcode.com'}
				className="w3-button w3-hover-pink w3-large w3-round-xlarge w3-yellow link link-card"
				target={'_blank'}
				rel={'noreferrer'}
			>
				{props.label}
        <div className="icon">
          <BookmarkBorderIcon />
        </div>
			</a>
		</>
	);
};

export default LinkCard;
