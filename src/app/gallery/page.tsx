import ImageGrid from '../../components/ImageGrid';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

function gallery() {
  return (
    <div>
      <NavBar />
      <h1 className="text-4xl text-center m-5"> ART GALLERY</h1>
      <div className='p-10'>
      <ImageGrid />
      </div>
      <Footer />
    </div>
  )
}

export default gallery

