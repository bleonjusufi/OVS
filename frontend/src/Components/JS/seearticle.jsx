import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import React from "react";
import '../CSS/seearticle.css';

function seeArticlePage() {
  const articleContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis felis leo. 
    Phasellus vel ipsum sed nunc cursus venenatis. Suspendisse potenti. Nam 
    efficitur ex ac felis vestibulum, in dignissim lacus mattis. Fusce a eros 
    aliquam, consectetur eros et, maximus tortor. Ut facilisis ante mauris, 
    eget dapibus lorem volutpat id. Morbi vulputate leo vitae est aliquam, id 
    vulputate lacus bibendum. Aliquam pharetra turpis a efficitur lobortis. 
    Integer facilisis tellus quis libero tincidunt, vel malesuada nulla 
    commodo. Sed ultricies nunc id neque interdum, et fringilla metus aliquam. 
    Sed semper finibus ante et rhoncus.
  `;

  return (
    <div>
    <Header/>
    <Sidebar />
    <div className="article">
      <h2>Article Title</h2>
      {articleContent}
    </div>
    <Footer/>
  </div>
    
  );
}

export default seeArticlePage;
