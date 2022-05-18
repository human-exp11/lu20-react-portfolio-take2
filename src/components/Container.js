import React from 'react';

const styles = {
  pageHeightStyle: {
    backgroundColor: "#f0f8ff"
  }
}

export default function PortfolioContainer({renderPage}) {


  return (
    <div className="vh-100" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}