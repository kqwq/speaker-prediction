import React, { FC } from 'react';



var style = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px'
    },
    link: {
        display: 'inline-block',
        padding: '0px',
        margin: '0px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '1.42857143',
        verticalAlign: 'top',
        cursor: 'pointer'
    }
};


const SocialMediaLinks: FC = ({ children }) => (
      <div>
        <div style={style} className="container">
          <a href="https://www.facebook.com/groups/1755204789502693/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
          <a href="https://twitter.com/mike_schultz" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com/mike_schultz/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
          <a href="https://github.com/mschultz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        </div>

      </div>
  );

  

export default SocialMediaLinks