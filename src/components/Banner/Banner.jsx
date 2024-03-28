// import bannerpic './../../assets/Bannerbook.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="m-4">
        <div className="hero bg-base-200 lg:max-w-6xl mx-auto lg:mt-14">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1438898566i/25856774.jpg" className="rounded-lg shadow-2xl lg:ml-20 my-5" />
    {/* <img src="https://e7.pngegg.com/pngimages/399/21/png-clipart-the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-your-dreams-amazon-com-woman-text-people.png" className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div>
      <h1 className="lg:text-[56px] text-2xl font-bold lg:lin lg:leading-[84px]">Books to Freshen up <br />your bookshelf</h1>
      <Link to='/ListedBooks'><button className="bg-[#23BE0A] mt-10 p-4 text-white font-bold rounded-lg">View the List</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;